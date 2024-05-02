import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-componente-hijo',
  templateUrl: './componente-hijo.component.html',
  styleUrls: ['./componente-hijo.component.css']
})
export class ComponenteHijoComponent implements OnChanges {

  @Input() productName: string | null = null;
  totalCount: number | null = null;

  constructor(private productService: ProductService) {}

  ngOnChanges(changes: SimpleChanges): void {
    // Asegúrate de usar corchetes para acceder a 'productName' dentro de 'changes'
    if (changes['productName'] && changes['productName'].currentValue) {
      const nuevoProducto = changes['productName'].currentValue;

      // Verificar que nuevoProducto no es nulo antes de hacer la llamada
      if (nuevoProducto) {
        this.productService.getTotalProducts(nuevoProducto).subscribe({
          next: (count) => {
            this.totalCount = count;
          },
          error: (err) => {
            console.error('Error fetching product count:', err);
            this.totalCount = 0; // Considera manejar este error de una manera más amigable
          }
        });
      }
    }
  }
}
