import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //permite comunicar el frontend con el servidor
import { Carrito, ProductoCarrito } from '../models/carrito';


@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  carritoSeleccionado: Carrito; 
  readonly URL = 'http://localhost:3000/api/carrito';

  constructor(private http: HttpClient) {
    this.carritoSeleccionado = new Carrito();
  }

  obtenerCarrito(idUsuario: string) {
    const url = `${this.URL}/obtener/${idUsuario}`;
    return this.http.get<Carrito>(url);
  }
  
  agregarAlCarrito(producto: ProductoCarrito) {
    return this.http.post(this.URL+`/agregar`, producto);
  }

  eliminarDelCarrito(idProducto: string) {
    return this.http.delete<Carrito>(`${this.URL}/${idProducto}`);
  }

  vaciarCarrito() {
    return this.http.delete<Carrito>(`${this.URL}/vaciar`);
  }
  
}
