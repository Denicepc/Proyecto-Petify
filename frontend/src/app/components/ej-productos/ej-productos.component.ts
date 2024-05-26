import { Component } from '@angular/core';
import { MisComprasService } from 'src/app/services/mis-compras.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-ej-productos',
  templateUrl: './ej-productos.component.html',
  styleUrls: ['./ej-productos.component.css']
})
export class EjProductosComponent{

  primerProducto: string = "";
  ultimoProducto: string = "";

  constructor(private misComprasService: MisComprasService, private usuarioService: UsuarioService) { }

    recogerProductos(){
      const emailUsuario = this.usuarioService.obtenerEmailUsuarioLogeado();
      this.misComprasService.obtenerComprasUsuario(emailUsuario).subscribe(
        (compra : any) => {

          if (compra && compra.length > 0) { //si tiene mas de una compra

            const primeraCompra = compra[0]; //pillas la primera compra
            const ultimaCompra = compra[compra.length - 1]; //pillas la ultima compra


            this.primerProducto = primeraCompra.productos[0].nombreProd; //de la primera compra el primer producto
            this.ultimoProducto = ultimaCompra.productos[ultimaCompra.productos.length - 1].nombreProd; //de la ultima compra el ultimo producto

          }

        });
    }

}




