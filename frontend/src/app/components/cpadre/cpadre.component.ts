import { Component, OnInit } from '@angular/core';
import { MisComprasService } from 'src/app/services/mis-compras.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-cpadre',
  templateUrl: './cpadre.component.html',
  styleUrls: ['./cpadre.component.css']
})
export class CPadreComponent implements OnInit {

  numeroDeCompras: number = 0;

  constructor(private usuarioService: UsuarioService, private misComprasService: MisComprasService) {}

  ngOnInit(): void {
    const email = this.usuarioService.obtenerEmailUsuarioLogeado();
    this.misComprasService.obtenerComprasUsuario(email).subscribe(compras => {
      this.numeroDeCompras = compras.length;
    });
  }

}
