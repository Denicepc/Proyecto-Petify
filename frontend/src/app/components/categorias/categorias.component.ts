import { Component } from '@angular/core';
import { Pienso } from 'src/app/models/pienso';
import { PiensoService } from 'src/app/services/pienso.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent {

  precioSeleccionado:string|null = null
  pesoSeleccionado:string|null = null

  activadoPrecio: boolean=false;
  activadoPeso: boolean=false;

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
    this.filtros.precio = this.precioSeleccionado === rangoPrecio ? '' : rangoPrecio; //verifica si precioSeleccionado (una propiedad de la clase) es igual al rangoPrecio recibido. Si son iguales, significa que el filtro actual ya está aplicado, por lo tanto, lo desactiva asignándole un string vacío (''). Si son diferentes, aplica el nuevo filtro de precio asignando rangoPrecio a this.filtros.precio.
    this.precioSeleccionado = this.filtros.precio; //actualiza la propiedad precioSeleccionado de la clase con el valor actual de this.filtros.precio, que puede ser el nuevo rango de precio o un string vacío si se desactivó el filtro
    this.aplicarFiltros(); //actualiza la vista o los datos mostrados según los filtros aplicados.
  }


  cambiarFiltroPeso(rangoPeso: string) {
    this.filtros.peso = this.pesoSeleccionado === rangoPeso ? '' : rangoPeso;
    this.pesoSeleccionado = this.filtros.peso;
    this.aplicarFiltros();
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





