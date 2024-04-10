import { Component, Input, SimpleChanges } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { MisComprasService } from 'src/app/services/mis-compras.service';

@Component({
  selector: 'app-cnew-ej5',
  templateUrl: './cnew-ej5.component.html',
  styleUrls: ['./cnew-ej5.component.css']
})
export class CnewEj5Component {
  public mensaje1 : string = "vacio";
  public mensaje2 : string = "vacio";
  @Input() booleanoEnviado : boolean = false;

  constructor(public usuarioService : UsuarioService, public misComprasService: MisComprasService){
  }

  ngOnChanges(changes: SimpleChanges): void {
      if(changes['booleanoEnviado'].currentValue){ 
        this.booleanoEnviado = true;
        let email = this.usuarioService.obtenerEmailUsuarioLogeado();
        this.misComprasService.conseguirClienteComprado(email).subscribe(

          (res: any) => {

            if(res.status == "no ha comprado"){
              this.mensaje1 = "Bienvenido";
              this.mensaje2 = "vacio";

            }else if(res.status == "ha comprado"){

              this.mensaje2="Usted no es la primera vez que compra";
              this.mensaje1 = "vacio";

            }
          }
        );
      }
  }
}
