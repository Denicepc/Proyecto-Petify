import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MisCompras } from 'src/app/models/mis-compras';

@Component({
  selector: 'app-cnew-hijo6',
  templateUrl: './cnew-hijo6.component.html',
  styleUrls: ['./cnew-hijo6.component.css']
})
export class CNewHijo6Component {
  @Input() comprasRecibidas : MisCompras[] = [];
  public cantidadCompras : number = 0;
  @Output() enviarCant : EventEmitter<number>= new EventEmitter();

  mandarCantidad(){
    this.cantidadCompras = this.comprasRecibidas.length;
    this.enviarCant.emit(this.cantidadCompras);
  }
}
