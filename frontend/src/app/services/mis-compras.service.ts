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



  //SI UN USUARIO ES TIENE COMPRAS, SALTA ALERTA DE QUE NO PUEDE COMPRAR MAS, Y SI ES NUEVO, ALERTA DE SÍ PUEDE COMPRAR
  //EJERCICIO DE USUARIOS ------------------------------------------
  obtenerComprasUsuario(emailUser: string): Observable <MisCompras[]>{ //RECORRES LAS COMPRAS PARA ESE USUARIO
    const params = new HttpParams().set('emailUsuario', emailUser); //EL HTTPPARAMS ES UN METODO PARA PASAR PARAMETROS
    return this.http.get<MisCompras[]>(`${this.apiUrl}/usuario`, { params });
  }
  //----------------------------------------------------------------



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
