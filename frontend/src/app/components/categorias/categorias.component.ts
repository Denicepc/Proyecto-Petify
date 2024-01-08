import { Component } from '@angular/core';
import { Pienso } from 'src/app/models/pienso';
import { PiensoService } from 'src/app/services/pienso.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent {



  //CATEGORIAS FILTROS PIENSOS
  constructor(private piensoService: PiensoService){}


  //Es un metodo que le pasas el tipo de animal como parametro y te busca lo que le pidas
  filtrarPorTipo(tipoAnimal: string) {
    this.piensoService.getPiensosPorTipo(tipoAnimal).subscribe( //te busca los piensos del animal que introduzcas por paramtero
      piensos => {
        this.piensoService.piensos = piensos; //muestra los piensos
      }
    );
  }


  //POR PRECIO
  filtrarPorPrecio(rangoPrecio: string) {
    this.piensoService.getPiensosPorPrecio(rangoPrecio).subscribe(
      piensos => {
        this.piensoService.piensos = piensos;
      }
    );
  }


  //POR PESOS
  filtrarPorPeso(rangoPeso: string) {
    this.piensoService.getPiensosPorPeso(rangoPeso).subscribe(
      piensos => {
        this.piensoService.piensos = piensos;
      }
    );
  }




}
