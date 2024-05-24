import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chijo',
  templateUrl: './chijo.component.html',
  styleUrls: ['./chijo.component.css']
})
export class ChijoComponent {

  @Input() emailLogado : string = "";

}
