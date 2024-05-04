import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MisComprasService } from 'src/app/services/mis-compras.service';

@Component({
  selector: 'app-componente-hijo',
  templateUrl: './componente-hijo.component.html',
  styleUrls: ['./componente-hijo.component.css']
})
export class ComponenteHijoComponent implements OnChanges {

  @Input() productName: string = '';
  @Input() userEmail: string = '';
  totalProductos : number = 0;


  constructor(private misComprasService: MisComprasService) {}


  ngOnChanges(changes: SimpleChanges): void {
    // Acceder a las propiedades usando la notación de corchetes
    if (changes['productName'] && this.productName && this.userEmail) {
      this.misComprasService.obtenerTotalProductosPorNombreYUsuario(this.productName, this.userEmail).subscribe(
        total => this.totalProductos = total,
        error => console.error('Error fetching total products', error)
      );
    }
  }
}
