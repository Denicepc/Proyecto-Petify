import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { MisComprasService } from 'src/app/services/mis-compras.service';

@Component({
  selector: 'app-ejercicio46',
  templateUrl: './ejercicio46.component.html',
  styleUrls: ['./ejercicio46.component.css']
})

export class Ejercicio46Component {

  public productoCaro: string = '';

  constructor(private misComprasService: MisComprasService, private usuarioService: UsuarioService) {}

  mostrarProductoMasCaro(): void {

  const emailUsuario = this.usuarioService.obtenerEmailUsuarioLogeado();

  this.misComprasService.obtenerComprasUsuario(emailUsuario).subscribe(
    compras => {
      let maxPrecio = 0;
      let nombreProductoCaro = '';
      compras.forEach(compra => {
        compra.productos.forEach(producto => {
          if (producto.precio > maxPrecio) {
            maxPrecio = producto.precio;
            nombreProductoCaro = producto.nombreProd;
          }
        });
      });

      this.productoCaro = nombreProductoCaro;

    }
  );

}
}
