import { Component } from '@angular/core';
import { MisCompras } from 'src/app/models/mis-compras';
import { UsuarioService } from 'src/app/services/usuario.service';
import { MisComprasService } from 'src/app/services/mis-compras.service';

@Component({
  selector: 'app-componente-padre',
  templateUrl: './componente-padre.component.html',
  styleUrls: ['./componente-padre.component.css']
})
export class ComponentePadreComponent {
  public totalCompras: number = 0; //varible donde almacenaremos el total
  public misCompras: MisCompras[] = [];
  public emailUsuario: string = "null";

  public cont : number = 0; //contador
  public mensajeFinal : String = "";

  constructor(public misComprasService: MisComprasService,
  public usuarioService: UsuarioService){}

  ngOnInit(): void {

    this.emailUsuario = this.usuarioService.obtenerEmailUsuarioLogeado();

    this.misComprasService.misComprasSeleccionadas$.subscribe(
      compras => {

        this.misCompras = compras;

        //calculas el totoal de la compra
        this.totalCompras = 0;

        for (let compra of compras) {
          this.totalCompras += Number(compra.total);
        }
        console.log("MIS COMPRAS: ", compras);
      },
      error => console.error('Error al obtener compras', error)
    );

  }



  //metodo calcularTotal
  calcularTotalCompras(): void {
    this.totalCompras = 0; //contador
    this.misCompras.forEach(compra => {

      this.totalCompras += Number(compra.total);

    });
  }

  en(mensaje:String){

    this.mensajeFinal = mensaje;

  }


}
