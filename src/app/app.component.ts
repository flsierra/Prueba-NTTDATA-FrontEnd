import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // Asegúrate de importar RouterModule

@Component({
  selector: 'app-root',
  standalone: true,  // Componente standalone
  imports: [RouterModule],  // Importa RouterModule para poder usar router-outlet
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mi Aplicación';
}
