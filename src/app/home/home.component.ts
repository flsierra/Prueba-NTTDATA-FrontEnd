import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule],
})
export class HomeComponent {
  clienteForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.clienteForm = this.fb.group({
      tipoDocumento: ['', Validators.required],
      numeroDocumento: [
        '',
        [Validators.required, Validators.pattern(/^\d{8,11}$/)],
      ],
    });
  }

  buscarCliente() {
    if (this.clienteForm.valid) {
      const datos = this.clienteForm.value;
      this.router.navigate(['/resumen'], { state: { cliente: datos } });
    }
  }
}
