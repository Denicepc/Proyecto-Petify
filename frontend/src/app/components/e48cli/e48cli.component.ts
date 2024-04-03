import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { MisComprasService } from 'src/app/services/mis-compras.service';
import { Usuario } from 'src/app/models/usuario';
import { MisCompras } from 'src/app/models/mis-compras';

@Component({
  selector: 'app-e48cli',
  templateUrl: './e48cli.component.html',
  styleUrls: ['./e48cli.component.css']
})
export class E48cliComponent {
  public clientes : Usuario[] = []; //almacena los datos del usuario obtenidos desde el servicio
  public cliente: Usuario = new Usuario();  //representa el cliente
  public compras: MisCompras[] = []; //contiene las compras asociadas al cliente
  public cont : number = 0; //servirá para navegar a través de los diferentes clientes en el arrelgo clientes

  constructor(public usuarioService: UsuarioService, public misComprasService: MisComprasService){
    this.conseguirClientes();
  }
    

  mostrar(){  
    
      this.cliente = this.clientes[this.cont];

      this.conseguirCompraCliente(this.cliente.email);

      this.cont++;


  }

  conseguirClientes(){
    this.usuarioService.getUsuarios().subscribe(
      (res:any) =>{
        this.clientes = res;
      }
    )
  }

  conseguirCompraCliente(email: string){
      this.misComprasService.obtenerComprasUsuario(email).subscribe(
        (res:any)=>{
          this.compras = res;

    })
  }
}
