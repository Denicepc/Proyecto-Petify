import { Usuario } from './../../models/usuario';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-chijo',
  templateUrl: './chijo.component.html',
  styleUrls: ['./chijo.component.css']
})
export class ChijoComponent {

  @Input() usuarioMandado: Usuario = new Usuario();
  @Output() enviarEmail : EventEmitter <string> = new EventEmitter();

  devolverEmail(){
    this.enviarEmail.emit(this.usuarioMandado.email);
  }

}
