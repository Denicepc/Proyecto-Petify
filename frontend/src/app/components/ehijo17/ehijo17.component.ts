import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-ehijo17',
  templateUrl: './ehijo17.component.html',
  styleUrls: ['./ehijo17.component.css']
})
export class Ehijo17Component {
  @Input() productosEnviados: string[] = [];
  @Output() enviarTotal : EventEmitter<number> = new EventEmitter();

  devolverTotal(){
    this.enviarTotal.emit(this.productosEnviados.length);
  }
}
