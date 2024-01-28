import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-e10hijo',
  templateUrl: './e10hijo.component.html',
  styleUrls: ['./e10hijo.component.css']
})
export class E10hijoComponent {
  @Input() emailLogeadoo: string = "";
  @Output() mandarMensaje: EventEmitter<string> = new EventEmitter();

  constructor(public usuarioService: UsuarioService){
  
  }

  devolverMensaje(){
    this.usuarioService.eliminarCasiTodos(this.emailLogeadoo).subscribe(
      res =>{
        console.log(res);
      }
    )
  }
}
