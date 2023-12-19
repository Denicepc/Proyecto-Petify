import { Component } from '@angular/core';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { NgForm } from '@angular/forms';
import { Empleado } from 'src/app/models/empleado';

declare var M : any;

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent {
  constructor (public empleadoService: EmpleadosService){}

  addEmploye(form: NgForm){
    if(form.value._id){
      this.empleadoService.actualizarEmpleado(form.value)
      .subscribe(res => {
        console.log(res);
        this.obtenerEmpleados();
        this.resetForm(form);
      });
    }else{
        form.value._id = null;
        this.empleadoService.crearEmpleado(form.value)
        .subscribe(res =>{
          console.log(res);
          this.resetForm(form);
          M.toast ({html: 'Empleado Almacenado'});
          this.obtenerEmpleados();
        });
    }
  }

  obtenerEmpleados(){
    this.empleadoService.mostrarEmpleados()
    .subscribe (res => {
      this.empleadoService.empleados = res as Empleado[];
      console.log(res);
    })
  }

  editarEmpleado(empleado : Empleado){
    this.empleadoService.empleadoSeleccionado = empleado;
  }

  borrarEmpleado(_id: string){
    if(confirm("¿Está seguro  que quiere eliminar el empleado?")){
      this.empleadoService.eliminarEmpleado(_id)

      .subscribe(res =>{
        this.obtenerEmpleados();
        M.toast({html: 'Empleado Eliminado'});
      });
    }
    
  }

  ngOnInit(): void {
    this.obtenerEmpleados();
    
  }

  resetForm(form?: NgForm) {
    if(form) {
      form.reset();
      this.empleadoService.empleadoSeleccionado = new Empleado;
    }
  }

}
