import { Component } from '@angular/core';
import { MisComprasService } from 'src/app/services/mis-compras.service';
import { MisCompras } from 'src/app/models/mis-compras';

@Component({
  selector: 'app-ejercicio15',
  templateUrl: './ejercicio15.component.html',
  styleUrls: ['./ejercicio15.component.css']
})
export class Ejercicio15Component {

  public productoBuscado: string = '';
  public numeroDeCompras: number = 0;

  constructor(private misComprasService: MisComprasService) {}

  buscarProducto(): void {
    if (this.productoBuscado.trim() === '') {
      this.numeroDeCompras = 0;
      return;
    }

    this.misComprasService.obtenerCompras().subscribe(
      (compras: MisCompras[]) => {
        this.numeroDeCompras = compras.filter(compra =>
          compra.productos.some(producto => producto.nombreProd.toLowerCase() === this.productoBuscado.toLowerCase())
        ).length;
      },
      error => {
        console.error('Error al obtener las compras', error);
        this.numeroDeCompras = 0;
      }
    );
  }

}
