import { Component } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service'
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public mostrarBtnIniciarSesion : boolean = false;
  public mostrarBtnRegistrar : boolean = false;
  public mostrarBtnCerrarSesion : boolean = true;
  public mostrarInicio : boolean = true;
  public mostrarRegistro : boolean  = true;
  public colorIconoUsuario : string = "black";
  public nombreUsuario : string = "Usuario sin identificar";

  constructor(public usuarioService: UsuarioService){

  }

  //formulario
  limpiarForm(form?: NgForm){
    if(form){ //si existe el formulario lo vaciamos
      form.reset();
      this.usuarioService.usuarioSeleccionado = new Usuario(); // reseteamos el usuario
    }
  }

  agregarUsuario(form: NgForm){
    //form.value tiene los datos del usuario nuevo
    this.usuarioService.postUsuario(form.value)
      .subscribe(res => {
        this.limpiarForm(form);
      });

    //funciones adicionales
      this.nombreUsuario = form.value.nombreCompleto;
      this.mostrarRegistro=true;
      this.mostrarBtnIniciarSesion = true;
      this.mostrarBtnRegistrar = true;
      this.mostrarBtnCerrarSesion = false;
      this.colorIconoUsuario = "#58d156"; //color verde
  }


  ocultarRegistro(){
    this.mostrarRegistro = true;
    this.mostrarInicio = false;
  }

  ocultarInicio(){
    this.mostrarRegistro=false;
    this.mostrarInicio = true;
  }

  enviar(){
    this.mostrarInicio = true;
    this.mostrarBtnIniciarSesion = true;
    this.mostrarBtnRegistrar = true;
    this.mostrarBtnCerrarSesion = false;
    this.colorIconoUsuario = "#58d156"; //color verde
  }

  cerrarSesion(){
    this.nombreUsuario = "Usuario sin identificar";  
    this.mostrarBtnIniciarSesion = false;
    this.mostrarBtnRegistrar = false;
    this.mostrarBtnCerrarSesion = true;
    this.colorIconoUsuario = "black";
  }
}
