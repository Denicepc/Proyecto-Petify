import { Component, Input, Output, SimpleChanges } from '@angular/core';
import { Carrito, ProductoCarrito } from 'src/app/models/carrito';
import { MisCompras } from 'src/app/models/mis-compras';

@Component({
  selector: 'app-ejercicio7',
  templateUrl: './ejercicio7.component.html',
  styleUrls: ['./ejercicio7.component.css']
})
export class Ejercicio7Component {

  @Input() carritoRecibido : Carrito = new Carrito()
  public arrayMostrar : ProductoCarrito[] = [];

  ngOnChanges(changes: SimpleChanges): void {

    if(changes['carritoRecibido'].currentValue){

      this.arrayMostrar = this.carritoRecibido.productos;

    }

  }

}
