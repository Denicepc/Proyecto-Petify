import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { MisCompras } from 'src/app/models/mis-compras';
import { MisComprasService } from 'src/app/services/mis-compras.service';

@Component({
  selector: 'app-ejericicio34int2',
  templateUrl: './ejericicio34int2.component.html',
  styleUrls: ['./ejericicio34int2.component.css']
})
export class Ejericicio34int2Component {

  public max: number=0;
  public nombre: string="";
  public total: number=0;
  
  constructor(public misComprasService: MisComprasService, public usuarioService: UsuarioService){
    
    let contador=0;
    let total=0;
    let compras: MisCompras[]=[];
    let usuarios: Usuario[]=[];

    this.usuarioService.getUsuarios().subscribe(

    (res:any) =>{ //en el res ya tienes guardado los usuarios
      
      usuarios=res; //guardas dentro todos los usuarios
      for(let user of usuarios){
        
        total=0;
        contador=0;
        
        //recorro las compras de misCompras
        this.misComprasService.obtenerComprasUsuario(user.email).subscribe(

            (res:any)=>{

              compras=res; 
              compras.forEach(compra =>{

                compra.productos.forEach(produ=>{
                  contador++;
                })

                total += compra.total;

              });
            }  
        )

        setTimeout(() => {
        
          if(contador > this.max){
              this.max=contador;
              this.nombre=user.nombreCompleto;
              this.total=total;
          }

        }, 200);


      }
      }
    );
  }
}