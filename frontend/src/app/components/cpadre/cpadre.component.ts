import { Component } from '@angular/core';
import { MisCompras } from 'src/app/models/mis-compras';
import { MisComprasService } from 'src/app/services/mis-compras.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-cpadre',
  templateUrl: './cpadre.component.html',
  styleUrls: ['./cpadre.component.css']
})
export class CpadreComponent {

  public email : string = "";
  public compras: MisCompras[] = [];
  public totalCompras: number = 0;
  public totalUltimaCompra: number = 0;

  constructor(public usuarioService: UsuarioService, public misComprasService: MisComprasService){}

  recogerCompras(){
    this.email = this.usuarioService.emailUsuarioLogeado;
    this.misComprasService.obtenerComprasUsuario(this.email).subscribe(
      (res : any) => {
        this.compras = res;
        this.totalCompras = this.compras.length;
      }
    )
  }


  //metodo del output de hijo a padre
  ultimaCompra(totalUltimaCompra : number){
    this.totalUltimaCompra = totalUltimaCompra;
  }

}
