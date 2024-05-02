import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio19',
  templateUrl: './ejercicio19.component.html',
  styleUrls: ['./ejercicio19.component.css']
})
export class Ejercicio19Component {
  productName: string = '';
  selectedProductName: string | null = null;

  sendProductName() {
    this.selectedProductName = this.productName;
  }
}
