import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-ejercicio19',
  templateUrl: './ejercicio19.component.html',
  styleUrls: ['./ejercicio19.component.css']
})
export class Ejercicio19Component {
  productName: string = '';
  userEmail: string = '';

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit() {
    this.userEmail = this.usuarioService.obtenerEmailUsuarioLogeado(); // Asumiendo que este método ya está implementado y disponible
  }

  sendProductName() {
    // No necesitas hacer nada aquí si Angular está enlazando los datos automáticamente
    // Angular automáticamente actualizará las propiedades en el componente hijo a través de los bindings de @Input
  }
}
