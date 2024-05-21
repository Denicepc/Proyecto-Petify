import { Component } from '@angular/core';
import { MisCompras } from 'src/app/models/mis-compras';
import { MisComprasService } from 'src/app/services/mis-compras.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-new-padre',
  templateUrl: './new-padre.component.html',
  styleUrls: ['./new-padre.component.css']
})
export class NewPadreComponent {

  public email : string = "";
  public compras: MisCompras[] = [];
  public resultado : string = "";

  constructor(public misComprasService: MisComprasService, public usuarioService: UsuarioService){}

  recogerCompras(){
    this.email = this.usuarioService.emailUsuarioLogeado;
    this.misComprasService.obtenerComprasUsuario(this.email).subscribe(
      (res : any) => {
        this.compras = res; //almacenamos las compras del usuario logado
      }
    )
  }


recibirCompras(cant: number){
  this.resultado = "La cantidad comprada por "+this.email+ " es: " + cant;
}



}
