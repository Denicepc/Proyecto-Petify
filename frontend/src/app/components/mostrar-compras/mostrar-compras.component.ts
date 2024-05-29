import { Component } from '@angular/core';
import { MisCompras } from 'src/app/models/mis-compras';
import { MisComprasService } from 'src/app/services/mis-compras.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-mostrar-compras',
  templateUrl: './mostrar-compras.component.html',
  styleUrls: ['./mostrar-compras.component.css']
})
export class MostrarComprasComponent {

  public primerProducto : string = "";
  public segundoProducto : string = "";

  public compras: MisCompras[]=[];
  public email : string = "";

  constructor(public misComprasService: MisComprasService, public usuarioService: UsuarioService){}

  recogerCompras(){
    this.email = this.usuarioService.emailUsuarioLogeado;
    this.misComprasService.obtenerComprasUsuario(this.email).subscribe(
      (res : any) => {
        this.compras = res;

        const primeraCompra = this.compras[0]; //primera compra
        const ultimaCompra = this.compras[this.compras.length-1]; //ultima compra

        this.primerProducto = primeraCompra.productos[0].nombreProd;
        this.segundoProducto = ultimaCompra.productos[ultimaCompra.productos.length -1].nombreProd;

        });
  }

}
