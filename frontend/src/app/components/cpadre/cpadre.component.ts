import { UsuarioService } from './../../services/usuario.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cpadre',
  templateUrl: './cpadre.component.html',
  styleUrls: ['./cpadre.component.css']
})
export class CpadreComponent {

  public email : string = "";
  public nombre : string = "";
  public idUsu : string = "";

  constructor(private usuarioService: UsuarioService) {}

  nombreEmail(){
    this.nombre = this.usuarioService.usuarioSeleccionado.nombreCompleto;
    this.idUsu = this.usuarioService.usuarioSeleccionado._id;
  }

  //metodo del hijo que manda el email al padre
  recogerEmail(email: string){
    this.email = email;
  }

}
