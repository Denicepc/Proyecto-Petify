import { Component } from '@angular/core';
import { MisCompras } from 'src/app/models/mis-compras';
import { Pienso } from 'src/app/models/pienso';
import { MisComprasService } from 'src/app/services/mis-compras.service';
import { PiensoService } from 'src/app/services/pienso.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent {

  public email : string = "";
  public compras: MisCompras[] = [];
  public piensos: Pienso[] = [];


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
  constructor(private piensoService: PiensoService, public usuarioService: UsuarioService, public misComprasService: MisComprasService){}


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
      //aplicamos ambos filtros si existen
      this.piensoService.getPiensosConFiltros(this.filtros).subscribe(
        piensos => this.piensoService.piensos = piensos,
        error => console.error('Error al obtener piensos filtrados', error)
      );
    } else if (this.filtros.precio || this.filtros.peso) {
      //si solo hay un filtro aplicamos ese
      this.piensoService.getPiensosConFiltros(this.filtros).subscribe(
        piensos => this.piensoService.piensos = piensos,
        error => console.error('Error al obtener piensos filtrados', error)
      );
    } else {
      //mostramos todos los productos si no hay filtros
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
      //si al menos una casilla está marcada, aplicamos los filtros y guardamos los productos actuales
      this.productosAnteriores = this.piensoService.piensos;
      this.piensoService.getPiensosConFiltros(this.filtros).subscribe(
        piensos => this.piensoService.piensos = piensos,
        error => console.error('Error al obtener piensos filtrados', error)
      );
    } else {
      //si ambas casillas están desmarcadas, mostramos todos los productos
      this.piensoService.getPiensos().subscribe(
        piensos => this.piensoService.piensos = piensos,
        error => console.error('Error al obtener todos los piensos', error)
      );
    }
  }


  //ESTO ES POR EL TIPO DE ANIMAL --> METODO PARA FILTRAL EL PIENSO DE ANIMAL QUE LE PASAS POR PARAMETRO
  filtrarPorTipo(tipoAnimal: string) {
    let arrayPiensosNuevo: Pienso[] = [];
    this.email = this.usuarioService.emailUsuarioLogeado;
    this.piensoService.getPiensosPorTipo(tipoAnimal).subscribe(
      (res:any) =>{
        this.piensos = res;
        this.piensos.forEach( pienso =>{
          this.conseguirCompras();
          setTimeout(() => {
            this.compras.forEach(compra =>{
              compra.productos.forEach(prod =>
                {
                  if(prod.nombreProd == pienso.nombre)
                    if(!arrayPiensosNuevo.includes(pienso))
                      arrayPiensosNuevo.push(pienso);
                }
                )
            })
          }, 100);
        })



        this.piensoService.piensos = arrayPiensosNuevo;
      })
  }

  conseguirCompras(){
    this.misComprasService.obtenerComprasUsuario(this.email).subscribe(
      (res:any)=>{
        this.compras = res;
      })
  }

  }





