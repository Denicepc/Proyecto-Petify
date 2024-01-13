import { Component, EventEmitter, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-latder',
  templateUrl: './latder.component.html',
  styleUrls: ['./latder.component.css']
})
export class LatderComponent {
  public idUsuario : any = null

  recogerId(idUsuario : any){
    this.idUsuario=idUsuario;
  }

  ngOnChanges(changes: SimpleChanges): void {
    let id = changes['idUsuario'].currentValue;
    this.idUsuario = id;
  }
}
