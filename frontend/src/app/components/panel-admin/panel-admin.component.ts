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
  constructor(public usuarioService: UsuarioService){

  }

  ngOnInit(){
    this.conseguirUsuarios();
  }


  limpiarForm(form?: NgForm){
    if(form){ //si existe el formulario lo vaciamos
      form.reset();
      this.usuarioService.usuarioSeleccionado = new Usuario(); // reseteamos el usuario
    }
  }

  agregarUsuario(form: NgForm){
    if(form.value._id){ //editamos
      this.usuarioService.putUsuario(form.value)
      .subscribe(res => {
        alert("Usuario editado correctamente");
        this.conseguirUsuarios();
        this.limpiarForm(form);
      })
    }else{ //agregamos
    //form.value tiene los datos del usuario nuevo
    this.usuarioService.postUsuario(form.value)
      .subscribe(res => {
        alert("Usuario agregado correctamente");
        this.conseguirUsuarios();
        this.limpiarForm(form);
      });
    }
  }

  conseguirUsuarios(){
    this.usuarioService.getUsuarios()
    .subscribe(res => {
      this.usuarioService.usuarios = res as Usuario[];
      console.log(res);
    });
  }

  editarUsuario(usuario: Usuario){
    console.log(usuario._id);
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
}
