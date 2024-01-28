import { Component } from '@angular/core';
import { MisCompras } from 'src/app/models/mis-compras';
import { UsuarioService } from 'src/app/services/usuario.service';
import { MisComprasService } from 'src/app/services/mis-compras.service';

@Component({
  selector: 'app-mis-compras',
  templateUrl: './mis-compras.component.html',
  styleUrls: ['./mis-compras.component.css']
})
export class MisComprasComponent {
  
  public totalCompras: number = 0; //varible donde almacenaremos el total
  public misCompras: MisCompras[] = [];
  public emailUsuario: string = "null";
  public productoCaro: string = "";
  public comprasGeneral: MisCompras[] = [];
  public arrayEmails: string[] = [];
  public arrayClientes: string[] = [];
  //ejercicio 12
  public arrayProductos: string[] = [];

  constructor(public misComprasService: MisComprasService,
    public usuarioService: UsuarioService){}

  ngOnInit(): void {
    this.emailUsuario = this.usuarioService.obtenerEmailUsuarioLogeado();
      
    //ejercicio 12
    this.misComprasService.misComprasSeleccionadas$.subscribe( 
      compras => {
        this.misCompras = compras;

        this.misCompras.forEach( compra => {
          compra.productos.forEach( producto =>{
            if(!this.arrayProductos.includes(producto.nombreProd))
              this.arrayProductos.push(producto.nombreProd);
          })
        } )


        //calculas el totoal de la comrpa
        this.totalCompras = 0;
        
        for (let compra of compras) {
          this.totalCompras += Number(compra.total);
        }        
        console.log("MIS COMPRAS: ", compras);
      },
      error => console.error('Error al obtener compras', error)
    );
  }

  //metodo calcularTotal
  calcularTotalCompras(): void {
    this.totalCompras = 0; //contador
    this.misCompras.forEach(compra => {  
      this.totalCompras += Number(compra.total);
    });
  }

  //ejercicio 75
  buscarClientesCaro(){
    
    this.misComprasService.productoMasCaro().subscribe(
      (res: any) => {
        this.productoCaro = res;
      }
      
    )

    setTimeout( () =>{
      this.misComprasService.obtenerCompras().subscribe(
        (res: any) =>{
          this.comprasGeneral = res;
          }
        )

    }, 500)


    setTimeout( () =>{
      this.comprasGeneral.forEach( compra =>{
        compra.productos.forEach(produc =>{
          if(produc.nombreProd ==  this.productoCaro)
              if(!this.arrayEmails.includes(compra.emailUsuario))
                this.arrayEmails.push(compra.emailUsuario);
        })
      } )
    },800)


    setTimeout( () =>{

      this.arrayEmails.forEach( email =>{
        this.usuarioService.obtenerUsuario2(email).subscribe(
          (res: any) =>{
              if(!this.arrayClientes.includes(res)){
                this.arrayClientes.push(res);
                console.log(res);
              }
            }
          )
          })

    }, 1000)

    


  }
  

}
