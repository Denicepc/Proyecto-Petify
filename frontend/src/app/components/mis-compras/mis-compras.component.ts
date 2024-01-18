import { Component } from '@angular/core';
import { MisCompras } from 'src/app/models/mis-compras';
import { UsuarioService } from 'src/app/services/usuario.service';
import { CarritoService } from 'src/app/services/carrito.service';
import { MisComprasService } from 'src/app/services/mis-compras.service';

@Component({
  selector: 'app-mis-compras',
  templateUrl: './mis-compras.component.html',
  styleUrls: ['./mis-compras.component.css']
})
export class MisComprasComponent {
  public compras: MisCompras[] = [];
  public emailUsuario: string = "null";

  constructor(public misComprasService: MisComprasService,
    public usuarioService: UsuarioService,
    public carritoService: CarritoService){}

  ngOnInit(): void {
    //this.obtenerComprasUsuario();
  }

  /*
  obtenerComprasUsuario(): void {
    this.emailUsuario = this.usuarioService.obtenerEmailUsuarioLogeado();
    this.misComprasService.obtenerComprasUsuario(this.emailUsuario).subscribe(
      (compras: MisCompras[]) => {
        this.compras = compras;
        console.log('Compras del usuario:', this.compras);
      },
      error => console.error('Error al obtener las compras:', error)
    );
  }*/
}
