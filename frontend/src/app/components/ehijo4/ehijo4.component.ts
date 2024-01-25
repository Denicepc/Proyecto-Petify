import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-ehijo4',
  templateUrl: './ehijo4.component.html',
  styleUrls: ['./ehijo4.component.css']
})
export class Ehijo4Component {
  @Input() usuarioMandado : Usuario = new Usuario();
  @Output() enviarEmail : EventEmitter<string> = new EventEmitter();

  devolverEmail(){
    this.enviarEmail.emit(this.usuarioMandado.email);
  }
}
