import { Component, Input } from '@angular/core';
import { Pienso } from 'src/app/models/pienso';

@Component({
  selector: 'app-e14hijo',
  templateUrl: './e14hijo.component.html',
  styleUrls: ['./e14hijo.component.css']
})
export class E14hijoComponent {

@Input() piensoEnviado2 : Pienso = new Pienso(); //en este componente metes los atributos de los piensos

}
