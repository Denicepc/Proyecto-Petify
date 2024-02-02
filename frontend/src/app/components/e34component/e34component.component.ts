import { Component } from '@angular/core';
import { MisCompras } from 'src/app/models/mis-compras';
import { Usuario } from 'src/app/models/usuario';
import { MisComprasService } from 'src/app/services/mis-compras.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-e34component',
  templateUrl: './e34component.component.html',
  styleUrls: ['./e34component.component.css']
})
export class E34componentComponent {
  public max : number = 0;
  public nom: string = "";
  public total: number = 0;

  constructor(public misComprasService: MisComprasService, public usuarioService: UsuarioService){
    let contador = 0;
    let total = 0;
    let compras: MisCompras[] = [];
    let usuarios: Usuario[] = [];
    this.usuarioService.getUsuarios().subscribe(
      (res:any) =>{
        usuarios = res;
        for(let user of usuarios){
          total = 0;
          contador=0;
          this.misComprasService.obtenerComprasUsuario(user.email).subscribe(
            (res:any) =>{
              compras = res;
              compras.forEach(compra=>{
                compra.productos.forEach(produ=>{
                  contador++;
                })
                total += compra.total;
              })
            }
          )
          setTimeout(() => {
            if(contador > this.max)
            {  
              this.max = contador;
              this.nom = user.nombreCompleto;
              this.total =  total;
            }
          }, 200);
        }


      }
    )



  }

}
