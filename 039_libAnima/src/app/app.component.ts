import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('estado', [
      state(
        'inactivo',
        style({
          backgroundColor: '#FFFF00',
          transform: 'scale(1)',
          color: 'blue',
        })
      ),
      state(
        'activo',
        style({
          backgroundColor: '#013QADF',
          transform: 'scale(2.0)',
          color: 'white',
        })
      ),
    ]),
    transition('inactivo => activo', animate('1000ms ease-in')),
    transition('activo => inactivo', animate('1000ms ease-out')),
  ],
})
export class AppComponent {
  title = 'libAnima';
  estado: string = 'inactivo';

  cambioEstado() {
    this.estado == 'activo' ? 'inactivo' : 'activo';
  }
}
