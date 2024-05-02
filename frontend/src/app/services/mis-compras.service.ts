import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { MisCompras } from '../models/mis-compras';
import { Carrito } from '../models/carrito';
import { Observable } from 'rxjs';

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




  //EJERICICIO 46 ------------
  obtenerComprasUsuario(emailUsuario: string): Observable<MisCompras[]> {
    return this.http.get<MisCompras[]>(`${this.apiUrl}/usuario`, { params: { emailUsuario } });
  } //-------------------------




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
