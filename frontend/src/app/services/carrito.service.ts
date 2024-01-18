import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //permite comunicar el frontend con el servidor
import { Carrito, ProductoCarrito } from '../models/carrito';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private carritoSeleccionado = new BehaviorSubject<Carrito>(new Carrito());
  carritoSeleccionado$ = this.carritoSeleccionado.asObservable();

  readonly URL = 'http://localhost:3000/api/carrito';

  constructor(private http: HttpClient) {}

  obtenerCarrito(emailUsuario: string) {
    const url = `${this.URL}/${emailUsuario}`;
    return this.http.get(url);
  }
  
  agregarAlCarrito(producto: ProductoCarrito, emailUsuario: string) {
    return this.http.post(`${this.URL}/agregar`, { ...producto, emailUsuario });
  }

  eliminarProducto(nombreProducto: string, emailUsuario: string) {
    const params = { params: { nombreProd: nombreProducto, usuarioActual: emailUsuario } }; //le pasa los parametros en el cuerpo de la solicitud
    return this.http.delete(`${this.URL}/eliminar`, params);

    //return this.http.delete(`${this.URL}/eliminar?nombreProd=${nombreProducto}&email=${emailUsuario}`);
  }

  restarProducto(nombreProducto: string, emailUsuario: string) {
    const params = { nombreProd: nombreProducto, usuarioActual: emailUsuario };
    return this.http.put(`${this.URL}/restar`,null, { params });
  }
  
  sumarProducto(nombreProducto: string, emailUsuario: string) {
    const params = { nombreProd: nombreProducto, usuarioActual: emailUsuario };
    return this.http.put(`${this.URL}/sumar`,null, { params });
    //Al utilizar el método put con parámetros en la URL, el cuerpo debe establecerse como null para indicar que no hay datos en el cuerpo de la solicitud.
  }

  vaciarCarrito(emailUsuario: string) {
    return this.http.delete(`${this.URL}/${emailUsuario}`);
  }
  
  actualizarCarritoSeleccionado(carrito: Carrito) {
    this.carritoSeleccionado.next(carrito);
  }
}
