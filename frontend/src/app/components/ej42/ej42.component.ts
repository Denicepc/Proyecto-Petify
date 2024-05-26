import { Component } from '@angular/core';
import { MisComprasService } from 'src/app/services/mis-compras.service';
import { MisCompras } from 'src/app/models/mis-compras';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-ej42',
  templateUrl: './ej42.component.html',
  styleUrls: ['./ej42.component.css']
})
export class Ej42Component{

  //variables que solo necesitas
  public maxPrecio : number = 0;
  public nombreProducto : string = "";

  constructor(public usuarioService: UsuarioService, public misComprasService: MisComprasService){

    let usuarios : Usuario[] = [];
    let compras : MisCompras[] = [];
    let precioMaximo : number = 0;
    let nomProd : string = "";

    this.usuarioService.getUsuarios().subscribe(
      (res : any) =>{

        usuarios = res;
        for(let usu of usuarios){

          this.misComprasService.obtenerComprasUsuario(usu.email).subscribe(
            (res : any) =>{
              compras = res;

              compras.forEach( compra =>{
                compra.productos.forEach(producto =>{
                  if(producto.precio > precioMaximo){
                    precioMaximo = producto.precio;
                    nomProd = producto.nombreProd;
                  }
                })
              })
            }
          )

          setTimeout(() =>{
            this.maxPrecio = precioMaximo;
            this.nombreProducto = nomProd;
          }, 200)

        }

      }
    )


  }

}
