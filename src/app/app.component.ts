import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Importa FormsModule



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'libreria_4_html';
  txtsearchtitulo: string = '';


  constructor(private router: Router) {}


  busquedaTitulo() {
    console.log('Buscando título:', this.txtsearchtitulo);
    // Implementa la lógica de búsqueda aquí
  }

  navigateToNuevos() {
    // Navega a la ruta con los parámetros para cargar los nuevos títulos
    this.router.navigate(['/listfilter', 'NuevosTitulos', 'Nuevos Títulos']);
  }

}
