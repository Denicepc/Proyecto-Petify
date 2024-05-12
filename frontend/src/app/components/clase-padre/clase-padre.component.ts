import { Component, OnInit } from '@angular/core';
import { MisComprasService } from 'src/app/services/mis-compras.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { MisCompras } from 'src/app/models/mis-compras';

@Component({
  selector: 'app-clase-padre',
  templateUrl: './clase-padre.component.html',
  styleUrls: ['./clase-padre.component.css']
})
export class ClasePadreComponent implements OnInit{

  public totalCompras: number = 0; //contamos las compras del usuario

  constructor(private misComprasService: MisComprasService, private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    const emailUsuario = this.usuarioService.obtenerEmailUsuarioLogeado();
    if (emailUsuario) {
      this.misComprasService.obtenerComprasUsuario(emailUsuario).subscribe(compras => {
        this.totalCompras = compras.reduce((acc, compra) => acc + compra.total, 0);
        console.log("Total compras calculado:", this.totalCompras);
      });
    } else {
      console.log("No hay email de usuario logueado.");
    }
  }


}
