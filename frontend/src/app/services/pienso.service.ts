import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //permite comunicar el frontend con el servidor
import { Pienso } from '../models/pienso';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PiensoService {


  piensoSeleccionado: Pienso;
  piensos: Pienso[];
  readonly URL= 'http://localhost:3000/api/piensos';

  constructor(private http: HttpClient) {


  this.piensoSeleccionado= new Pienso();
  this.piensos=[];

  }

  getPiensos(){ //conseguir piensos
    return this.http.get(this.URL);
  }

  postPienso(pienso: Pienso){ //crear pienso
    return this.http.post(this.URL, pienso);
  }

  putPienso(pienso: Pienso){ //editar pienso
    return this.http.put(this.URL + `/${pienso._id}`, pienso);
  }

  deletePienso(_id: string){ //eliminar pienso
    return this.http.delete(this.URL + `/${_id}`);
  }


  //METODO PARA LOS FILTROS
  getPiensosPorTipo(tipoAnimal: string): Observable<Pienso[]> {
    return this.http.get<Pienso[]>(`${this.URL}/tipo/${tipoAnimal}`);
  }

}
