import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { MisComprasService } from 'src/app/services/mis-compras.service';
import { MisCompras } from 'src/app/models/mis-compras';

@Component({
  selector: 'app-mostrar-compras-usuari',
  templateUrl: './mostrar-compras-usuari.component.html',
  styleUrls: ['./mostrar-compras-usuari.component.css']
})
export class MostrarComprasUsuariComponent {

  public email : string = "";
  public compras : MisCompras[] = [];
  public totalDeCompras : number = 0;

  constructor(public misComprasService: MisComprasService, public usuarioService: UsuarioService){}

  totalCompras(){
    this.email = this.usuarioService.emailUsuarioLogeado;
    this.misComprasService.obtenerComprasUsuario(this.email).subscribe(
      (res: any) =>{
        this.compras = res;
        this.totalDeCompras = this.compras.length;
      });
  }
}
