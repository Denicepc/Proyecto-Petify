import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { MisCompras } from 'src/app/models/mis-compras';

@Component({
  selector: 'app-chijo',
  templateUrl: './chijo.component.html',
  styleUrls: ['./chijo.component.css']
})
export class ChijoComponent implements OnChanges {

  @Input() cantidadCompras : number = 0;
  @Input() compras : MisCompras[] = [];
  @Output() enviarTotalUltimaCompra : EventEmitter <number> = new EventEmitter();

  //hacer el total de la ultima compra
  ngOnChanges(changes: SimpleChanges): void {
    const totalultimaCompra = this.compras[this.compras.length -1].total;
    this.enviarTotalUltimaCompra.emit(totalultimaCompra);
  }


}
