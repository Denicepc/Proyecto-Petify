import { Component, EventEmitter, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-latder',
  templateUrl: './latder.component.html',
  styleUrls: ['./latder.component.css']
})
export class LatderComponent {
  public emailUsuario : string = "";

  recogerEmail(email : string){
    this.emailUsuario=email;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['emailUsuario']) {
      this.emailUsuario = changes['emailUsuario'].currentValue;
    }
  }
}
