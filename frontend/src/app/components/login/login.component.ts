import { Component, EventEmitter, Output } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service'
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
import { MisComprasService } from 'src/app/services/mis-compras.service';
import { MisCompras } from 'src/app/models/mis-compras';
import { CarritoService } from 'src/app/services/carrito.service'; //importar esta libreria

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Output() enviarEmail: EventEmitter<string>;
  public mostrarInicio: boolean = true;
  public mostrarRegistro: boolean = true;
  public colorIconoUsuario: string = "black";
  public nombreUsuario: string = "Usuario sin identificar";
  public usuario: Usuario = new Usuario();

  public loginForm!: FormGroup;
  public haIniciado: boolean = false;
  public esAdmin: boolean = false;
  public misCompras: MisCompras[] = [];


  //PONER AQUI EL CARRITO SERVICE
  constructor(public usuarioService: UsuarioService, public misComprasService: MisComprasService, public carritoService: CarritoService, public formBuilder: FormBuilder) {
     this.enviarEmail = new EventEmitter();
  }


    //tocar solo esta parte
    enviar(): void {
      this.haIniciado = true;
      if (this.loginForm.invalid) return;

      this.usuarioService.iniciarSesion(this.loginForm.value).subscribe(
        (response: any) => {
          if (response.status == "Inicio de sesión correcto") {
            if (response.usuario) {
              this.usuario = response.usuario;
              this.nombreUsuario = this.usuario.nombreCompleto;
              this.enviarEmail.emit(this.usuario.email);

              if (this.usuario.rol === "Administrador") {
                this.esAdmin = true;
              }


              //ACTUALIZAS EL CARRITO DESPUES DE INICIAR SESION ------
                  this.carritoService.obtenerCarrito(this.usuario.email).subscribe(
                    (carrito: any) => {
                      this.carritoService.actualizarCarritoSeleccionado(carrito);
                    },
                    error => console.error('Error al obtener el carrito', error)
                  );
                }
              //FIN DEL CODIGO ------------------------------------------


            this.mostrarInicio = true;
            this.colorIconoUsuario = "#58d156";

          } else if (response.status === "Datos incorrectos al iniciar sesión") {
            alert("Datos introducidos incorrectos, pruebe de otra forma");
            this.haIniciado = false;
          }
        },
        error => {
          console.error('Error al iniciar sesión', error);
          alert("Error al iniciar sesión");
        }
      );
    }































  //no tocar
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }


  //no tocar
  get fc(){
    return this.loginForm.controls;
  }

  //formulario no tocar
  limpiarForm(form?: NgForm){
    if(form){ //si existe el formulario lo vaciamos
      form.reset();
      this.usuarioService.usuarioSeleccionado = new Usuario(); //reseteamos el usuario
    }
  }

  //no tocar
  agregarUsuario(form: NgForm){
    //form.value tiene los datos del usuario nuevo
    form.value.rol = 'Cliente';

    if(isNaN(form.value.telefono)){
      alert("Teléfono incorrecto");
      return;
    }

    this.usuarioService.registrarUsuario(form.value)
      .subscribe(
      (response: any) => {
        if(response.status === "Usuario registrado correctamente"){
          alert('Usuario registrado Correctamente');

          if (response.usuario) {
            this.usuario = response.usuario;
          }
          //funciones adicionales
          this.haIniciado = true;
          this.nombreUsuario = form.value.nombreCompleto;
          this.mostrarRegistro=true;
          this.colorIconoUsuario = "#58d156"; //color verde

          //si se registra asociamos el id a su carrito
          this.enviarEmail.emit(this.usuario.email);

          //conseguimos los usuarios para la tabla de admin
          this.usuarioService.getUsuarios()
          .subscribe(res => {
            this.usuarioService.usuarios = res as Usuario[];
          });


          this.limpiarForm(form);

        }else if(response.status === 'El usuario ya existe'){
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

  verMisCompras(){
    let panelMisCompras = document.getElementById("misCompras");

    if(panelMisCompras != null){
      if(panelMisCompras.style.display=="block")
        panelMisCompras.style.display="none";
      else{
        panelMisCompras.style.display="block";
        if (this.usuario.email && this.usuario.email !== "null") {
          this.misComprasService.obtenerComprasUsuario(this.usuario.email).subscribe(
            (res: any) => { //devuelve MisCompras[] un array de mis compras
              this.misCompras = res;
              this.misComprasService.actualizarMisComprasSeleccionadas(this.misCompras);
              console.log("MIS COMPRAS: ",res)
            },
            error => {
              console.error('Error al obtener compras', error);
            }
          );
        }
      }
    }

  }

  cerrarSesion(){
    this.haIniciado = false;
    this.nombreUsuario = "Usuario sin identificar";
    this.colorIconoUsuario = "black";
    this.usuarioService.usuarioSeleccionado = new Usuario(); // reseteamos el usuario
    this.usuario = new Usuario();
    this.esAdmin = false;

    //ocultar al finalizar la sesión
    let menuAdmin = document.getElementById("menuAdmin");
    let panelAdminUsuarios = document.getElementById("panelAdmin-usuarios");
    let panelAdminPiensos = document.getElementById("panelAdmin-piensos");
    let panelMisCompras = document.getElementById("misCompras");

    //ocultamos los paneles para admin
    if(menuAdmin != null){
      if(menuAdmin.style.display=="block")
        menuAdmin.style.display="none";
    }

    if(panelAdminUsuarios != null){
      if(panelAdminUsuarios.style.display=="block")
        panelAdminUsuarios.style.display="none";
    }

    if(panelAdminPiensos != null){
      if(panelAdminPiensos.style.display=="block")
        panelAdminPiensos.style.display="none"
    }

    if(panelMisCompras != null){ //ocultamos mis compras
      if(panelMisCompras.style.display=="block")
        panelMisCompras.style.display="none"
    }

    this.enviarEmail.emit("null");  //quitamos el id asociado al carrito
    this.usuarioService.emailUsuarioLogeado = "null";

    //vaciamos mis compras
    this.misCompras = [];
    this.misComprasService.actualizarMisComprasSeleccionadas(this.misCompras);
  }
}
