import { Component, Input } from '@angular/core';
import { Carrito } from 'src/app/models/carrito';
import { Pienso } from 'src/app/models/pienso';
import { CarritoService } from 'src/app/services/carrito.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
  export class ProductoComponent {
    @Input() piensoEnviado: Pienso;
    public emailUsuario : string;
    public carrito: Carrito = new Carrito();

    constructor(public carritoService: CarritoService, public usuarioService: UsuarioService) {
      this.piensoEnviado = new Pienso();
      this.emailUsuario = "null";
    }
  
    agregarAlCarrito(cantidad: any): void {
      this.emailUsuario = this.usuarioService.obtenerEmailUsuarioLogeado();
      let unidades = parseInt(cantidad);
      
      this.carritoService.obtenerCarrito(this.emailUsuario).subscribe(
        (res:any) =>{
          this.carrito = res;
        }
      )

        
      setTimeout( () =>{
        if(this.carrito.productos.length >= 6){
          alert("Carrito lleno");
        }else{
          let total= 0;
          this.carrito.productos.forEach( p =>{
            total += p.cantidad;
            if(total>=6)
              alert("Carrito lleno");
          })
          
          if((total + unidades) > 6 && total < 6){
            alert("Carrito lleno")
          }
          
          if(total < 6 && ((total + unidades) <=6)){
            this.carritoService.agregarAlCarrito({
              nombreProd: this.piensoEnviado.nombre,
              cantidad: unidades,
              precio: this.piensoEnviado.precio,
              stock: this.piensoEnviado.stock
            }, this.emailUsuario).subscribe(
              (res: any) => {
                if(res.status !== "La cantidad a agregar supera el stock disponible")
                  this.carritoService.actualizarCarritoSeleccionado(res); //actualizamos el carrito cuando agregamos un producto
                else alert("EL PRODUCTO ESTA FUERA DE STOCK")
              },
              error => {
                console.error('Error al agregar producto al carrito', error);
              }
            );
          }
        }


      },200)



    }
}
