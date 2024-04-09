import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service'; //obtener los datos de los usuarios
import { MisComprasService } from 'src/app/services/mis-compras.service'; //obtener las compras realizadas por los usuarios
import { Usuario } from 'src/app/models/usuario'; //para trabajar de manera mas comoda
import { MisCompras } from 'src/app/models/mis-compras'; //para trabajar de manera mas comoda

@Component({
  selector: 'app-ejercicio34',
  templateUrl: './ejercicio34.component.html',
  styleUrls: ['./ejercicio34.component.css']
})
export class Ejercicio34Component {

  //34) Nombre del cliente que mas productos ha comprado de entre todas sus compras y el total en € de entre todas sus compras.

  public max: number = 0;  //almacena la cantidad máxima de productos comprados por un usuario
  public nom: string = "";  //para guardar el nombre del usuario que ha comprado el mayor número de productos
  public total: number = 0;  //para sumar el total en euros gastado por el usuario que más productos ha comprado

  constructor(public misComprasService: MisComprasService, public usuarioService: UsuarioService){

    let contador = 0;
    let total = 0;
    let compras: MisCompras[] = [];
    let usuarios: Usuario[] = [];

    this.usuarioService.getUsuarios().subscribe( //te metes dentro de los usuarios
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
