import { Component } from '@angular/core';
import { MisComprasService } from 'src/app/services/mis-compras.service';
import { MisCompras } from 'src/app/models/mis-compras';

@Component({
  selector: 'app-ejercicio79',
  templateUrl: './ejercicio79.component.html',
  styleUrls: ['./ejercicio79.component.css']
})
export class Ejercicio79Component {

  public productoMasCaro: string | null = null;
  public precioProductoMasCaro: number = 0;

  constructor(private misComprasService: MisComprasService) {}

  obtenerProductoMasCaro(): void {
    this.misComprasService.obtenerCompras().subscribe(
      (compras: MisCompras[]) => {

        let productoMasCaroEncontrado = null;
        let precioMasAlto = 0;

        compras.forEach(compra => {
          compra.productos.forEach(producto => {
            if (producto.precio > precioMasAlto) {
              precioMasAlto = producto.precio;
              productoMasCaroEncontrado = producto.nombreProd;
            }
          });
        });

        this.productoMasCaro = productoMasCaroEncontrado;
        this.precioProductoMasCaro = precioMasAlto;

      },
      error => {
        console.error('Error al obtener las compras', error);
      }
    );
  }

}
