import { Component, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { MisCompras } from 'src/app/models/mis-compras';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent{

  @Input() compras: MisCompras[] = [];


}
