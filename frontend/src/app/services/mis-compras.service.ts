import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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



  //metodo para contar las compras de todos los usuarios
  contarTodasLasCompras(): Observable<any> {
    return this.http.get<{totalCompras: number}>(`${this.apiUrl}/contar-todas-compras`);
  }



  obtenerCompras() {
    return this.http.get(`${this.apiUrl}`);
  }

  obtenerComprasUsuario(emailUser: string) {
    const params = { emailUsuario : emailUser}
    return this.http.get(`${this.apiUrl}/usuario`, {params});
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
