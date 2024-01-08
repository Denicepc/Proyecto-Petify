import { Component } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service'
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public mostrarInicio : boolean = true;
  public mostrarRegistro : boolean  = true;
  public colorIconoUsuario : string = "black";
  public nombreUsuario : string = "Usuario sin identificar";
  public usuario : Usuario = new Usuario();

  public loginForm!: FormGroup;
  public haIniciado: boolean = false;
  public esAdmin: boolean = false;

  constructor(public usuarioService: UsuarioService, 
    public formBuilder: FormBuilder){

  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      password:['', Validators.required]
    });
  }

  get fc(){
    return this.loginForm.controls;
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
    form.value.rol = 'Cliente';

    if(isNaN(form.value.telefono)){
      alert("TA MAL");
      return;
    }

    this.usuarioService.registrarUsuario(form.value)
      .subscribe( 
      (response: any) => {   
        if(response.status === "Usuario registrado correctamente"){
          console.log("Usuario registrado correctamente", response);
          alert('Usuario registrado Correctamente');

          if (response.usuario) {
            this.usuario = response.usuario;
          }
          //funciones adicionales
          this.haIniciado = true;
          this.nombreUsuario = form.value.nombreCompleto;
          this.mostrarRegistro=true;
          this.colorIconoUsuario = "#58d156"; //color verde

          this.limpiarForm(form);

        }else if(response.status === 'El usuario ya existe'){
          console.log('El usuario ya existe', response);
          alert('El usuario con ese email ya existe');
        }
      },
      (error) => {
        console.error("Error al registrar el usuario", error);
      });
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
    this.haIniciado = true;
    if(this.loginForm.invalid) return;

    // Llama al servicio de autenticación para iniciar sesión
    this.usuarioService.iniciarSesion(this.loginForm.value)
    .subscribe(
      (response: any) => {
        if(response.status == "Inicio de sesión correcto"){
          // Si la solicitud es exitosa
          console.log('Inicio de sesión exitoso', response);
  
          //funciones adicionales
          if (response.usuario) {
            this.usuario = response.usuario;
            this.nombreUsuario = this.usuario.nombreCompleto;

            
            if(this.usuario.rol === "Administrador"){
              this.esAdmin = true;
            }
          }
          this.mostrarInicio = true;
          this.colorIconoUsuario = "#58d156"; //color verde
        }else if(response.status === "Datos incorrectos al iniciar sesión"){
          alert("Datos introducidos incorrectos, pruebe de otra forma");
          this.haIniciado = false;
        }
      },
      (error) => {
        // Manejo de errores en caso de fallo en el inicio de sesión
        console.error('Error al iniciar sesión', error);
        alert("Error al iniciar sesiçon");
      }
    );

  }

  mostrarPanelAdmin(){
    let menuAdmin = document.getElementById("menuAdmin");
    let panelAdminUsuarios = document.getElementById("panelAdmin-usuarios");
    let panelAdminPiensos = document.getElementById("panelAdmin-piensos");

    if(menuAdmin != null){
      if(menuAdmin.style.display=="block")
        menuAdmin.style.display="none";
      else menuAdmin.style.display="block";
    }

    if(panelAdminUsuarios != null){
      if(panelAdminUsuarios.style.display=="block")
        panelAdminUsuarios.style.display="none";
      else panelAdminUsuarios.style.display="block";
    }

    if(panelAdminPiensos != null){
      if(panelAdminPiensos.style.display=="block")
        panelAdminPiensos.style.display="none"
      else panelAdminPiensos.style.display="block"
    }
  }

  cerrarSesion(){
    this.haIniciado = false;
    this.nombreUsuario = "Usuario sin identificar";  
    this.colorIconoUsuario = "black";
    this.usuarioService.usuarioSeleccionado = new Usuario(); // reseteamos el usuario
    this.usuario = new Usuario();
    this.esAdmin = false;
  }
}
