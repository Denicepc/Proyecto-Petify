import { Component } from '@angular/core';
import { Pienso } from 'src/app/models/pienso';
import { PiensoService } from 'src/app/services/pienso.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent {

  filtros = {
    precio: '',
    peso: '',
    edad: '',
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
    this.filtros = { precio: '', peso: '', edad: '' , tipoAnimal: ''};
  }


  //ESTO ES PARA EL PRECIO
  cambiarFiltroPrecio(rangoPrecio: string) {
    this.filtros.precio = rangoPrecio;
    this.aplicarFiltros();
  }

  //ESTO ES PARA EL PESO
  cambiarFiltroPeso(rangoPeso: string) {
    this.filtros.peso = rangoPeso;
    this.aplicarFiltros();
  }

  //ESTO ES PARA LA EDAD
  cambiarFiltroEdad(edad: string) {
    this.filtros.edad = edad;
    this.aplicarFiltros();
  }

  //ESTO ES POR EL TIPO DE ANIMAL
  filtrarPorTipo(tipoAnimal: string) {
    this.piensoService.getPiensosPorTipo(tipoAnimal).subscribe(
      piensos => this.piensoService.piensos = piensos,
      error => console.error('Error al obtener piensos filtrados', error)
    );
  }



  }





