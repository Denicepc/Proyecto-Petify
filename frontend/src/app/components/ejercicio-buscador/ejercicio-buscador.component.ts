import { Component } from '@angular/core';
import { MisCompras } from 'src/app/models/mis-compras';
import { MisComprasService } from 'src/app/services/mis-compras.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-ejercicio-buscador',
  templateUrl: './ejercicio-buscador.component.html',
  styleUrls: ['./ejercicio-buscador.component.css']
})
export class EjercicioBuscadorComponent {

  //buscar la cantidad de productos que hay de ese tipo entre todas las compras de un usuario
  public nombreProducto: string = "";
  public cantidadCompras: number = 0;
  public emailUsuario: string = "";
  public compras : MisCompras[] =[];

  constructor(public misComprasService: MisComprasService, public usuarioService: UsuarioService) {}

  buscarProducto(): void {
    this.emailUsuario = this.usuarioService.emailUsuarioLogeado;
    this.misComprasService.obtenerComprasUsuario(this.emailUsuario).subscribe(
      (res : any) => {
        this.compras = res;
        this.cantidadCompras = 0;
        this.compras.forEach(compra =>{
          compra.productos.forEach(producto =>{
            if(producto.nombreProd.toLowerCase() === this.nombreProducto.toLowerCase()){
              this.cantidadCompras += producto.cantidad;
            }
          });
        });
      });
  }


}
