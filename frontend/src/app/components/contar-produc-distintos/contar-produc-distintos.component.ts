import { Component, OnInit } from '@angular/core';
import { response } from 'express';
import { MisComprasService } from 'src/app/services/mis-compras.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-contar-produc-distintos',
  templateUrl: './contar-produc-distintos.component.html',
  styleUrls: ['./contar-produc-distintos.component.css']
})
export class ContarProducDistintosComponent implements OnInit{

  public totalProductosDistintos: number = 0;

  constructor(private misComprasService: MisComprasService, private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.cargarProductosDistintos();
  }

  cargarProductosDistintos(){
    const email = this.usuarioService.obtenerEmailUsuarioLogeado();

    this.misComprasService.obtenerComprasUsuario(email).subscribe({
      next: (response) => {
        this.totalProductosDistintos = response.totalProductosDistintos;
      }
    })

  }

}
