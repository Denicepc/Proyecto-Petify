import { Component } from '@angular/core';
import { PiensoService } from 'src/app/services/pienso.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  constructor(public piensoService: PiensoService){

  }
}
