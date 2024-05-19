import { Component, OnInit } from '@angular/core';
import { MisComprasService } from 'src/app/services/mis-compras.service';

@Component({
  selector: 'app-ejercicio29',
  templateUrl: './ejercicio29.component.html',
  styleUrls: ['./ejercicio29.component.css']
})
export class Ejercicio29Component implements OnInit{

  clientes: string[] = [];

  constructor(private misComprasService: MisComprasService) {}

  ngOnInit(): void {
    this.cargarClientes('Perro');
  }

  cargarClientes(categoria: string): void {
    this.misComprasService.getClientesPorCategoria(categoria).subscribe({
      next: (data) =>
        this.clientes = data
    });
  }

}
