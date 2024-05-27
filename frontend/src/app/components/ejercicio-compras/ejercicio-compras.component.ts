import { Component, OnInit } from '@angular/core';
import { MisComprasService } from 'src/app/services/mis-compras.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-ejercicio-compras',
  templateUrl: './ejercicio-compras.component.html',
  styleUrls: ['./ejercicio-compras.component.css']
})
export class EjercicioComprasComponent{

  public primerProducto : string = "";
  public ultimoProducto : string = "";

  constructor(public misComprasService: MisComprasService, public usuarioService: UsuarioService){}

  recogerProducto() {
    const emailUsuario = this.usuarioService.obtenerEmailUsuarioLogeado();
    this.misComprasService.obtenerComprasUsuario(emailUsuario).subscribe(
     ( compra : any) =>{

      const primeraCompra = compra[0];
      const ultimaCompra = compra[compra.length - 1];

      this.primerProducto = primeraCompra.productos[0].nombreProd;
      this.ultimoProducto = ultimaCompra.productos[ultimaCompra.productos.length - 1].nombreProd;

     }

    )}
  }


