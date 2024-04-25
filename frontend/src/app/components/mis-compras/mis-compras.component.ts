import { Component } from '@angular/core';
import { MisCompras } from 'src/app/models/mis-compras';
import { UsuarioService } from 'src/app/services/usuario.service';
import { MisComprasService } from 'src/app/services/mis-compras.service';

@Component({
  selector: 'app-mis-compras',
  templateUrl: './mis-compras.component.html',
  styleUrls: ['./mis-compras.component.css']
})
export class MisComprasComponent {

  public totalCompras: number = 0; //varible donde almacenaremos el total
  public misCompras: MisCompras[] = [];
  public emailUsuario: string = "null";

  //------------------------------------



  //ATRIBUTOS ejercicio 31---
  public productoMasCaro: string="";
  public precioMasCaro: number = 0;
  //---fin del ejercicio 31---




  constructor(public misComprasService: MisComprasService,
    public usuarioService: UsuarioService){}

  ngOnInit(): void {  //EJERCICIO 31

    this.emailUsuario = this.usuarioService.obtenerEmailUsuarioLogeado(); //obtienes el usuario logado

    this.misComprasService.misComprasSeleccionadas$.subscribe( //recorres las compras del usuario logado
      compras => {

        this.misCompras = compras; //metemos en una variable MisCompras todas las compras que tenemos de ese usuario


        for (let compra of compras) {
          this.totalCompras += Number(compra.total); //sumamos el total de cada compra al total acumulado.
        }

        //ejercicio13
        //encuentra el producto más caro
        compras.forEach(compra => { //recorremos cada compra
        compra.productos.forEach(producto => { //y de cada compra recorremos los prodcutos comprados
            if (producto.precio > this.precioMasCaro) { //si el precio del producto es mayor que precioMasCaro....
              this.precioMasCaro = producto.precio;
              this.productoMasCaro = producto.nombreProd;
            }
          });
        });

        console.log("MIS COMPRAS: ", compras);

      },
      error => console.error('Error al obtener compras', error)
    );
  }



  //metodo calcularTotal
  calcularTotalCompras(): void {
    this.totalCompras = 0; //contador
    this.misCompras.forEach(compra => {
      this.totalCompras += Number(compra.total);
    });
  }
}
