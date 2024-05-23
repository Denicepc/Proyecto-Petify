import { Component, OnInit } from '@angular/core';
import { MisCompras } from 'src/app/models/mis-compras';
import { MisComprasService } from 'src/app/services/mis-compras.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit{

  public totalCompras: number = 0;
  public misCompras: MisCompras[] = [];
  public email : string = "";

  constructor(private misComprasService: MisComprasService, private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.cargarCompras();
  }

  cargarCompras() {
   this.email = this.usuarioService.emailUsuarioLogeado;

      this.misComprasService.obtenerComprasUsuario(this.email).subscribe(
        compras => {
          this.misCompras = compras;
          this.totalCompras = compras.reduce((acc, compra) => acc + compra.total, 0);
        },
        error => console.error('Error al obtener compras:', error)
      );

  }

}
