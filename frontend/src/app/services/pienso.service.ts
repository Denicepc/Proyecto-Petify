import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'; //permite comunicar el frontend con el servidor
import { Pienso } from '../models/pienso';

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

    getPiensos() {  //obtener Pienso
      return this.http.get<Pienso[]>(this.URL);
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


    //-------------------------------------------------------



    //RUTA PARA MOSTRAR EL TIPO ANIMAL (GATO, PERRO)
    getPiensosPorTipo(tipoAnimal: string) {
      return this.http.get<Pienso[]>(`${this.URL}/tipo/${tipoAnimal}`);
    }

    //RUTA PARA MOSTRAR POR PRECIO
    getPiensosPorPrecio(rangoPrecio: string) {
      return this.http.get<Pienso[]>(`${this.URL}/precio/${rangoPrecio}`);
    }


    //RUTA PARA MOSTRAR LOS PESOS
    getPiensosPorPeso(rangoPeso: string) {
      return this.http.get<Pienso[]>(`${this.URL}/peso/${rangoPeso}`);
    }

    //PARA UNIR LOS FILTROS DE PRECIO, PESO, EDAD Y TIPOANIMAL
    getPiensosConFiltros(filtros: any) {
      let params = new HttpParams();
      if (filtros.precio) params = params.set('precio', filtros.precio);
      if (filtros.peso) params = params.set('peso', filtros.peso);
      if (filtros.tipoAnimal) params = params.set('tipoAnimal', filtros.tipoAnimal);

      return this.http.get<Pienso[]>(this.URL, { params });
    }


}
