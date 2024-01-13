import { Component, Input, SimpleChanges } from '@angular/core';
import { Carrito} from 'src/app/models/carrito';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
  carrito: Carrito = new Carrito;
  @Input() idUsuario : any = null;

  constructor(private carritoService: CarritoService) { }

  ngOnChanges(changes: SimpleChanges): void {
    let id = changes['idUsuario'].currentValue;
    console.log('Nuevo idUsuario carrito:', id);
    this.conseguirCarrito(this.idUsuario);
    
  }
  conseguirCarrito(idUsuario: string){

    this.carritoService.obtenerCarrito(idUsuario).subscribe(
      (res: Carrito) => { 
        this.carrito = res;
        console.log(this.carrito, this.carrito.total);
        this.mostrarTotal(this.carrito.total); 
      },
      error => { console.error('Error: ', error); }
    );
  }
  
  mostrarTotal(total: any){
    let p = document.getElementById("ptotal");
    if (p != null){
      p.innerHTML = "Total: " + total;
    }
  }

}
