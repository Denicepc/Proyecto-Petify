import { Component } from '@angular/core';
import { MisComprasService } from 'src/app/services/mis-compras.service';

@Component({
  selector: 'app-mostrar-componentes',
  templateUrl: './mostrar-componentes.component.html',
  styleUrls: ['./mostrar-componentes.component.css']
})
export class MostrarComponentesComponent {

  public compras : number = 0;

  constructor(public misComprasService: MisComprasService){}

  recogerCompras(){
    this.misComprasService.contarCompras().subscribe(
      (res : any) =>{
        this.compras = res.totalCompras;
      }
    )
  }


}
