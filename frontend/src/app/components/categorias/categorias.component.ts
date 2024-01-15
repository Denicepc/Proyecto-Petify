import { Component } from '@angular/core';
import { Pienso } from 'src/app/models/pienso';
import { PiensoService } from 'src/app/services/pienso.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent {

  activadoPrecio: boolean=false;
  activadoPeso: boolean=false;

  filtros = {
    precio: '',
    peso: '',
    tipoAnimal: ''
  };

  //CATEGORIAS FILTROS PIENSOS
  constructor(private piensoService: PiensoService){}


  //BOTON VER TODOS LOS PRODUCTOS
  mostrarTodosLosProductos() {
    this.resetearFiltros(); //borras filtros
    this.aplicarFiltros(); //y muestas de nuevo
  }


  aplicarFiltros() { //muestras todos los productos
    this.piensoService.getPiensosConFiltros(this.filtros).subscribe(
      piensos => this.piensoService.piensos = piensos,
      error => console.error('Error al obtener piensos filtrados', error)
    );
  }

  resetearFiltros() { //eliminas todos los productos a vacio
    this.filtros = { precio: '', peso: '', tipoAnimal: ''};
  }


  //ESTO ES PARA EL PRECIO
  cambiarFiltroPrecio(rangoPrecio: string) {

    if(this.activadoPrecio == false){
      this.filtros.precio = rangoPrecio;
      this.aplicarFiltros();
      this.activadoPrecio=true;
    }
    else{
      this.activadoPrecio=false;
      this.resetearFiltros();
      this.aplicarFiltros();
    }

  }

  //ESTO ES PARA EL PESO
  cambiarFiltroPeso(rangoPeso: string) {

    if(this.activadoPeso == false){
      this.filtros.peso = rangoPeso;
      this.aplicarFiltros();
      this.activadoPeso=true;
    }
    else{
      this.activadoPeso=false;
      this.resetearFiltros();
      this.aplicarFiltros();
    }


  }



  //ESTO ES POR EL TIPO DE ANIMAL
  filtrarPorTipo(tipoAnimal: string) {
    this.piensoService.getPiensosPorTipo(tipoAnimal).subscribe(
      piensos => this.piensoService.piensos = piensos,
      error => console.error('Error al obtener piensos filtrados', error)
    );
  }



  }





