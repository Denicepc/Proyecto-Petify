import { Component } from '@angular/core';
import { PiensoService } from 'src/app/services/pienso.service';
import { MisCompras } from 'src/app/models/mis-compras';
import { MisComprasService } from 'src/app/services/mis-compras.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-ejercicio13',
  templateUrl: './ejercicio13.component.html',
  styleUrls: ['./ejercicio13.component.css']
})
export class Ejercicio13Component {
  public categorias : string[] = [];
  public compras : MisCompras[] = [];
  public contadorCategorias : number[] = [];
  public tiposCompras: string[] = [];

  constructor(public piensoService: PiensoService, public misComprasService: MisComprasService, public usuarioService : UsuarioService){
     piensoService.conseguirCategorias().subscribe(
      (res: any) => {
        this.categorias = res;
      }
     );
     this.contadorCategorias.fill(0);
  }


  comprasPorCategoria(){
    this.conseguirCompras();

    setTimeout( () =>{
      this.conseguirTiposCompras();
    },500);


    setTimeout( () =>{
      this.contarCategorias();
    },1500);
  }

  conseguirCompras(){
    this.misComprasService.misComprasSeleccionadas$.subscribe(
      (res: MisCompras[]) =>{
        this.compras = res;
      }
    )
  }

  conseguirTiposCompras(){
    this.compras.forEach( compra =>
        compra.productos.forEach( producto =>{
          this.piensoService.conseguirPiensoConcreto(producto.nombreProd).subscribe(
            (res: any) =>{
              this.tiposCompras.push(res.tipoAnimal);
            }
          )
        }
        )
      );
  }

  contarCategorias(){
    for(let i= 0; i < this.categorias.length;i++){
      let cont = 0;
      for(let j=0; j < this.tiposCompras.length;j++)
      {
        if(this.categorias[i] == this.tiposCompras[j])
          cont++;
        console.log(this.categorias[i]+" "+this.tiposCompras[j]);
      }
      this.contadorCategorias[i]=cont;
    }
  }
}
