import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { MisCompras } from '../models/mis-compras';
import { Carrito } from '../models/carrito';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MisComprasService {
  private apiUrl = 'http://localhost:3000/api/compras';

  private misComprasSeleccionadas = new BehaviorSubject<MisCompras[]>([]);
  misComprasSeleccionadas$ = this.misComprasSeleccionadas.asObservable();


  constructor(private http: HttpClient) { }

  //obtiene todas las compras de los usuarios

  obtenerCompras() {
    return this.http.get(`${this.apiUrl}`);
  }

  //obtiene la compra de un unico usuario
  obtenerComprasUsuario(emailUser: string) {
    const params = { emailUsuario: emailUser };
    return this.http.get(`${this.apiUrl}/usuario`, { params });
  }

  crearCompra(carrito: Carrito) {
    return this.http.post(`${this.apiUrl}`, carrito);
  }

  actualizarMisComprasSeleccionadas(misCompras: MisCompras[]) {
    this.misComprasSeleccionadas.next(misCompras);
  }

  agregarCompraIndividual(compra: MisCompras) {
    const comprasActuales = this.misComprasSeleccionadas.getValue();
    comprasActuales.push(compra);
    this.actualizarMisComprasSeleccionadas(comprasActuales);
  }

  //EJERCICIO 15 -------------------------------
  obtenerNumeroProductosUsuario(emailUsuario: string, nombreProd: string) {
    const params = { emailUsuario, nombreProd };
    return this.http.get<{ totalProductos: number }>(`${this.apiUrl}/producto/numero-compras`, { params });
  }
  //--------------------------------------------

}
