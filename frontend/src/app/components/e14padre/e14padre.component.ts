import { Component, Input } from '@angular/core';
import { Pienso } from 'src/app/models/pienso';

@Component({
  selector: 'app-e14padre',
  templateUrl: './e14padre.component.html',
  styleUrls: ['./e14padre.component.css']
})
export class E14padreComponent {

  @Input() piensoEnviado : Pienso = new Pienso(); //creas una variable donde metes todos los atributos de los piensos

}
