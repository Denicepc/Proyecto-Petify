import { Component } from '@angular/core';
import { MisCompras } from 'src/app/models/mis-compras';
import { MisComprasService } from 'src/app/services/mis-compras.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-compras-de-un-usuario',
  templateUrl: './compras-de-un-usuario.component.html',
  styleUrls: ['./compras-de-un-usuario.component.css']
})
export class ComprasDeUnUsuarioComponent {

  public email : string = "";
  public contarCompra : number = 0;
  public compras: MisCompras[] = [];

  constructor(public usuarioService: UsuarioService, public misComprasService: MisComprasService){}

  reocger() {
    this.email = this.usuarioService.emailUsuarioLogeado;
    this.misComprasService.obtenerComprasUsuario(this.email).subscribe(
      (res: any) => {
        this.compras=res;
        this.contarCompra = this.compras.length;
      }
    )
  }

}
