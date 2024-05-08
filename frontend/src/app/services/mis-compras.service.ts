import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { MisCompras } from '../models/mis-compras';
import { Carrito } from '../models/carrito';

@Injectable({
  providedIn: 'root'
})
export class MisComprasService {
  private apiUrl = 'http://localhost:3000/api/compras';

  private misComprasSeleccionadas = new BehaviorSubject<MisCompras[]>([]);
  misComprasSeleccionadas$ = this.misComprasSeleccionadas.asObservable();

  constructor(private http: HttpClient) { }

  obtenerCompras() {
    return this.http.get(`${this.apiUrl}`);
  }




  //EJERCICIO 8
  obtenerComprasUsuario(emailUser: string): Observable<MisCompras[]> {
    const params = new HttpParams().set('emailUsuario', emailUser);
    return this.http.get<MisCompras[]>(`${this.apiUrl}/usuario`, { params });
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


}
