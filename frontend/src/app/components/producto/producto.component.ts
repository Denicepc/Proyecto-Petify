import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Carrito, ProductoCarrito } from 'src/app/models/carrito';
import { Pienso } from 'src/app/models/pienso';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
  export class ProductoComponent {
    @Input() piensoEnviado : Pienso;

  constructor(private carritoService: CarritoService){
    this.piensoEnviado = new Pienso();
  }

  agregarAlCarrito(cantidad: any){
    let unidades = parseInt(cantidad);
    const producto = new ProductoCarrito(this.piensoEnviado._id, this.piensoEnviado.nombre, unidades, this.piensoEnviado.precio);
    this.carritoService.agregarAlCarrito(producto);
    console.log(producto);
  }
}
