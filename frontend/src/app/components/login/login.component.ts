import { Component } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service'
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
import { LoginService } from '../../services/login.service';

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
  public usuario : Usuario = new Usuario();

  public loginForm!: FormGroup;
  public haIniciado: boolean = false;

  constructor(public usuarioService: UsuarioService, 
    public formBuilder: FormBuilder,
    public loginService: LoginService){

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
    this.usuarioService.postUsuario(form.value)
      .subscribe(res => {
        this.limpiarForm(form);
      });

    //rellenamos el usuario para poder hacer futuras compras
    this.usuario._id = this.usuarioService.usuarioSeleccionado._id;
    this.usuario.nombreCompleto = this.usuarioService.usuarioSeleccionado.nombreCompleto;
    this.usuario.direccion = this.usuarioService.usuarioSeleccionado.direccion;
    this.usuario.telefono = this.usuarioService.usuarioSeleccionado.telefono;
    this.usuario.email = this.usuarioService.usuarioSeleccionado.email;
    this.usuario.password = this.usuarioService.usuarioSeleccionado.password;
    this.usuario.rol = this.usuarioService.usuarioSeleccionado.rol;

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
    this.haIniciado = true;
    if(this.loginForm.invalid) return;
  
    //El interface define la forma que un objeto debe tener, incluyendo qué propiedades debe tener y sus tipos.
    interface RespuestaLogin {
      message: string;
      nombreCompleto?: string; // Asegúrate de que 'nombreCompleto' sea opcional si no siempre se devuelve
    }
    // Llama al servicio de autenticación para iniciar sesión
    this.loginService.login(this.loginForm.value).subscribe(
      (response: any) => {
        // Si la solicitud es exitosa
        console.log('Inicio de sesión exitoso', response);
  
            //funciones adicionales
            if (response.nombreCompleto) {
              this.nombreUsuario = response.nombreCompleto;
            }
            this.mostrarInicio = true;
            this.mostrarBtnIniciarSesion = true;
            this.mostrarBtnRegistrar = true;
            this.mostrarBtnCerrarSesion = false;
            this.colorIconoUsuario = "#58d156"; //color verde
      },
      (error) => {
        // Manejo de errores en caso de fallo en el inicio de sesión
        console.error('Error al iniciar sesión', error);
        alert("Datos introducidos incorrectos, pruebe de otra forma");
      }
    );

  }

  cerrarSesion(){
    this.nombreUsuario = "Usuario sin identificar";  
    this.mostrarBtnIniciarSesion = false;
    this.mostrarBtnRegistrar = false;
    this.mostrarBtnCerrarSesion = true;
    this.colorIconoUsuario = "black";
    this.usuarioService.usuarioSeleccionado = new Usuario(); // reseteamos el usuario
    this.usuario = new Usuario();
  }
}
