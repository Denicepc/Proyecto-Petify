import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-clase-hija',
  templateUrl: './clase-hija.component.html',
  styleUrls: ['./clase-hija.component.css']
})
export class ClaseHijaComponent {

  @Input() totalCompras: number = 0;

}
