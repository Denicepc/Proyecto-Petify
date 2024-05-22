import { Component } from '@angular/core';
import { MisComprasService } from 'src/app/services/mis-compras.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-ejercicio79',
  templateUrl: './ejercicio79.component.html',
  styleUrls: ['./ejercicio79.component.css']
})
export class Ejercicio79Component {

  productoMasCaro: any;

  constructor(private misComprasService: MisComprasService, private usuarioService: UsuarioService){}

  //obtener el producto mas caro de un usuario

  mostrarProductoMasCaro(): void {
    const email = this.usuarioService.obtenerEmailUsuarioLogeado();
    this.misComprasService.obtenerProductoMasCaro(email).subscribe(
      producto => {
        console.log(producto); //verifica qué llega exactamente
        this.productoMasCaro = producto;
      },
      error => {
        console.error('Error al obtener el producto más caro', error);
      }
    );
  }


  /*------------- EJERCICIO 79 ---------------------------
  obtenerProductoMasCaro(emailUsuario: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/productoMasCaro?emailUsuario=${emailUsuario}`);
  }
  */

}


