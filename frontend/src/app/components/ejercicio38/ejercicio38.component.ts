import { Component, OnInit } from '@angular/core';
import { MisComprasService } from 'src/app/services/mis-compras.service';

@Component({
  selector: 'app-ejercicio38',
  templateUrl: './ejercicio38.component.html',
  styleUrls: ['./ejercicio38.component.css']
})
export class Ejercicio38Component implements OnInit {

  clienteConMasPedidos: string = '';
  totalProductos: number = 0;
  maxPedidos: number = 0;

  constructor(private misComprasService: MisComprasService) { }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(): void {
    this.misComprasService.obtenerCompras().subscribe(compras => {
      const clienteMap = new Map<string, { totalPedidos: number, totalProductos: number }>();

      compras.forEach(compra => {
        if (!clienteMap.has(compra.emailUsuario)) {
          clienteMap.set(compra.emailUsuario, { totalPedidos: 0, totalProductos: 0 });
        }
        const datosCliente = clienteMap.get(compra.emailUsuario)!;

        datosCliente.totalPedidos++;
        compra.productos.forEach(producto => {
          datosCliente.totalProductos += producto.cantidad;
        });
      });

      //determinar el cliente con más pedidos
      let maxPedidos = 0;
      let clienteMaxPedidos = '';
      let totalProductosMax = 0;

      clienteMap.forEach((value, key) => {
        if (value.totalPedidos > maxPedidos) {
          maxPedidos = value.totalPedidos;
          clienteMaxPedidos = key;
          totalProductosMax = value.totalProductos;
        }
      });

      // Actualizar las propiedades del componente
      this.clienteConMasPedidos = clienteMaxPedidos;
      this.totalProductos = totalProductosMax;
      this.maxPedidos = maxPedidos;
    });
  }

}
