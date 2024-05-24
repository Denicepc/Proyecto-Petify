import { Component } from '@angular/core';
import { MisComprasService } from 'src/app/services/mis-compras.service';
import { MisCompras } from 'src/app/models/mis-compras';

@Component({
  selector: 'app-ej42',
  templateUrl: './ej42.component.html',
  styleUrls: ['./ej42.component.css']
})
export class Ej42Component{

  public compras: MisCompras[] = [];
  public maxPrecio: number = 0;
  public nombreProd: string = "";

  constructor(private misComprasService: MisComprasService) { }

  cargarDatos(): void {
    this.misComprasService.obtenerCompras().subscribe((res: any) => {
      this.compras = res;
      this.compras.forEach(compra => {
        compra.productos.forEach(producto => {
          if (producto.precio > this.maxPrecio) {
            this.maxPrecio = producto.precio;
            this.nombreProd = producto.nombreProd;
          }
        });
      });
    });
  }
}
