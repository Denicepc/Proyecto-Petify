import { Component, OnInit } from '@angular/core';
import { MisComprasService } from 'src/app/services/mis-compras.service';
import { MisCompras } from 'src/app/models/mis-compras';

@Component({
  selector: 'app-ejercicio38',
  templateUrl: './ejercicio38.component.html',
  styleUrls: ['./ejercicio38.component.css']
})
export class Ejercicio38Component implements OnInit{

  clienteConMasPedidos: string = '';
  totalProductos: number = 0;

  //TODO EL EJERCICIO 38
  constructor(public misComprasService: MisComprasService){}

  ngOnInit(): void {
    this.misComprasService.obtenerClienteConMasPedidos().subscribe((data: any) => {
      this.clienteConMasPedidos = data.emailUsuario;
      this.totalProductos = data.totalProductos;
    }, error => {
      console.error('Error al obtener el cliente con más pedidos', error);
    });
  }


}
