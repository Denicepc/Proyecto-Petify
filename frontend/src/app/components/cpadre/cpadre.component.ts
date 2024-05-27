import { UsuarioService } from 'src/app/services/usuario.service';
import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-cpadre',
  templateUrl: './cpadre.component.html',
  styleUrls: ['./cpadre.component.css']
})
export class CpadreComponent {

  public usuarioLogado : Usuario = new Usuario();
  public email : string = "";
  public nombre : string = "";

  constructor(public usuarioService: UsuarioService) {}

  mandarUsuario(){
    this.usuarioLogado = this.usuarioService.obtenerEmailUsuarioLogeado();
    this.nombre = this.usuarioLogado.nombreCompleto;
  }

  //metodo del hijo que manda el email al padre
  recogerEmail(email: string){
    this.email = email;
  }

}
