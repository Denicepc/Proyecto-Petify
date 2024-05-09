import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MisComprasService } from 'src/app/services/mis-compras.service';

@Component({
  selector: 'app-componente-hijo',
  templateUrl: './componente-hijo.component.html',
  styleUrls: ['./componente-hijo.component.css']
})
export class ComponenteHijoComponent implements OnChanges {


  constructor(private misComprasService: MisComprasService) {}

  ngOnChanges(changes: SimpleChanges): void {

  }


}
