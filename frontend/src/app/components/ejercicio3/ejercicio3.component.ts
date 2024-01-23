import { Component } from '@angular/core';
import { Carrito } from 'src/app/models/carrito';
import { CarritoService } from 'src/app/services/carrito.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ejercicio3',
  templateUrl: './ejercicio3.component.html',
  styleUrls: ['./ejercicio3.component.css']
})
export class Ejercicio3Component {
  public carrito : Carrito = new Carrito();
  public carritoSubscription: Subscription;

  constructor(public carritoService: CarritoService){
    this.carritoSubscription = this.carritoService.carritoSeleccionado$.subscribe( 
    carrito2 => {
      this.carrito = carrito2;
    }
  );
  }
}
