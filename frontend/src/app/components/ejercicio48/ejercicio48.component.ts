import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { MisCompras } from 'src/app/models/mis-compras';
import { MisComprasService } from 'src/app/services/mis-compras.service';
import { Usuario } from 'src/app/models/usuario';

/*48) Crear un componente con un botón que cada vez que se le da al botón va cambiando de un cliente a otro
muestra cada cliente con su pedido y el total en € de cada pedido.*/

@Component({
  selector: 'app-ejercicio48',
  templateUrl: './ejercicio48.component.html',
  styleUrls: ['./ejercicio48.component.css']
})
export class Ejercicio48Component {

  //atributos necesarios
  public clientes : Usuario[] = []; //almacena los clientes
  public cliente : Usuario = new Usuario(); //un solo cliente
  public compras : MisCompras[] = []; //compras de cada cliente
  public cont: number = 0; //esto se utiliza para pasar al siguiente cliente

  constructor(public misComprasService: MisComprasService, public usuarioService: UsuarioService){

  }

  mostrar(){

    this.cliente = this.clientes[this.cont];

    this.conseguirCompraCliente(this.cliente.email);

    this.cont++;

  }

  conseguirCliente(email: string){ //metodo en el que consigues al cliente
    this.usuarioService.getUsuarios().subscribe(
      (res: any) =>{
        this.clientes = res;
      });
  }

  conseguirCompraCliente(email: string){ //metodo que almacena las compras del cliente (por parametro el email)
    this.misComprasService.obtenerComprasUsuario(email).subscribe(
      (res: any) =>{
        this.compras = res;
      });
  }










}
