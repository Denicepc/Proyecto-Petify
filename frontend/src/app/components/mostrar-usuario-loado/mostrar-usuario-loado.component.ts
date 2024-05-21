import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-mostrar-usuario-loado',
  templateUrl: './mostrar-usuario-loado.component.html',
  styleUrls: ['./mostrar-usuario-loado.component.css']
})
export class MostrarUsuarioLoadoComponent implements OnInit{

  public obtenerEmail : string = '';

  constructor(public usuarioService: UsuarioService){}

  ngOnInit(): void {
    this.recogerUsuario();
  }

  recogerUsuario(){
    this.obtenerEmail = this.usuarioService.emailUsuarioLogeado;
  }


}
