import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'app works!';
  ponFondo: boolean = true;
  mostrar: boolean = true;
  habilitar = false;
  referencia: string = 'http://www.google.com';
}
