import { UsuarioService } from 'src/app/services/usuario.service';
import { Component } from '@angular/core';
import { MisCompras } from 'src/app/models/mis-compras';
import { MisComprasService } from 'src/app/services/mis-compras.service';

@Component({
  selector: 'app-cpadre',
  templateUrl: './cpadre.component.html',
  styleUrls: ['./cpadre.component.css']
})
export class CPadreComponent {

  public mensaje: string = "";
  public compras: MisCompras[] = [];
  public emailUsu: string = "";
  public NumeroCompras: number = 0;

  constructor(public misComprasService: MisComprasService, public usuarioService: UsuarioService){}

  recogerCompras(){
    this.emailUsu = this.usuarioService.emailUsuarioLogeado;

    this.misComprasService.obtenerComprasUsuario(this.emailUsu).subscribe(
      (res: any) =>{
        this.compras = res;
        this.NumeroCompras = this.compras.length;
      });
  }

  recibirMensaje(mensaje: string){
    this.mensaje = mensaje;
  }


}
