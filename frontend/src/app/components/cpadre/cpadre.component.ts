import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-cpadre',
  templateUrl: './cpadre.component.html',
  styleUrls: ['./cpadre.component.css']
})
export class CPadreComponent implements OnInit{

  public emailLogado: string = '';
  public mensaje: string = '';

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.emailLogado = this.usuarioService.obtenerEmailUsuarioLogeado();
  }

  recibirMensaje(mensaje: string): void {
    this.mensaje = mensaje;
  }

}
