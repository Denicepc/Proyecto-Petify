import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ejercicio8hijo',
  templateUrl: './ejercicio8hijo.component.html',
  styleUrls: ['./ejercicio8hijo.component.css']
})
export class Ejercicio8hijoComponent {

  @Input() cantidadEnviada : number = 0;
  @Output() devolverMensaje : EventEmitter<string> = new EventEmitter();

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['cantidadEnviada'].currentValue)
      this.devolverMensaje.emit("El usuario ha hecho una compra");
    else this.devolverMensaje.emit("El usuario no ha comprado nunca");
  }

}
