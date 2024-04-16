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

  //34)Nombre del cliente que mas productos ha comprado de entre todas sus compras y el total en € de entre todas sus compras.

<<<<<<< HEAD
  public max: number = 0;  //almacena la cantidad máxima de productos comprados por un usuario
  public nom: string = "";  //para guardar el nombre del usuario que ha comprado el mayor número de productos
  public total: number = 0;  //para sumar el total en euros gastado por el usuario que más productos ha comprado
=======
  public max: number=0; //almacena la cantidad máxima de productos comprados por un solo usuario.
  public nom: string="";  //guarda el nombre del usuario que ha comprado más productos.
  public total: number=0;  //representa el valor total en euros de todas las compras hechas por el usuario con el máximo de productos comprados
>>>>>>> 08c1a010a98625ca0ae43368c58e70ca94d99ff7

  constructor(public misComprasService: MisComprasService, public usuarioService: UsuarioService){

    let contador = 0;
    let total = 0;
    let compras: MisCompras[] = [];
    let usuarios: Usuario[] = [];

<<<<<<< HEAD
    this.usuarioService.getUsuarios().subscribe( //te metes dentro de los usuarios
      (res:any) =>{
=======
    this.usuarioService.getUsuarios().subscribe( //peticion para obtener todos los usuarios a través del UsuarioService
      (res:any) =>{ //res es el que obtiene un array de objetos de todos los usuarios
>>>>>>> 08c1a010a98625ca0ae43368c58e70ca94d99ff7

        usuarios = res; //guardas en usuarios todos los usuarios registrados
        for(let user of usuarios){ //recorres los usuarios y dentro de cada usuario, sus compras
          
          total=0;
          contador=0;
          
          this.misComprasService.obtenerComprasUsuario(user.email).subscribe( //y ahora de todos los usuarios recorres todas las compras de todos los usuarios....
            
            (res:any) =>{
              compras=res; //guardas en compras todas las compras de los usuarios
              compras.forEach(compra => {

                compra.productos.forEach(produ=>{ //y de cada compra, los productos que has comprado en ella
                  contador++;
                })

                total += compra.total;

              });
            }
          )

          setTimeout(() => { //esto se hace para que cuando se termine de ejecutar todo el bloque de codigo se ejecute como ultima opcion esto

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