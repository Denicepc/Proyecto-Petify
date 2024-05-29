import { Component } from '@angular/core';
import { MisCompras } from 'src/app/models/mis-compras';
import { MisComprasService } from 'src/app/services/mis-compras.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-padrehijo',
  templateUrl: './padrehijo.component.html',
  styleUrls: ['./padrehijo.component.css']
})
export class PadrehijoComponent {

  public email : string = "";
  public compras: MisCompras[] =[];
  public comprasTotales : number = 0;

  constructor(public usuarioService: UsuarioService, public misComprasService: MisComprasService){}

  recogerProductos(){
    this.email = this.usuarioService.obtenerEmailUsuarioLogeado();
    this.misComprasService.obtenerComprasUsuario(this.email).subscribe(
      (res: any) =>{
        this.compras = res;
      }
    )
  }


  mandarHijo(compra : number){
    this.comprasTotales = compra;
  }


}
