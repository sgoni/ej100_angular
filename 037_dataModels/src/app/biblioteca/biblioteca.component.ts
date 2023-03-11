import { Component, OnInit } from '@angular/core';
import { Libro } from '../libro.model';
import { LIBROS } from '../mocks';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.component.html',
  styleUrls: ['./biblioteca.component.sass'],
})
export class BibliotecaComponent implements OnInit {
  libros: Libro[] = [];

  ngOnInit() {
    this.libros = LIBROS;
  }
}
