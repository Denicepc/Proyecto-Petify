import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-chijo',
  templateUrl: './chijo.component.html',
  styleUrls: ['./chijo.component.css']
})
export class ChijoComponent {

  @Input() email : string = "";
  @Input() idUsu : string = "";
  @Output() mandarEmail : EventEmitter <string> = new EventEmitter();

  constructor(public usuarioService: UsuarioService){}

  enviarEmailAlPadre(){
    this.email = this.usuarioService.usuarioSeleccionado.email;
    this.mandarEmail.emit(this.email);
  }




}
