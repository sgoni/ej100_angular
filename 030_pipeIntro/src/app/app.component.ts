import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pipeIntro';
  idFormatoFecha = true; // true == shortDate ; false == fullDate

  fecha1 = new Date(1988, 3, 15); //15 de Abril del 1988

  get formatoFecha() {
    return this.idFormatoFecha ? 'shortDate' : 'fullDate';
  }

  cambiarFormatoFecha() {
    this.idFormatoFecha = !this.idFormatoFecha;
  }
}
