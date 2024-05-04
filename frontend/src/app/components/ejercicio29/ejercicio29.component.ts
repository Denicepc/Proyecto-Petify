import { Component, OnInit } from '@angular/core';
import { MisComprasService } from 'src/app/services/mis-compras.service';

@Component({
  selector: 'app-ejercicio29',
  templateUrl: './ejercicio29.component.html',
  styleUrls: ['./ejercicio29.component.css']
})
export class Ejercicio29Component implements OnInit {

  clientes: string[] = [];  //solo los emails de los clientes

  constructor(private misComprasService: MisComprasService) {}

  ngOnInit(): void {
    this.cargarClientes('Perro');  //"Perro" como categoría por defecto
  }

  cargarClientes(categoria: string): void {
    this.misComprasService.obtenerClientesPorCategoria(categoria).subscribe(
      (clientes) => {
        this.clientes = clientes;
        console.log('Clientes que han comprado en la categoría', categoria, ':', this.clientes);
      },
      (error) => {
        console.error('Error al obtener los clientes de la categoría', categoria, ':', error);
      }
    );
  }
}
