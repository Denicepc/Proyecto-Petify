import { Component, OnInit } from '@angular/core';
import { MisCompras } from 'src/app/models/mis-compras';
import { MisComprasService } from 'src/app/services/mis-compras.service';

@Component({
  selector: 'app-compras-sistema',
  templateUrl: './compras-sistema.component.html',
  styleUrls: ['./compras-sistema.component.css']
})
export class ComprasSistemaComponent implements OnInit{

  public todasCompras: MisCompras[] =[];
  public totalCompras: number = 0;

  constructor(public misComprasService: MisComprasService){}

  ngOnInit(): void {
    this.recogerCompras();
  }

  recogerCompras(){
    this.misComprasService.obtenerCompras().subscribe(
      (res : any) =>{
        this.todasCompras = res;
        this.totalCompras = this.todasCompras.length;
      }
    )
  }


}
