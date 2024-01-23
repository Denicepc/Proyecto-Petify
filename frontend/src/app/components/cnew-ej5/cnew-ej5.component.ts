import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { MisComprasService } from 'src/app/services/mis-compras.service';

@Component({
  selector: 'app-cnew-ej5',
  templateUrl: './cnew-ej5.component.html',
  styleUrls: ['./cnew-ej5.component.css']
})
export class CnewEj5Component {
  public mensaje1 : string = "Bienvenido";
  public mensaje2 : string = "Usted no es la primera vez que compra";

  constructor(public usuarioService : UsuarioService, public misComprasService: MisComprasService){

  }

  ngOnInit(): void {
    let caja = document.getElementById("caja");
    let email = this.usuarioService.obtenerEmailUsuarioLogeado();
    if (email != null) {
      this.misComprasService.conseguirClienteComprado(email).subscribe(
        (res: any) => {
          if(res.status == "no ha comprado"){
            let parrafo = document.createElement("p");
            parrafo.innerHTML = this.mensaje1;
            caja?.appendChild(parrafo);
          }else if(res.status == "ha comprado"){
            let parrafo2 = document.createElement("p");
            parrafo2.innerHTML = this.mensaje2;
            caja?.appendChild(parrafo2);
          }
        }
      );
    }
  }
}
