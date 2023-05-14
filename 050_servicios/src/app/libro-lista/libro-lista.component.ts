import { Component, OnInit } from '@angular/core';
import { LIBROS } from '../mocks';
import { Libro } from '../libro.model';
import { LibroService } from '../libro.service';
import { LoggerService } from '../logger.service';
import { LibroObservableService } from '../libro-observable.service';

@Component({
  selector: 'app-libro-lista',
  templateUrl: './libro-lista.component.html',
  styleUrls: ['./libro-lista.component.css'],
})
export class LibroListaComponent implements OnInit {
  libros: Libro[];
  observableSubs: any;

  constructor(private libroObservableService: LibroObservableService) {
    this.libros = LIBROS;
  }

  ngOnInit() {
    this.observableSubs = this.libroObservableService.getLibros().subscribe(
      (libros) => (this.libros = libros),
      (error) => console.log(error),
      () => console.log('this.libroObservableService.getLibros() FINALIZADO')
    );
  }

  ngOnDestroy() {
    if (this.observableSubs) this.observableSubs.unsubscribe();
  }

  /*ngOnInit(): void {
    this.libroService
      .getLibros()
      .then((libros) => {
        this.loggerService.log('Ejecucion del 1º then');
        return libros;
      })
      .then((libros) => {
        this.loggerService.log('Ejecucion del 2º then');
        return new Promise<Libro[]>((resolve, reject) => {
          // (*)
          this.loggerService.log('Inicio ejecutor (Promise del 2º then)');
          setTimeout(() => {
            this.loggerService.log('Fin ejecutor (Promise del 2º then)');
            resolve(libros);
          }, 5000);
        });
      })
      .then((libros) => {
        this.loggerService.log('Ejecucion del 3º then');
        this.libros = libros;
      });
  }*/
}
