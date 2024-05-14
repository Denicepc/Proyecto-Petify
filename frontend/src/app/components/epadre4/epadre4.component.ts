import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-epadre4',
  templateUrl: './epadre4.component.html',
  styleUrls: ['./epadre4.component.css']
})
export class Epadre4Component {
  public usuarioLogado :  Usuario = new Usuario();  //variable la cual almacenas los datos del usuario logado
  public nombre : string =  "";  //nombre del usuario
  public email : string = ""; //email del usuario

  constructor(public usuarioService: UsuarioService){}

  mostrarUserLogado(){
    this.usuarioLogado = this.usuarioService.obtenerUsuarioLogeado();
    this.nombre = this.usuarioLogado.nombreCompleto;
  }

  //metodo que le pasas al hijo
  recibirEmail(email: string){
    this.email = email;
  }

}
