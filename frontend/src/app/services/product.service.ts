import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
//TODO ESTO ES EL EJERCICIO 19

export class ProductService {

  private baseURL = 'http://localhost:3000/api/mis-compras';  // Asegúrate de que esta URL sea correcta

  constructor(private http: HttpClient) {}

  getTotalProducts(nombreProducto: string): Observable<number> {
    const url = `${this.baseURL}/total/${encodeURIComponent(nombreProducto)}`;
    return this.http.get<number>(url);
  }

}
