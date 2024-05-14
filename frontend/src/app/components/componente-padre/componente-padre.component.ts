import { Component, OnInit } from '@angular/core';
import { MisCompras } from 'src/app/models/mis-compras';
import { MisComprasService } from 'src/app/services/mis-compras.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-componente-padre',
  templateUrl: './componente-padre.component.html',
  styleUrls: ['./componente-padre.component.css']
})
export class ComponentePadreComponent implements OnInit{

  public misCompras: MisCompras[] = [];

  constructor(private misComprasService: MisComprasService, private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.cargarComprasUsuario();
  }

  cargarComprasUsuario(): void {
    const emailUsuario = this.usuarioService.obtenerEmailUsuarioLogeado();
    this.misComprasService.obtenerComprasUsuario(emailUsuario).subscribe(
      (compras: MisCompras[]) => {
        this.misCompras = compras;
      },
      error => {
        console.error('Error al obtener las compras del usuario', error);
      }
    );
  }


}
