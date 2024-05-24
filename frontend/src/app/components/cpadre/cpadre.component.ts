import { Component } from '@angular/core';
import { MisCompras } from 'src/app/models/mis-compras';
import { MisComprasService } from 'src/app/services/mis-compras.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-cpadre',
  templateUrl: './cpadre.component.html',
  styleUrls: ['./cpadre.component.css']
})
export class CPadreComponent {

    public email : string = "";
    public compras : MisCompras[] =[];
    public cantidadCompra : number = 0;
    public mensaje : string = "";

    constructor(public misComprasService: MisComprasService, public usuarioService: UsuarioService ){}

    conseguirCompras(){
      this.email = this.usuarioService.emailUsuarioLogeado;

      this.misComprasService.obtenerComprasUsuario(this.email).subscribe(
        (res : any) => {
          this.compras = res;
          if(this.compras.length > 0){ //usuario ha hecho compras
            this.cantidadCompra = this.compras.length; //almacenas todo el dato numerico
          }
          else this.cantidadCompra = 0;
        }
      );
    }


    //el hijo pasa mensaje al padre, lo recogeras en este metodo
    recibirMensaje(mensaje: string){
      this.mensaje = mensaje;
    }


}
