import { Component } from '@angular/core';
import { PiensoService } from 'src/app/services/pienso.service';
import { MisCompras } from 'src/app/models/mis-compras';
import { MisComprasService } from 'src/app/services/mis-compras.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-ejercicio13',
  templateUrl: './ejercicio13.component.html',
  styleUrls: ['./ejercicio13.component.css']
})
export class Ejercicio13Component {
  public categorias : string[] = [];
  public compras : MisCompras[] = [];
  public contadorCategorias : number[] = [];

  constructor(public piensoService: PiensoService, public misComprasService: MisComprasService, public usuarioService : UsuarioService){
     piensoService.conseguirCategorias().subscribe(
      (res: any) => {
        this.categorias = res;
        console.log("categorias: "+res);
      }
     );
     this.contadorCategorias.fill(0);
  }

  comprasPorCategoria(){
    let email = this.usuarioService.emailUsuarioLogeado;

    this.misComprasService.obtenerComprasUsuario(email).subscribe(
      (res: any) =>{
        this.compras = res;
      });
  
    let cont = 0;
    
    while(cont < this.categorias.length){
      this.compras.forEach( elem =>
        elem.productos.forEach( elem2 =>
            this.piensoService.conseguirPiensoConcreto(elem2.nombreProd).subscribe(
              (res: any) =>{
                let tipo = res;
                if(tipo == this.categorias[cont] )
                  this.contadorCategorias[cont]++;
              }
            )
          )
      )
      cont++;
    }
      
  }
}