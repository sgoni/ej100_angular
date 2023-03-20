import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'dataBinding';

  Libro = {
    titulo: 'Hamlet',
    autor: 'William Shakespeare',
    precio: 21.3,
    stock: 5,
    cantidad: 0,
    imagen: 'assets/oldbooks.jpg',
  };

  downCantidad(libro: any) {
    if (libro.cantidad > 0) libro.cantidad--;
  }

  upCantidad(libro: any) {
    if (libro.cantidad < libro.stock) libro.cantidad++;
  }

  getCoord(event: any) {
    console.log(event.clientX + ',' + event.clientY);
  }
}
