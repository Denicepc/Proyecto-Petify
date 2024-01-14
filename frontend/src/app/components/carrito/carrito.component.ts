import { Component, Input, SimpleChanges } from '@angular/core';
import { Carrito} from 'src/app/models/carrito';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
  public carrito: Carrito = new Carrito;
  @Input() emailUsuario : string;

  constructor(public carritoService: CarritoService) {
    this.emailUsuario="";
   }

   ngOnInit(): void {
    this.conseguirCarrito("null");
   }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['emailUsuario'].currentValue || changes['this.carrito'].currentValue) {
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
        this.carritoService.carritoSeleccionado = res;
        console.log(this.carrito);
      },
      error => { console.error('Error: ', error); }
    );
  }
  

}
