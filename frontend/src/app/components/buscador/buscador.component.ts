import { Component } from '@angular/core';
import { MisCompras } from 'src/app/models/mis-compras';
import { Usuario } from 'src/app/models/usuario';
import { MisComprasService } from 'src/app/services/mis-compras.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent{

  public compras : MisCompras[] = [];
  public usuarios: Usuario[] = [];
  public nombreProducto: string = "";
  public vecesComprado: number = 0;

  constructor(private usuarioService: UsuarioService, private misComprasService: MisComprasService) {}

  buscarProducto() {
    this.vecesComprado = 0; // Resetear el contador cada vez que se busca
    this.usuarioService.getUsuarios().subscribe(
      (usu: any) => {

      this.usuarios = usu;

      this.usuarios.forEach(usuario => {
        this.misComprasService.obtenerComprasUsuario(usuario.email).subscribe(
          (com : any) => {
          this.compras = com;
          this.compras.forEach(compra => {
            compra.productos.forEach(producto => {
              if (producto.nombreProd.toLowerCase() === this.nombreProducto.toLowerCase()) {
                this.vecesComprado += 1;
              }
            });

          });

        });

      });

    });

  }
}
