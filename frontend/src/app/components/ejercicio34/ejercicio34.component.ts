import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { MisComprasService } from 'src/app/services/mis-compras.service';
import { Usuario } from 'src/app/models/usuario';
import { MisCompras } from 'src/app/models/mis-compras';

@Component({
  selector: 'app-ejercicio34',
  templateUrl: './ejercicio34.component.html',
  styleUrls: ['./ejercicio34.component.css']
})
export class Ejercicio34Component {


  public max: number=0;
  public nom: string="";
  public total: number=0;

  constructor(){



  }

}
