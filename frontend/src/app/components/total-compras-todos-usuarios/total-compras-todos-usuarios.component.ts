import { Component, OnInit } from '@angular/core';
import { MisComprasService } from 'src/app/services/mis-compras.service'  ;

@Component({
  selector: 'app-total-compras-todos-usuarios',
  templateUrl: './total-compras-todos-usuarios.component.html',
  styleUrls: ['./total-compras-todos-usuarios.component.css']
})
export class TotalComprasTodosUsuariosComponent implements OnInit {

  public totalCompras: number = 0;

  constructor(private misComprasService: MisComprasService) {}

  ngOnInit(): void {
    this.cargarTotalCompras();
  }

  cargarTotalCompras() {
    this.misComprasService.contarTodasLasCompras().subscribe({
      next: (data) => {
        this.totalCompras = data.totalCompras;
      }
    });
  }

}
