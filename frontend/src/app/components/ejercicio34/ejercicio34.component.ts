import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service'; //Los metodos del usuarioService
import { MisComprasService } from 'src/app/services/mis-compras.service';
import { Usuario } from 'src/app/models/usuario'; //Necesitas el usuario
import { MisCompras } from 'src/app/models/mis-compras'; //Todo el apartado de MisCompras

@Component({
  selector: 'app-ejercicio34',
  templateUrl: './ejercicio34.component.html',
  styleUrls: ['./ejercicio34.component.css']
})
export class Ejercicio34Component {

  //34) Nombre del cliente que mas productos ha comprado de entre todas sus compras y el total en € de entre todas sus compras.

  public max: number=0; // Almacena la cantidad máxima de productos comprados por un solo usuario.
  public nom: string="";  // Guarda el nombre del usuario que ha comprado más productos.
  public total: number=0;  // Representa el valor total en euros de todas las compras hechas por el usuario con el máximo de productos comprados

  constructor(public misComprasService: MisComprasService, public usuarioService: UsuarioService){

    let contador = 0;
    let total = 0;
    let compras: MisCompras[]=[];
    let usuarios: Usuario[]=[];

    this.usuarioService.getUsuarios().subscribe(
      (res:any) =>{

        usuarios = res;
        for(let user of usuarios){ //recorres los usuarios y dentro de cada usuario, sus compras
          total=0;
          contador=0;

          this.misComprasService.obtenerComprasUsuario(user.email).subscribe(

            (res:any) =>{
              compras=res;
              compras.forEach(compra => {

                compra.productos.forEach(produ=>{
                  contador++;
                })

                total += compra.total;

              });
            }
          )

          setTimeout(() => {

            if(contador > this.max){ //si el contador es mayor que max
              this.max=contador;
              this.nom=user.nombreCompleto;
              this.total=total;
            }

          }, 200);

        }

      }
    );
  }
}
