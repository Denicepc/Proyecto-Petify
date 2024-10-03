import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //permite comunicar el frontend con el servidor (backend)
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  //instanciamos el httpclient en el constructor

  usuarioSeleccionado: Usuario;
  usuarios: Usuario[];
  emailUsuarioLogeado: string;
  readonly URL = 'http://localhost:3000/api/usuarios';

  constructor(private http: HttpClient) {
    this.usuarioSeleccionado = new Usuario();
    this.usuarios = [];
    this.emailUsuarioLogeado = "null"; //si no se ha logeado ningun usuario es null
  }

  //Obtiene todos los usuarios.
  getUsuarios(){
    return this.http.get(this.URL);
  }

  //Crea un nuevo usuario
  postUsuario(user: Usuario){
    return this.http.post(this.URL, user);
  }

  //Edita un usuario existente
  putUsuario(user: Usuario){
    return this.http.put(this.URL + `/${user._id}`, user);
  }

  //Elimina un usuario
  deleteUsuario(_id: string){
    return this.http.delete(this.URL + `/${_id}`);
  }



  //Registra un usuario y almacena su email
  registrarUsuario(user: Usuario){
    this.emailUsuarioLogeado = user.email;
    return this.http.post(this.URL+`/registro`, user);
  }

  //Inicia sesión y guarda el email del usuario logeado
  iniciarSesion(datos: { email: string, password: string }) {
    this.emailUsuarioLogeado = datos.email;
    return this.http.post(this.URL+`/login`, datos);
  }

  //Devuelve el email del usuario logeado
  obtenerEmailUsuarioLogeado(): string {
    return this.emailUsuarioLogeado;
  }

  //Devuelve el usuario logeado actualmente
  obtenerUsuarioLogeado(){
    return this.usuarioSeleccionado;
  }

}
