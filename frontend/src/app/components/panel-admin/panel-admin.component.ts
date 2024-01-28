import { Pienso } from './../../models/pienso';
import { PiensoService } from './../../services/pienso.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-panel-admin',
  templateUrl: './panel-admin.component.html',
  styleUrls: ['./panel-admin.component.css']
})
export class PanelAdminComponent {
  public pienso : Pienso = new Pienso();

  constructor(public usuarioService: UsuarioService, public piensoService: PiensoService){
  }


  ngOnInit(){
    this.conseguirUsuarios();
    this.conseguirPiensos();
  }


//USUARIOS
  limpiarUsuario(form?: NgForm){
    if(form){ //si existe el formulario lo vaciamos
      form.reset();
      this.usuarioService.usuarioSeleccionado = new Usuario(); //reseteamos el usuario
    }
  }

  agregarUsuario(form: NgForm){
    if(form.value._id){ //editamos
      this.usuarioService.putUsuario(form.value)
      .subscribe(
        (response: any) => {
          if(response.status === "Usuario actualizado"){
            alert("Usuario editado correctamente");
            this.conseguirUsuarios();
            this.limpiarUsuario(form);
          }else if(response.status === 'El usuario ya existe'){
            alert('El usuario con ese email ya existe');
          }
        },
        (error) => {
          console.error("Error al registrar el usuario", error);
        });
    }else{ //agregamos
    //form.value tiene los datos del usuario nuevo
    this.usuarioService.registrarUsuario(form.value)
      .subscribe(
      (response: any) => {
        if(response.status === "Usuario registrado correctamente"){
          alert('Usuario agregado Correctamente');
          this.conseguirUsuarios();
          this.limpiarUsuario(form);
        }else if(response.status === 'El usuario ya existe'){
          alert('El usuario con ese email ya existe');
        }
      },
      (error) => {
        console.error("Error al registrar el usuario", error);
      });
    }
  }


  conseguirUsuarios(){
    this.usuarioService.getUsuarios()
    .subscribe(res => {
      this.usuarioService.usuarios = res as Usuario[];
    });
  }


  editarUsuario(usuario: Usuario){
    this.usuarioService.usuarioSeleccionado = usuario;
    //this.usuarioService.putUsuario(usuario)
  }

  
  eliminarUsuario(_id: string){
    let respuesta = confirm("¿Seguro qué quiere eliminar?");
    if(respuesta){
      this.usuarioService.deleteUsuario(_id)
      .subscribe(res => {
        alert("Usuario eliminado correctamente");
        this.conseguirUsuarios();
      });
    }
  }



  //PIENSOS
  limpiarPienso(form?: NgForm){
    if(form){ //si existe el formulario lo vaciamos
      form.reset();
      this.piensoService.piensoSeleccionado = new Pienso(); //reseteamos el usuario
    }
  }

  agregarPienso(form: NgForm){
    if(form.value._id){ //editamos
      this.piensoService.putPienso(form.value)
      .subscribe(
        (res:any) => {
        if(res.status === "Pienso actualizado"){
          alert("Pienso editado correctamente");
          this.conseguirPiensos();
          this.limpiarPienso(form);
        }else if(res.status === "El nombre del pienso no se puede repetir"){
          alert("El nombre del pienso ya existe en la base de datos");
        }
      },
      (error)=>{
        console.log("error al editar el pienso",error);
      })
    }else{ //agregamos
    //form.value tiene los datos del usuario nuevo
    this.piensoService.postPienso(form.value)
      .subscribe(
        (res:any) => {
          if(res.status === "Pienso guardado"){
            alert("Pienso agregado correctamente");
            this.conseguirPiensos();
            this.limpiarPienso(form);
          }else if(res.status === "El nombre del pienso no se puede repetir"){
            alert("El nombre del pienso ya existe en la base de datos");
          }
        },
        (error)=>{
          console.log("error al agregar el pienso",error);
        }
        );
    }
  }

  conseguirPiensos(){
    this.piensoService.getPiensos()
    .subscribe(res => {
      this.piensoService.piensos = res as Pienso[];
    });
  }


  editarPienso(pienso: Pienso){
    this.piensoService.piensoSeleccionado = pienso;
    this.pienso = this.piensoService.piensoSeleccionado;
  }

  eliminarPienso(_id: string){
    let respuesta = confirm("¿Seguro qué quiere eliminar?");
    if(respuesta){
      this.piensoService.deletePienso(_id)
      .subscribe(res => {
        alert("Pienso eliminado correctamente");
        this.conseguirPiensos();
      });
    }
  }

}
