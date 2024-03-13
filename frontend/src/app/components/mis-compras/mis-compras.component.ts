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
  public totalCompras: number = 0; //variable donde almacenaremos el total
  public misCompras: MisCompras[] = []; //almacenas todos los productos
  public emailUsuario: string = "null"; //donde almacenas el usuario vacio

  constructor(
    public misComprasService: MisComprasService, //almacenas todas las compras
    public usuarioService: UsuarioService){}

  ngOnInit(): void { //EJRCICIO 27
    
    this.emailUsuario = this.usuarioService.obtenerEmailUsuarioLogeado(); //obtienes el email del usuario logeado

    this.misComprasService.misComprasSeleccionadas$.subscribe(
      compras => {
        this.misCompras = compras;
        //calculas el total de la compra
        this.totalCompras = 0;

        for (let compra of compras) {
          this.totalCompras += Number(compra.total);
        }
        console.log("MIS COMPRAS: ", compras);
      },
      error => console.error('Error al obtener compras', error)
    );
  }

  //metodo calcularTotal
  calcularTotalCompras(): void {
    this.totalCompras = 0; //contador
    this.misCompras.forEach(compra => { //recorres todas las compras 
      this.totalCompras += Number(compra.total); //sumas el total de todas las compras
    });
  }

}