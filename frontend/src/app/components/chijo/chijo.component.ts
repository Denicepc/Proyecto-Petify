import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-chijo',
  templateUrl: './chijo.component.html',
  styleUrls: ['./chijo.component.css']
})
export class CHijoComponent  implements OnChanges{

   @Input() numeroDeCompras: number = 0;
  mensaje: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['numeroDeCompras']) {
      this.mensaje = this.numeroDeCompras > 0 ? 'Has realizado compras previamente.' : 'No has realizado compras aún.';
    }
  }

}
