import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
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

  //este no lo usamos de momento, seria para el panel admin
  /*obtenerCompras() {
    return this.http.get(`${this.apiUrl}`);
  }*/

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
    //const nuevasCompras = [...comprasActuales, compra]; //crea un nuevo array con el antiguo y compra
    comprasActuales.push(compra);
    this.actualizarMisComprasSeleccionadas(comprasActuales);
  }
}
