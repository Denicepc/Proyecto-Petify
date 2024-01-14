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

  obtenerCarrito(emailUsuario: string) {
    const url = `${this.URL}/${emailUsuario}`;
    return this.http.get(url);
  }
  
  agregarAlCarrito(producto: ProductoCarrito, emailUsuario: string) {
    return this.http.post(`${this.URL}/agregar`, { ...producto, emailUsuario });
  }

  eliminarDelCarrito(idProducto: string) {
    return this.http.delete(`${this.URL}/${idProducto}`);
  }

  vaciarCarrito() {
    return this.http.delete(`${this.URL}/vaciar`);
  }
  
}
