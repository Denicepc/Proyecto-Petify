import { UsuarioService } from 'src/app/services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-cpadre',
  templateUrl: './cpadre.component.html',
  styleUrls: ['./cpadre.component.css']
})
export class CpadreComponent implements OnInit {

  public usuarioLogado : Usuario = new Usuario();
  public email : string = "";
  public nombre : string = "";

  constructor(public usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.mostrarUserLogado();
  }

  mostrarUserLogado(){
    this.usuarioLogado = this.usuarioService.obtenerUsuarioLogeado();
    this.nombre = this.usuarioLogado.nombreCompleto;
  }

  //metodo del hijo que manda el email al padre
  recogerEmail(email: string){
    this.email = email;
  }

}
