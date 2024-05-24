import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-cpadre',
  templateUrl: './cpadre.component.html',
  styleUrls: ['./cpadre.component.css']
})
export class CpadreComponent implements OnInit{
  public emailLogado : string = "";

  constructor(public usuarioService: UsuarioService){}

  ngOnInit(): void {
    this.recogerUsuario();
  }

  recogerUsuario(){
    this.emailLogado = this.usuarioService.obtenerEmailUsuarioLogeado();
  }



}
