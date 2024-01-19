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

  //LÓGICA PARA QUE NO SE MARQUEN DOS CHECKBOX A LA VEZ DE LA MISMA CATEGORÍA
  precioSeleccionado: string | null = null;
  pesoSeleccionado: string | null = null; 

  filtros = {
    precio: '',
    peso: '',
    tipoAnimal: ''
  };

  productosAnteriores: Pienso[] = [];

  //CATEGORIAS FILTROS PIENSOS
  constructor(private piensoService: PiensoService){}


  //BOTON VER TODOS LOS PRODUCTOS
  mostrarTodosLosProductos() {
    this.resetearFiltros(); //borras filtros
    this.actualizarProductos(); //y muestas de nuevo
  }


  resetearFiltros() { //eliminas todos los productos a vacio
    this.filtros = { precio: '', peso: '', tipoAnimal: ''};
  }


  aplicarFiltros() {
    if (this.filtros.precio && this.filtros.peso) {
      // Ambos filtros están presentes, aplicar ambos
      this.piensoService.getPiensosConFiltros(this.filtros).subscribe(
        piensos => this.piensoService.piensos = piensos,
        error => console.error('Error al obtener piensos filtrados', error)
      );
    } else if (this.filtros.precio || this.filtros.peso) {
      // Solo uno de los filtros está presente, aplicar el filtro presente
      this.piensoService.getPiensosConFiltros(this.filtros).subscribe(
        piensos => this.piensoService.piensos = piensos,
        error => console.error('Error al obtener piensos filtrados', error)
      );
    } else {
      // Ningún filtro presente, mostrar todos los productos
      this.mostrarTodosLosProductos();
    }
  }


  cambiarFiltroPrecio(rangoPrecio: string) {
    this.activadoPrecio = !this.activadoPrecio;
    if (this.activadoPrecio) {
      this.filtros.precio = rangoPrecio;
    } else {
      this.filtros.precio = '';
    }
    this.actualizarProductos();

    ////LÓGICA PARA QUE NO SE MARQUEN DOS CHECKBOX A LA VEZ DE LA MISMA CATEGORÍA
    if (this.precioSeleccionado === rangoPrecio) {
      this.precioSeleccionado = null; // Desmarcar si ya está seleccionado
    } else {
      this.precioSeleccionado = rangoPrecio; // Marcar el nuevo checkbox
    }
  }

  cambiarFiltroPeso(rangoPeso: string) {
    this.activadoPeso = !this.activadoPeso;
    if (this.activadoPeso) {
      this.filtros.peso = rangoPeso;
    } else {
      this.filtros.peso = '';
    }
    this.actualizarProductos();

    ////LÓGICA PARA QUE NO SE MARQUEN DOS CHECKBOX A LA VEZ DE LA MISMA CATEGORÍA
    if (this.pesoSeleccionado === rangoPeso) {
      this.pesoSeleccionado = null; // Desmarcar si ya está seleccionado
    } else {
      this.pesoSeleccionado = rangoPeso; // Marcar el nuevo checkbox
    }
  }


  actualizarProductos() {
    if (this.activadoPrecio || this.activadoPeso) {
      // Si al menos una casilla está marcada, aplicar los filtros y guardar los productos actuales
      this.productosAnteriores = this.piensoService.piensos;
      this.piensoService.getPiensosConFiltros(this.filtros).subscribe(
        piensos => this.piensoService.piensos = piensos,
        error => console.error('Error al obtener piensos filtrados', error)
      );
    } else {
      // Si ambas casillas están desmarcadas, mostrar todos los productos
      this.piensoService.getPiensos().subscribe(
        piensos => this.piensoService.piensos = piensos,
        error => console.error('Error al obtener todos los piensos', error)
      );
    }
  }


  //ESTO ES POR EL TIPO DE ANIMAL --> METODO PARA FILTRAL EL PIENSO DE ANIMAL QUE LE PASAS POR PARAMETRO
  filtrarPorTipo(tipoAnimal: string) {
    this.piensoService.getPiensosPorTipo(tipoAnimal).subscribe(
      piensos => this.piensoService.piensos = piensos,
      error => console.error('Error al obtener piensos filtrados', error)
    );
  }



  }





