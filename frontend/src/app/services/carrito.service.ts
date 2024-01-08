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

  obtenerCarrito() {
    return this.http.get<Carrito>(this.URL);
  }
  
  agregarAlCarrito(producto: ProductoCarrito) {
    return this.http.post<Carrito>(this.URL, producto);
  }

  eliminarDelCarrito(idProducto: string) {
    return this.http.delete<Carrito>(`${this.URL}/${idProducto}`);
  }

  vaciarCarrito() {
    return this.http.delete<Carrito>(`${this.URL}/vaciar`);
  }
  
}
