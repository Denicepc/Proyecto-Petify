import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { MisComprasService } from 'src/app/services/mis-compras.service';

@Component({
  selector: 'app-ejercicio19',
  templateUrl: './ejercicio19.component.html',
  styleUrls: ['./ejercicio19.component.css']
})
export class Ejercicio19Component {

  nombreProducto: string = '';
  totalProductos: number = 0;

  constructor(public usuarioService: UsuarioService, public misComprasService: MisComprasService){}


  cos


}
