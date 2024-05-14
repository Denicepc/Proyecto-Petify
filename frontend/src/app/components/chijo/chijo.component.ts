import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-chijo',
  templateUrl: './chijo.component.html',
  styleUrls: ['./chijo.component.css']
})
export class CHijoComponent {

  @Input() emailLogado: string = '';
  @Output() mandarMensaje: EventEmitter<string> = new EventEmitter();

  constructor(private usuarioService: UsuarioService) {}

  devolverMensaje(): void {
    this.usuarioService.eliminarCasiTodos(this.emailLogado).subscribe(
      res => {
        this.mandarMensaje.emit('Todos los usuarios excepto el usuario logado han sido eliminados.');
      },
      error => {
        console.error('Error al eliminar usuarios', error);
        this.mandarMensaje.emit('Hubo un error al intentar eliminar usuarios.');
      }
    );
  }
}
