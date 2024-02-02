import { Component } from '@angular/core';
import { MisComprasService } from 'src/app/services/mis-compras.service';
import { MisCompras } from 'src/app/models/mis-compras';

@Component({
  selector: 'app-e19padre',
  templateUrl: './e19padre.component.html',
  styleUrls: ['./e19padre.component.css']
})
export class E19padreComponent {
  public unidadesCompradas: number = 0;
  public compras: MisCompras[] = [];

  constructor(public misComprasService: MisComprasService){}

  buscar(producto: string){
    this.unidadesCompradas = 0;
    this.misComprasService.obtenerCompras().subscribe(

      (res:any) =>{
        this.compras =  res;
        this.compras.forEach( compra =>
          {
            compra.productos.forEach( product =>{
              if(product.nombreProd == producto)
                this.unidadesCompradas += product.cantidad;
            })
          }
          )
      }
    )
  }

}
