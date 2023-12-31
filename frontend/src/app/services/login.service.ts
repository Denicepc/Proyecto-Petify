import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  readonly URL = 'http://localhost:3000/api/login'; // Reemplaza esto con tu URL base

  constructor(private http: HttpClient) { }

  login(datos: { email: string, password: string }) {
    return this.http.post(this.URL, datos);
  }
}
