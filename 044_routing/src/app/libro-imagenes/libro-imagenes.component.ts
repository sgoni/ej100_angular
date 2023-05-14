import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-libro-imagenes',
  templateUrl: './libro-imagenes.component.html',
  styleUrls: ['./libro-imagenes.component.css'],
})
export class LibroImagenesComponent implements OnInit {
  idLibro: string | null;

  constructor(private route: ActivatedRoute) {
    this.idLibro = '';
  }

  ngOnInit(): void {
    this.route.parent?.paramMap.subscribe((params: ParamMap) => {
      this.idLibro = params.get('id');
    });
  }
}
