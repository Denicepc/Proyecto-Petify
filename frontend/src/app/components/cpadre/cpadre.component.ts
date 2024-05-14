import { UsuarioService } from 'src/app/services/usuario.service';
import { Component } from '@angular/core';
import { MisCompras } from 'src/app/models/mis-compras';
import { MisComprasService } from 'src/app/services/mis-compras.service';

@Component({
  selector: 'app-cpadre',
  templateUrl: './cpadre.component.html',
  styleUrls: ['./cpadre.component.css']
})
export class CPadreComponent {

  public compras: MisCompras[] = [];
  public emailUsu: string = "";
  public NumeroCompras: number = 0;

  constructor(public misComprasService: MisComprasService, public usuarioService: UsuarioService){}

  recogerCompras(){
    this.emailUsu = this.usuarioService.emailUsuarioLogeado;

    this.misComprasService.obtenerComprasUsuario(this.emailUsu).subscribe(
      (res: any) =>{
        this.compras = res;

          if(this.compras.length > 0){
            this.NumeroCompras = this.compras.length;
          }
          else{
            this.NumeroCompras = 0;
          }

      });
  }




}
