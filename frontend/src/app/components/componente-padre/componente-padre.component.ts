import { Component, OnInit } from '@angular/core';
import { MisCompras } from 'src/app/models/mis-compras';
import { MisComprasService } from 'src/app/services/mis-compras.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-componente-padre',
  templateUrl: './componente-padre.component.html',
  styleUrls: ['./componente-padre.component.css']
})
export class ComponentePadreComponent {

  public email: string = "";
  public compras: MisCompras[] = []; //almacenamos las compras
  public resultado: string = "";

  constructor(public misComprasService:MisComprasService, public usuarioService: UsuarioService){}

  recogeCompras(){
    this.email = this.usuarioService.emailUsuarioLogeado; //obtienes el email del Usuario

    this.misComprasService.obtenerComprasUsuario(this.email).subscribe(
      (res: any) => {
        this.compras=res;
      });
  }

  recibirCantidad(cant: number){
    this.resultado = "La cantidad comprada por "+this.email+" es de: "+cant;
  }

}
