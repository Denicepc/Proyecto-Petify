import { Component } from '@angular/core';
import { MisComprasService } from 'src/app/services/mis-compras.service';
import { MisCompras } from 'src/app/models/mis-compras';

@Component({
  selector: 'app-epadre16',
  templateUrl: './epadre16.component.html',
  styleUrls: ['./epadre16.component.css']
})
export class Epadre16Component {

  public compras : MisCompras[] = [];
  public clientes: string[] = [];

  constructor(public misComprasService: MisComprasService){}

  buscarClientes(nombreProducto: string){
    this.misComprasService.obtenerCompras().subscribe(
      (res: any) =>{
        this.compras=res;
        this.compras.forEach(compra =>{

          compra.productos.forEach( product =>{
            if(product.nombreProd == nombreProducto){
              if(!this.clientes.includes(compra.emailUsuario)){
                this.clientes.push(compra.emailUsuario);
              }
            }
          });

        });
      }
    );
  }

}
