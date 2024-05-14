import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { MisCompras } from 'src/app/models/mis-compras';

@Component({
  selector: 'app-componente-hijo',
  templateUrl: './componente-hijo.component.html',
  styleUrls: ['./componente-hijo.component.css']
})
export class ComponenteHijoComponent{

  @Input() compras: MisCompras[] = [];

}
