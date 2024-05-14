import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MisCompras } from 'src/app/models/mis-compras';

@Component({
  selector: 'app-componente-hijo',
  templateUrl: './componente-hijo.component.html',
  styleUrls: ['./componente-hijo.component.css']
})
export class ComponenteHijoComponent{

  @Input() comprasRecibidas: MisCompras[] = [];
  public cantidadCompras: number = 0;

  @Output() enviarCant: EventEmitter <number> = new EventEmitter();

  mandarCantidad(){ //estas mandando la cantidad de compras que tiene el usuario

    this.cantidadCompras=this.comprasRecibidas.length;
    this.enviarCant.emit(this.cantidadCompras);

  }

}
