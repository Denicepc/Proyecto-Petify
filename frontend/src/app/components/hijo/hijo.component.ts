import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { MisCompras } from 'src/app/models/mis-compras';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnChanges{

  @Input() compras : MisCompras[] = [];
  @Output() numeroCompras : EventEmitter <number> = new EventEmitter();

  ngOnChanges(changes: SimpleChanges): void {
    this.numeroCompras.emit(this.compras.length);
  }

}
