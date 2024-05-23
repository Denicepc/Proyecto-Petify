import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent{

  @Input() numCompras: number = 0; // Recibe el número de compras del padre

}
