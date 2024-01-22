import { Component } from '@angular/core';
import { MisCompras } from 'src/app/models/mis-compras';
import { UsuarioService } from 'src/app/services/usuario.service';
import { MisComprasService } from 'src/app/services/mis-compras.service';

@Component({
  selector: 'app-mis-compras',
  templateUrl: './mis-compras.component.html',
  styleUrls: ['./mis-compras.component.css']
})
export class MisComprasComponent {
  public misCompras: MisCompras[] = [];
  public emailUsuario: string = "null";

  constructor(public misComprasService: MisComprasService,
    public usuarioService: UsuarioService){}

  ngOnInit(): void {
    this.emailUsuario = this.usuarioService.obtenerEmailUsuarioLogeado();
    
    this.misComprasService.misComprasSeleccionadas$.subscribe(
      compras => {
        this.misCompras = compras;
        console.log("MIS COMPRAS: ", compras);
      },
      error => console.error('Error al obtener compras', error)
    );
  }
}
