import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class ResumenComponent {
  cliente: any;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.cliente = navigation?.extras.state?.['cliente'] || null;

    // Redirige si no hay datos
    if (!this.cliente) {
      this.router.navigate(['/']);
    }
  }

  volver() {
    this.router.navigate(['/']);
  }
}
