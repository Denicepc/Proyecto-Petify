import { Component,  OnInit } from '@angular/core';
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

  constructor(
    public misComprasService: MisComprasService,
    public usuarioService: UsuarioService){}


    //EJERCICIO 27 -->  La funcionalidad "Mis compras", solamente muestra la primera compra del usuario autenticado. (Sin borrar el resto)
  ngOnInit(): void {
    this.emailUsuario = this.usuarioService.obtenerEmailUsuarioLogeado(); //obtener usuario logeado

    this.misComprasService.misComprasSeleccionadas$.subscribe(
      compras => {

        this.misCompras = compras.slice(0, 1); //esto --> de todo el array de compras te muestra la primera de todas
        this.calcularTotalCompras(); //esto -->
        console.log("MIS COMPRAS: ", this.misCompras); //esto

      },
      error => console.error('Error al obtener compras', error)
    );
  }

  //metodo calcularTotal --> suma el total de la compra
  calcularTotalCompras(): void { //metodo que recalcula el total de las compras
    this.totalCompras = 0; //contador
    this.misCompras.forEach(compra => {
      this.totalCompras += Number(compra.total);
    });
  }



}
