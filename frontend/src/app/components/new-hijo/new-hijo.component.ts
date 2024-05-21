import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MisCompras } from 'src/app/models/mis-compras';

@Component({
  selector: 'app-new-hijo',
  templateUrl: './new-hijo.component.html',
  styleUrls: ['./new-hijo.component.css']
})
export class NewHijoComponent {

  @Input() todasLasCompras : MisCompras [] = []; //aqui es donde tienes las compra del usuario
  public numeroDeCompras : number = 0; //almacenas en una variable numerica el numero de compras del usuario
  @Output() enviarCantidad : EventEmitter <number> = new EventEmitter();


  mandarCantidadDeCompras(){
    this.numeroDeCompras = this.todasLasCompras.length; //almacenamos las compras en formato numerico
    this.enviarCantidad.emit(this.numeroDeCompras);
  }


}
