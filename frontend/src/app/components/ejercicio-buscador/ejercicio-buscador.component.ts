import { Component } from '@angular/core';
import { MisComprasService } from 'src/app/services/mis-compras.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-ejercicio-buscador',
  templateUrl: './ejercicio-buscador.component.html',
  styleUrls: ['./ejercicio-buscador.component.css']
})
export class EjercicioBuscadorComponent {
  public nombreProducto: string = "";
  public cantidadCompras: number | null = null;
  public emailUsuario: string = "";

  constructor(public misComprasService: MisComprasService, public usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.emailUsuario = this.usuarioService.obtenerEmailUsuarioLogeado();
  }

  buscarProducto(): void {
    if (this.nombreProducto && this.emailUsuario) {
      this.misComprasService.contarComprasProducto(this.emailUsuario, this.nombreProducto).subscribe(
        (res: { totalCantidad: number }) => {
          this.cantidadCompras = res.totalCantidad;
        },
        error => {
          console.error('Error al buscar producto', error);
          this.cantidadCompras = null;
        }
      );
    }
  }

}
