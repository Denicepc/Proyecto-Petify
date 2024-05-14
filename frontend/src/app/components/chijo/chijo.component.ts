import { Component, EventEmitter, Input, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-chijo',
  templateUrl: './chijo.component.html',
  styleUrls: ['./chijo.component.css']
})
export class CHijoComponent {

  @Input() cantidadEnviada: number = 0;
  @Output() devolverMensaje: EventEmitter<string> = new EventEmitter();

  ngOnChanges(changes: SimpleChanges): void {

    if(changes['cantidadEnviada'].currentValue){
      this.devolverMensaje.emit("El usuario ha hecho alguna compra");
    }
    else this.devolverMensaje.emit("El usuario NO ha hecho ninguna compra");


  }



}
