import { Component, OnInit } from '@angular/core';
import { MisComprasService } from 'src/app/services/mis-compras.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { MisCompras } from 'src/app/models/mis-compras';

@Component({
  selector: 'app-ejercicio73',
  templateUrl: './ejercicio73.component.html',
  styleUrls: ['./ejercicio73.component.css']
})
export class Ejercicio73Component implements OnInit {

  public productoMasVendido: string | null = null;

  constructor(private misComprasService: MisComprasService,private usuarioService: UsuarioService) {}




  ngOnInit(): void {
    this.cargarComprasUsuario();
  }




  cargarComprasUsuario(): void{
    const emailUsuario = this.usuarioService.obtenerEmailUsuarioLogeado();

    this.misComprasService.obtenerComprasUsuario(emailUsuario).subscribe(
      (compras: MisCompras[]) => {
        this.calcularProductoMasVendido(compras);
      },
      error => {
        console.error('Error al obtener las compras del usuario', error);
      }
    );
  }






  calcularProductoMasVendido(compras: MisCompras[]): void {
    const productosVendidos: { [key: string]: number } = {};

    compras.forEach(compra => {
      compra.productos.forEach(producto => {
        if (productosVendidos[producto.nombreProd]) {
          productosVendidos[producto.nombreProd]++;
        } else {
          productosVendidos[producto.nombreProd] = 1;
        }
      });
    });

    let maxCount = 0;
    let maxProduct = null;

    for (const producto in productosVendidos) {
      if (productosVendidos[producto] > maxCount) {
        maxCount = productosVendidos[producto];
        maxProduct = producto;
      }
    }

    this.productoMasVendido = maxProduct;
  }





}
