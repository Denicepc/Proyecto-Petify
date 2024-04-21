import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-e22hijo',
  templateUrl: './e22hijo.component.html',
  styleUrls: ['./e22hijo.component.css']
})
export class E22hijoComponent {

  @Input() totalRecibido : number = 0;

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['totalRecibido'].currentValue){
      this.totalRecibido = changes['totalRecibido'].currentValue;
    }
  }

}
