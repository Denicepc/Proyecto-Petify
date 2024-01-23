import { Component, Input, SimpleChanges } from '@angular/core';
import { Carrito} from 'src/app/models/carrito';
import { CarritoService } from 'src/app/services/carrito.service';
import { MisCompras } from 'src/app/models/mis-compras';
import { MisComprasService } from 'src/app/services/mis-compras.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
  public carrito: Carrito = new Carrito;
  public array: any[] = [];
  @Input() emailUsuario : string;
  public carritoSubscription: Subscription;
  public pedido : MisCompras;

  constructor(public carritoService: CarritoService, public misComprasService: MisComprasService) {
    this.carritoSubscription = this.carritoService.carritoSeleccionado$.subscribe( //nos subscribimos al carrito en el constructor para ver cada vez que cambie
      carritoActualizado => {
        this.carrito = carritoActualizado;
      }
    );
    this.emailUsuario="";
    this.pedido = new MisCompras();
   }

   ngOnInit(): void {
    this.conseguirCarrito("null");
    
   }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['emailUsuario'].currentValue) {
      let email = changes['emailUsuario'].currentValue;
      console.log('Nuevo email de usuario carrito:', email);
      this.emailUsuario = email;
      this.conseguirCarrito(this.emailUsuario);
    }

  }
  conseguirCarrito(email: string){
    this.carritoService.obtenerCarrito(email).subscribe(
      (res: any) => { 
        this.carrito = res;
        this.array = this.carrito.productos;
        //this.carritoService.actualizarCarritoSeleccionado(this.carrito);
        console.log(this.array);
      },
      error => { console.error('Error: ', error); }
    );
  }

  eliminarProducto(nomProducto: string){
    this.carritoService.eliminarProducto(nomProducto, this.emailUsuario).subscribe(
      (res: any) => {
        console.log(res);
        this.carritoService.actualizarCarritoSeleccionado(res);
      },
      error => { console.error('Error: ', error); })
  }
  
  sumarProducto(nomProducto: string){
    this.carritoService.sumarProducto(nomProducto, this.emailUsuario).subscribe(
      (res: any) => {
        console.log(res);
        if(res.status !== "La cantidad a sumar supera el stock disponible")
          this.carritoService.actualizarCarritoSeleccionado(res);
        else alert("La cantidad a sumar supera el stock disponible");
      },
      error => { console.error('Error: ', error); })
  }

  restarProducto(nomProducto: string){
    this.carritoService.restarProducto(nomProducto, this.emailUsuario).subscribe(
      (res: any) => {
        console.log(res);
        if(res.status !== "La cantidad del producto es uno")
          this.carritoService.actualizarCarritoSeleccionado(res);
        else alert("El producto solo tiene una unidad, pruebe a eliminar")
      },
      error => { console.error('Error: ', error); })
  }

  comprar() {
    console.log('Carrito a enviar:', this.carrito);
    /*if (this.emailUsuario == "null" || this.emailUsuario == "") {
      alert("Debe iniciar sesión para poder comprar");
    } else {
      this.misComprasService.crearCompra(this.carrito).subscribe(
        (response: any) => {
          console.log('Compra realizada con éxito:', response);
          //actualizamos mis compras
          this.misComprasService.agregarCompraIndividual(response);
          alert("Compra realizada correctamente");
          // Vaciamos el carrito cuando ya se ha mandado este a mis compras
          this.carritoService.vaciarCarrito(this.emailUsuario).subscribe(
            (res: any) => {
              if (res.status !== 'No hay productos en el carrito') {
                console.log('Carrito vaciado con éxito', res);
                this.carritoService.actualizarCarritoSeleccionado(res);
              } else console.log("No hay productos en el carrito");
            },
            (error) => {
              console.error('Error al vaciar el carrito:', error);
            }
          );
        },
        (error) => {
          console.error('Error al realizar la compra:', error);
          alert('Error al realizar la compra. Inténtelo de nuevo.');
        }
      );
    }*/

    //ejercicio 1
    this.misComprasService.eliminarProducto(this.carrito).subscribe(
      (res) =>{
        console.log(res);  
      })
  }


  ngOnDestroy() {
    if (this.carritoSubscription) {
      this.carritoSubscription.unsubscribe();
    }
  }

}
