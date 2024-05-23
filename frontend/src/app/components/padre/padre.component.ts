import { Component} from '@angular/core';
import { MisCompras } from 'src/app/models/mis-compras';
import { MisComprasService } from 'src/app/services/mis-compras.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent{

  public email: string = "";
  public compras: MisCompras[] = []; // Usando tipo any para las compras
  public totalCompras: number = 0; // Ahora será el número total de compras

  constructor(public misComprasService: MisComprasService, public usuarioService: UsuarioService) {}

  recogerCompras() {
    this.email = this.usuarioService.emailUsuarioLogeado;
      this.misComprasService.obtenerComprasUsuario(this.email).subscribe(
        (res: MisCompras[]) => {
          this.compras = res; //asumiendo que res es un arreglo directamente
          this.totalCompras = this.compras.length; //contar el número de compras
        }
      );

  }

}
