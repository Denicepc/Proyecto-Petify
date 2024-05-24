import { Component, EventEmitter, Input, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-chijo',
  templateUrl: './chijo.component.html',
  styleUrls: ['./chijo.component.css']
})
export class CHijoComponent {

  @Input() cantidadCompras : number = 0 ;
  @Output() devolverMensaje : EventEmitter <string> = new EventEmitter();

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['cantidadCompras'].currentValue){
      this.devolverMensaje.emit("El usuario ha hecho una compra");
    }else this.devolverMensaje.emit("El usuario no ha hecho ninguna compra");
  }

}
