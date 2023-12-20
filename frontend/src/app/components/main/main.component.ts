import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  public array : number[];

  constructor(){
     this.array = Array(9).fill(0);
  }
}
