import { Component } from '@angular/core';
import { MisCompras } from 'src/app/models/mis-compras';
import { PiensoService } from 'src/app/services/pienso.service';
import { MisComprasService } from 'src/app/services/mis-compras.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  public misCompras : Array<MisCompras> = new Array();
  constructor(public piensoService: PiensoService, public misComprasService: MisComprasService){

  }

  pintar(){
    this.misComprasService.obtenerCompras().subscribe(
      (res) =>{
        this.misCompras = res as MisCompras[];
        
      });
  }
}
