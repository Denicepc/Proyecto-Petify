import { Component,  OnInit } from '@angular/core';
import { MisCompras } from 'src/app/models/mis-compras';
import { UsuarioService } from 'src/app/services/usuario.service';
import { MisComprasService } from 'src/app/services/mis-compras.service'; 
//ESTE ES EL COMPONENTE DE MIS COMPRAS, CUANDO QUIERES VER TODAS LAS COMPRAS DEL USUARIO

@Component({
  selector: 'app-mis-compras',
  templateUrl: './mis-compras.component.html',
  styleUrls: ['./mis-compras.component.css']
})
export class MisComprasComponent {
<<<<<<< HEAD
  public totalCompras: number = 0; //varible donde almacenaremos el total
  public misCompras: MisCompras[] = [];
  public emailUsuario: string = "null";
=======
  public totalCompras: number = 0; //variable donde almacenaremos el total
  public misCompras: MisCompras[] = []; //almacenas todos los productos
  public emailUsuario: string = "null"; //donde almacenas el usuario vacio
>>>>>>> ff90a6940405472fea974b1ce7d244dc78a633f7

  constructor(
    public misComprasService: MisComprasService, //almacenas todas las compras
    public usuarioService: UsuarioService){}

<<<<<<< HEAD

    //EJERCICIO 27 -->  La funcionalidad "Mis compras", solamente muestra la primera compra del usuario autenticado. (Sin borrar el resto)
  ngOnInit(): void {
    this.emailUsuario = this.usuarioService.obtenerEmailUsuarioLogeado(); //obtener usuario logeado

    this.misComprasService.misComprasSeleccionadas$.subscribe(
      compras => {
=======
  ngOnInit(): void { //EJRCICIO 27
    
    this.emailUsuario = this.usuarioService.obtenerEmailUsuarioLogeado(); //obtienes el email del usuario logeado

    this.misComprasService.misComprasSeleccionadas$.subscribe(
      compras => {
        this.misCompras = compras;
        //calculas el total de la compra
        this.totalCompras = 0;
>>>>>>> ff90a6940405472fea974b1ce7d244dc78a633f7

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
    this.misCompras.forEach(compra => { //recorres todas las compras 
      this.totalCompras += Number(compra.total); //sumas el total de todas las compras
    });
  }

}