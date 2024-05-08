import { Component } from '@angular/core';
import { MisComprasService } from 'src/app/services/mis-compras.service';

@Component({
  selector: 'app-ejercicio72',
  templateUrl: './ejercicio72.component.html',
  styleUrls: ['./ejercicio72.component.css']
})
export class Ejercicio72Component {

  cliente: any;

  constructor(private misComprasService: MisComprasService) {}

  mostrarClienteConMasPedidos(): void {
    this.misComprasService.obtenerClienteConMasPedidos().subscribe(data => {
      this.cliente = data;
    }, error => {
      console.error('Error al obtener el cliente con más pedidos', error);
    });
  }


}
