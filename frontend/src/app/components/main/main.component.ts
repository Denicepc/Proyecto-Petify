import { Component } from '@angular/core';
import { PiensoService } from 'src/app/services/pienso.service';
import { MisComprasService } from 'src/app/services/mis-compras.service';
import { MisCompras } from 'src/app/models/mis-compras';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  public primerProd: string = "";
  public categoria: string = "";
  public piensos: string[] = [];
  public compras: MisCompras[] = [];
  public clientes : string[]=[];
  public nombres: string[] = [];

  constructor(public piensoService: PiensoService, public misComprasService: MisComprasService, public usuarioService:UsuarioService){
/*
    this.misComprasService.primerProd().subscribe(
      (res:any) =>{
        this.primerProd = res;
      }
    )

    setTimeout( () =>{
      this.piensoService.conseguirCategoria(this.primerProd).subscribe(
        (res:any)=>{
          this.categoria = res;
        }
      )
    },100)


    setTimeout( () =>{
      this.piensoService.conseguirPiensosCategoria(this.categoria).subscribe(
        (res:any) =>{
          this.piensos =res;

          this.misComprasService.obtenerCompras().subscribe(
            (res: any)=>{
              this.compras = res;
              this.compras.forEach( compra =>{
                compra.productos.forEach( prod =>{
                  this.piensos.forEach( pienso =>{
                    if(!this.clientes.includes(compra.emailUsuario))
                        this.clientes.push(compra.emailUsuario);
                  })
                })
              })
            })


        })
    },200);

    setTimeout( () =>{
      this.clientes.forEach( cli =>{
        this.usuarioService.obtenerNom(cli).subscribe(
          (res: any)=>{
            if(!this.nombres.includes(res))
              this.nombres.push(res);
          })
      })
    },300);*/

  }
}
