import { Component } from '@angular/core';
import { MisComprasService } from 'src/app/services/mis-compras.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-ejercicio15',
  templateUrl: './ejercicio15.component.html',
  styleUrls: ['./ejercicio15.component.css']
})
export class Ejercicio15Component {

  public productoBuscado: string = '';
  public numeroDeProductos: number = 0;
  public emailUsuario: string = '';

  constructor(
    private misComprasService: MisComprasService,private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.emailUsuario = this.usuarioService.obtenerEmailUsuarioLogeado();
  }

  buscarProducto(): void {
    if (this.productoBuscado.trim() === '') {
      this.numeroDeProductos = 0;
      return;
    }

    this.misComprasService.obtenerNumeroProductosUsuario(this.emailUsuario, this.productoBuscado).subscribe(
      (res: { totalProductos: number }) => {
        this.numeroDeProductos = res.totalProductos;
      },
      error => {
        console.error('Error al obtener el número de productos', error);
        this.numeroDeProductos = 0;
      }
    );
  }

}
