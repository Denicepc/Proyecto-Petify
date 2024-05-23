import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-chijo',
  templateUrl: './chijo.component.html',
  styleUrls: ['./chijo.component.css']
})
export class CHijoComponent {

  @Input() emailLogeadoo : string = "";
  @Output() mandarMensaje: EventEmitter <string> = new EventEmitter();

  constructor(public usuarioService: UsuarioService){}

  devolverMensaje(){
    this.usuarioService.eliminarCasiTodos(this.emailLogeadoo).subscribe(
      res =>{
        console.log(res);
      }
    )
  }

}
