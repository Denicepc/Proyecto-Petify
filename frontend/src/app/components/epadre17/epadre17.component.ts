import { Component } from '@angular/core';
import { MisCompras } from 'src/app/models/mis-compras';
import { MisComprasService } from 'src/app/services/mis-compras.service';

@Component({
  selector: 'app-epadre17',
  templateUrl: './epadre17.component.html',
  styleUrls: ['./epadre17.component.css']
})
export class Epadre17Component {
  public productos: string[] = [];
  public arrayCompras: MisCompras[] = [];
  public totalvendido: number = 0;

  constructor(public misComprasService: MisComprasService){
    this.misComprasService.obtenerCompras().subscribe(
      (res:any) =>{
        this.arrayCompras = res;
        this.arrayCompras.forEach(compra =>{
          compra.productos.forEach( producto =>{
            if(producto.cantidad > 1 && !this.productos.includes(producto.nombreProd))
              this.productos.push(producto.nombreProd);
          })
        })
      }
    )
  }


  recibirTotal(total: number){
    this.totalvendido = total;
  }
}
