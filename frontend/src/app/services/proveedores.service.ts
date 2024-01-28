import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Proveedores } from '../models/proveedores';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {
  readonly URL= 'http://localhost:3000/api/proveedores';

  public proveedorSeleccionado: Proveedores = new Proveedores();

  constructor(private http: HttpClient) {

    }

    postPienso(proveedor: Proveedores){ //crear pienso
      return this.http.post(this.URL, proveedor);
    }
}
