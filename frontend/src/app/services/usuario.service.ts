import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //permite comunicar el frontend con el servidor
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

  getUsuarios(){ //conseguir usuarios
    return this.http.get(this.URL);
  }

  postUsuario(user: Usuario){ //crear usuario
    return this.http.post(this.URL, user);
  }

  putUsuario(user: Usuario){ //editar usuario
    return this.http.put(this.URL + `/${user._id}`, user);
  }

  deleteUsuario(_id: string){ //eliminar usuario
    return this.http.delete(this.URL + `/${_id}`);
  }

  registrarUsuario(user: Usuario){ //registrar usuario
    this.emailUsuarioLogeado = user.email;
    return this.http.post(this.URL+`/registro`, user);
  }

  iniciarSesion(datos: { email: string, password: string }) {
    this.emailUsuarioLogeado = datos.email;
    return this.http.post(this.URL+`/login`, datos);
  }

  obtenerEmailUsuarioLogeado(): string { //lo usaremos para añadir productos al carrito con el email del usuario correspondiente
    return this.emailUsuarioLogeado;
  }

  obtenerUsuario2(email: string) {
    return this.http.get(this.URL+`/nombre/${email}`);
  }


  //ejercicio 55
  obtenerNom(email:string){
    return this.http.get(this.URL+`/nom/${email}`);
  }

}
