import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = '062 formValores';

  codigo: string = '';
  nombre: string = '';
  edad: number = 20;
  opcion: string = '2';
  sexo: string = 'hombre';
  comentarios: string = 'lorem ipsum';
  activar: boolean = true;

  mostrarVar() {
    console.log(
      'Codigo (' +
        this.codigo +
        ')' +
        ' Nombre (' +
        this.nombre +
        ')' +
        ' Edad (' +
        this.edad +
        ')' +
        ' Opcion (' +
        this.opcion +
        ')' +
        ' Sexo (' +
        this.sexo +
        ')' +
        ' Comentarios (' +
        this.comentarios +
        ')' +
        ' Activar (' +
        this.activar +
        ')'
    );
  }

  onSubmit() {
    console.log('Submit');
  }
}
