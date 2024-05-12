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

  totalCompras: number = 0;

  constructor(private misComprasService: MisComprasService, private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    const emailUsuario = this.usuarioService.obtenerEmailUsuarioLogeado();
    if (emailUsuario) {
      this.misComprasService.obtenerComprasUsuario(emailUsuario).subscribe(data => {
        this.totalCompras = data.totalCompras;  // Utiliza directamente el total del backend
      });
    }
  }


}
