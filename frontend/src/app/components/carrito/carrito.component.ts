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
    this.carritoSubscription = this.carritoService.carritoSeleccionado$.subscribe(
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
  
  ngOnDestroy() {
    if (this.carritoSubscription) {
      this.carritoSubscription.unsubscribe();
    }
  }

}
