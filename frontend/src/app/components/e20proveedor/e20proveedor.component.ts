import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProveedoresService } from 'src/app/services/proveedores.service';

@Component({
  selector: 'app-e20proveedor',
  templateUrl: './e20proveedor.component.html',
  styleUrls: ['./e20proveedor.component.css']
})
export class E20proveedorComponent {

  constructor(public proveedoresService: ProveedoresService){}

  agregarProveedor(form: NgForm){
    this.proveedoresService.postPienso(form.value).subscribe();
  }
}

