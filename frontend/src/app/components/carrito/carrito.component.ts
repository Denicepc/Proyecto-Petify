import { Component, Input, SimpleChanges } from '@angular/core';
import { Carrito} from 'src/app/models/carrito';
import { CarritoService } from 'src/app/services/carrito.service';
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

  constructor(public carritoService: CarritoService) {
    this.carritoSubscription = this.carritoService.carritoSeleccionado$.subscribe( //nos subscribimos al carrito en el constructor para ver cada vez que cambie
      carritoActualizado => {
        this.carrito = carritoActualizado;
      }
    );
    this.emailUsuario="";
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

  comprar(){
    //tenemos que vaciar el carrito una vez pase la información a mis compras
  }

  ngOnDestroy() {
    if (this.carritoSubscription) {
      this.carritoSubscription.unsubscribe();
    }
  }

}
