import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-epadre4',
  templateUrl: './epadre4.component.html',
  styleUrls: ['./epadre4.component.css']
})
export class Epadre4Component {
  public usuarioLogado :  Usuario = new Usuario();
  public nombre : string =  "";
  public email : string = "";

  constructor(public usuarioService: UsuarioService){

  }

  mostrarUserLogado(){
    this.usuarioLogado = this.usuarioService.obtenerUsuarioLogeado();
    this.nombre = this.usuarioLogado.nombreCompleto;
  }

  recibirEmail(email: string){
    this.email = email;
  }
}
