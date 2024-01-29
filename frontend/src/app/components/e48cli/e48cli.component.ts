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
  public clientes : Usuario[] = [];
  public cliente: Usuario = new Usuario();
  public compras: MisCompras[] = [];
  public cont : number = 0;

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
