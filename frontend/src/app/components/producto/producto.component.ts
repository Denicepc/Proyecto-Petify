import { Component, Input } from '@angular/core';
import { Pienso } from 'src/app/models/pienso';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
  @Input() piensoEnviado : Pienso;

  constructor(){
    this.piensoEnviado = new Pienso();
  }

  //hacer un metodo Añadir al carrito

}
