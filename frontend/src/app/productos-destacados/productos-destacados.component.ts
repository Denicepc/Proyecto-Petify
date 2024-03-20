import { Component, OnInit } from '@angular/core';
import { MisComprasService } from '../services/mis-compras.service';
@Component({
  selector: 'app-productos-destacados',
  templateUrl: './productos-destacados.component.html',
  styleUrls: ['./productos-destacados.component.css']
})
export class ProductosDestacadosComponent implements OnInit {

  public primerProducto: any;
  public ultimoProducto: any;

  constructor(private misComprasService: MisComprasService){}

  ngOnInit(): void { //inicializas el nuevo componente para que funcione
     
     this.misComprasService.misComprasSeleccionadas$.subscribe(compras => {

      if(compras.length > 0){ 

        //primero saco pedidos
        const primerPedido = compras[0];  
        const ultimoPedido = compras[compras.length-1]; 

        //AHORA DE EL PRIMER PEDIDO TIENES QUE SACAR EL PRIMER PRODUCTO Y DEL ULTIMO PEDIDO SACAR SU ULTIMO PRODUCTO
        this.primerProducto = primerPedido.productos[0]; 
        this.ultimoProducto = ultimoPedido.productos[ultimoPedido.productos.length -1]; 
      }

     });
  }
}