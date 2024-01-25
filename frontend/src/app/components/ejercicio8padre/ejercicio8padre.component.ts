import { Component } from '@angular/core';
import { MisCompras } from 'src/app/models/mis-compras';
import { MisComprasService } from 'src/app/services/mis-compras.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-ejercicio8padre',
  templateUrl: './ejercicio8padre.component.html',
  styleUrls: ['./ejercicio8padre.component.css']
})
export class Ejercicio8padreComponent {
  public email : string = "";
  public arrayCompras :  MisCompras[] = [];
  public cantidadCompras : number = 0;
  public mensaje : string = "";
  
  constructor(public misComprasService: MisComprasService, public usuarioService : UsuarioService){

  }

  conseguirCompras(){
    this.email = this.usuarioService.emailUsuarioLogeado;
    console.log(this.email);

    this.misComprasService.obtenerComprasUsuario(this.email).subscribe(
      (res: any) => {
        this.arrayCompras = res;
        if(this.arrayCompras.length > 0)
          this.cantidadCompras = this.arrayCompras.length;
        else this.cantidadCompras = 0;
      }
    );
  }

  recibirMensaje(mensaje: string){
    this.mensaje = mensaje;
  }
}
