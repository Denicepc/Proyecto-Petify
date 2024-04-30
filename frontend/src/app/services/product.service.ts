import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService { //TODO ESTO ES EL EJERCICIO 19

  readonly URL = 'http://localhost:3000/api/usuarios';

  constructor(private http:HttpClient) {}

  getTotalProducts(nombreProducto: string): Observable<number> {
    return this.http.get<number>(`/api/product/total/${nombreProducto}`);
  }

}
