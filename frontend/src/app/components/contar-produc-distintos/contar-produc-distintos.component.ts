import { MisComprasService } from './../../services/mis-compras.service';
import { Component } from '@angular/core';
import { MisCompras } from 'src/app/models/mis-compras';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-contar-produc-distintos',
  templateUrl: './contar-produc-distintos.component.html',
  styleUrls: ['./contar-produc-distintos.component.css']
})
export class ContarProducDistintosComponent {

  public email : string = "";
  public compras : MisCompras[] =[];
  public nombreProducto : string = "";
  public cantidad : number = 0;

  //CONTAR LOS PRODUCTOS DISTINTOS QUE TIENE UN USUARIO
  constructor(public usuarioService: UsuarioService, public misComprasService:MisComprasService ){}

  contarProductos(){
    this.cantidad= 0;
    this.email = this.usuarioService.emailUsuarioLogeado;
    this.misComprasService.obtenerComprasUsuario(this.email).subscribe(
      (res : any ) =>{
        this.compras = res;

        //lo utilizamos para almacenar productos unicos
        const productosUnicos = new Set();

        this.compras.forEach( compra =>{
          compra.productos.forEach( prod => {

            productosUnicos.add(prod.nombreProd);

          });
        });

        this.cantidad = productosUnicos.size;

      }
    )

  }


}
