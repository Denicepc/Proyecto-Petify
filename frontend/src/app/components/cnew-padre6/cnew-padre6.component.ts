import { Component } from '@angular/core';
import { MisCompras } from 'src/app/models/mis-compras';
import { UsuarioService } from 'src/app/services/usuario.service';
import { MisComprasService } from 'src/app/services/mis-compras.service';

@Component({
  selector: 'app-cnew-padre6',
  templateUrl: './cnew-padre6.component.html',
  styleUrls: ['./cnew-padre6.component.css']
})
export class CNewPadre6Component {
  public email: string = "";
  public compras : MisCompras[] = [];
  public resultado: string = "";

  constructor(public usuarioService : UsuarioService, public misComprasService : MisComprasService){}

  recogerCompras(){
    this.email = this.usuarioService.emailUsuarioLogeado;

    this.misComprasService.obtenerComprasUsuario(this.email).subscribe(
      (res: any )=> {
        this.compras = res;
      });

  }

  recibirCantidad(cant: number){
    this.resultado = "La cantidad comprada por "+this.email +" es: "+cant;
  }
}
