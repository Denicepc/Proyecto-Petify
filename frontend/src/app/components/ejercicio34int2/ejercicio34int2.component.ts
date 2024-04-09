import { Component } from '@angular/core';
import { MisCompras } from 'src/app/models/mis-compras';
import { MisComprasService } from 'src/app/services/mis-compras.service';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-ejercicio34int2',
  templateUrl: './ejercicio34int2.component.html',
  styleUrls: ['./ejercicio34int2.component.css']
})
export class Ejercicio34int2Component {

  //34) Nombre del cliente que mas productos ha comprado de entre todas sus compras y el total en € de entre todas sus compras.

  public nombreCliente: string = ""; //nombre del cliente que mas productos ha comprado
  public totalProductos: number = 0; //el numero de productos que ha comprado
  public totalEuros: number = 0;

  constructor(){

  }

}
