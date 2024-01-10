import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //permite comunicar el frontend con el servidor
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


  /* FILTROS METODO PARA PIENSOS (EL METODO ESTA ABAJO)
    El propósito del metodo es obtener un conjunto de datos de piensos filtrados por un tipo de animal específico (como "Perro", "Gato", etc...)
    - tipoAnimal: string --> le pasamos el parametro para especificar el pienso que vamos a querer del animal que queramos buscar
    - Observable<Pienso[]> --> El método devuelve un Observable que emitirá un array de objetos Pienso.
    - Los Observables son una parte central de la biblioteca RxJS y se utilizan ampliamente para manejar operaciones asíncronas y flujos de datos.

    //ULTIMA PARTE DEL RETURN
    - this.http.get<Pienso[]>(${this.URL}/tipo/${tipoAnimal}) --> es una llamada HTTP GET utilizando el servicio HttpClient de Angular
    - this.URL --> es la URL base de tu API. Al concatenar /tipo/${tipoAnimal}, estás creando una URL específica para obtener los piensos de un tipo particular de animal.
    - <Pienso[]>   -->  indica que esperas que la respuesta sea un array de objetos

    //EN RESUMEN
    Estás haciendo una solicitud al servidor para obtener los datos de piensos que corresponden al tipo de animal especificado.
    Por ejemplo, si pasas 'Perro' como argumento, la función solicitará al servidor los piensos para perros.
    */
   

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


    //RUTA PARA EL TIPO DE EDAD (JUNIOR, ADULTO, SENIOR)
    getPiensosPorEdad(rangoEdad: string) {
      return this.http.get<Pienso[]>(`${this.URL}/edad/${rangoEdad}`);
    }
  
}
