import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compo1',
  template: `
    <p>compo1 works!</p>

    <div>
      <button (click)="saludar()">Saludar</button>
      <h1>{{ texto }}</h1>
    </div>
  `,
  styleUrls: ['./compo1.component.css'],
})
export class Compo1Component implements OnInit {
  texto: string;

  constructor() {
    this.texto = '';
  }

  ngOnInit(): void {}

  saludar() {
    this.texto = 'Hola mundo en compo1.';
  }
}
