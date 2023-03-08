import { Attribute, Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-compo1',
  templateUrl: './compo1.component.html',
  styleUrls: ['./compo1.component.css'],
})
export class Compo1Component {
  contaClick: number = 0;
  contaOver: number = 0;

  constructor(@Attribute('miAtributo') atributo: any) {
    console.log(atributo);
  }

  @HostListener('click', ['$event'])
  onHostClick(event: Event) {
    console.log('click on app: ' + event);
    this.contaClick += 1;
  }

  @HostListener('mouseover', ['$event'])
  onMouseOver(event: Event) {
    console.log('mouseOver on app: ' + event);
    this.contaOver += 1;
  }
}
