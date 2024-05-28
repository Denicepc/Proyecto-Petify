import { Component } from '@angular/core';
import { MisCompras } from 'src/app/models/mis-compras';
import { Usuario } from 'src/app/models/usuario';
import { MisComprasService } from 'src/app/services/mis-compras.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-buscador-producto',
  templateUrl: './buscador-producto.component.html',
  styleUrls: ['./buscador-producto.component.css']
})
export class BuscadorProductoComponent {

  public cantidad : number = 0;
  public usuario: Usuario[] = [];
  public compras : MisCompras[] =[];

  constructor(public misComprasService: MisComprasService, public usuarioService: UsuarioService){}

  recogerProducto(){
    this.usuarioService.getUsuarios().subscribe(
      (res : any) =>{

        this.usuario = res;

        for(let usu of this.usuario){
          this.misComprasService.obtenerComprasUsuario(usu.email).subscribe(
            (res : any) =>{
              this.compras = res;

              this.compras.forEach( compra =>{
                compra.productos.forEach( prod =>{



                })
              })

            }
          )
        }

      }
    )
  }


}
