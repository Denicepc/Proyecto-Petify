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
      this.emailUsuario = email;
      this.conseguirCarrito(this.emailUsuario);
    }
  }


  conseguirCarrito(email: string){
    this.carritoService.obtenerCarrito(email).subscribe(
      (res: any) => {
        this.carrito = res;
        this.array = this.carrito.productos;
      },
      error => { console.error('Error: ', error); }
    );
  }


  //eliminas el producto completamente del carrito
  eliminarProducto(nomProducto: string){
    this.carritoService.eliminarProducto(nomProducto, this.emailUsuario).subscribe(
      (res: any) => {
        this.carritoService.actualizarCarritoSeleccionado(res);
      },
      error => { console.error('Error: ', error); })
  }


  //metodo que suma productos del carrito (EL +)
  sumarProducto(nomProducto: string){
    this.carritoService.sumarProducto(nomProducto, this.emailUsuario).subscribe(
      (res: any) => {
        if(res.status !== "La cantidad a sumar supera el stock disponible")
          this.carritoService.actualizarCarritoSeleccionado(res);
        else alert("La cantidad a sumar supera el stock disponible");
      },
      error => { console.error('Error: ', error); })
  }

  //metodo que quita productos del carrito (EL -)
  restarProducto(nomProducto: string){
    this.carritoService.restarProducto(nomProducto, this.emailUsuario).subscribe(
      (res: any) => {
        if(res.status !== "La cantidad del producto es uno")
          this.carritoService.actualizarCarritoSeleccionado(res);
        else alert("El producto solo tiene una unidad, pruebe a eliminar")
      },
      error => { console.error('Error: ', error); })
  }




  //-------------------------------- EJERCICIO 81 TERMINADO -----------------------------------
  comprar() {
    console.log('Carrito a enviar:', this.carrito);
    if (this.emailUsuario == "null" || this.emailUsuario == "") {
      alert("Debe iniciar sesión para poder comprar");
    } else {

      //verificar si el número de productos distintos es par
      const numeroProductosDistintos = this.carrito.productos.length;

      if (numeroProductosDistintos % 2 === 0) {
        //número de productos es par, proceder con la compra
        this.misComprasService.crearCompra(this.carrito).subscribe(
          (response: any) => {
            this.misComprasService.agregarCompraIndividual(response);
            alert("Compra realizada correctamente");
            this.carritoService.vaciarCarrito(this.emailUsuario).subscribe(
              (res: any) => {
                if (res.status !== 'No hay productos en el carrito') {
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
      } else {
        // Número de productos es impar, no proceder con la compra
        alert("No se puede realizar la compra porque el número de productos distintos en el carrito es impar.");
      }
    }
  }




  ngOnDestroy() {
    if (this.carritoSubscription) {
      this.carritoSubscription.unsubscribe();
    }
  }

}
