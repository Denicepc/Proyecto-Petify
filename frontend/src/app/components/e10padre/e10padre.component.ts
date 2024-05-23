import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-e10padre',
  templateUrl: './e10padre.component.html',
  styleUrls: ['./e10padre.component.css']
})
export class E10padreComponent {

  @Input()  emailLogeado : string = "";
  public mensaje : string = "";

  recibirMensaje(mensaje: string){
    this.mensaje = mensaje;
  }


}
