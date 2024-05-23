import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cpadre',
  templateUrl: './cpadre.component.html',
  styleUrls: ['./cpadre.component.css']
})
export class CPadreComponent {

  @Input() emailLogeado : string = "";
  public mensaje : string = "";


  // metodo mensaje hijo al padre
  recibirMensaje(mensaje : string){
    this.mensaje = mensaje;
  }

}
