import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleado } from '../models/empleado';

@Injectable({ providedIn: 'root' })

export class EmpleadosService {

  empleadoSeleccionado: Empleado;
  empleados: Empleado[];
  readonly URL = 'http://localhost:3000/api/empleados';

  constructor(private http: HttpClient) {

    this.empleadoSeleccionado = new Empleado();
    this.empleados = [];
  }

  mostrarEmpleados() {
    return this.http.get(this.URL)
  }

  crearEmpleado(Empleado: Empleado) {
    return this.http.post(this.URL, Empleado)
  }

  actualizarEmpleado(Empleado: Empleado) {
    return this.http.put(this.URL + `/${Empleado._id}`, Empleado)
  }

  eliminarEmpleado(_id: string) {
    return this.http.delete(this.URL + `/${_id}`);
  }

  
}
