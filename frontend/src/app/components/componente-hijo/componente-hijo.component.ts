import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-componente-hijo',
  templateUrl: './componente-hijo.component.html',
  styleUrls: ['./componente-hijo.component.css']
})
export class ComponenteHijoComponent {

  @Input() totalProductos: number = 0;

}
