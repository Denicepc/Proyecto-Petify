import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-componente-hijo',
  templateUrl: './componente-hijo.component.html',
  styleUrls: ['./componente-hijo.component.css']
})
export class ComponenteHijoComponent {

  public mensaje: String ="HOLA";

@Input()enviadoHijo:Number=0;

@Output()enviarPadre = new EventEmitter<String>

ngOnChanges(): void {

  this.enviarPadre.emit(this.mensaje);

}



}
