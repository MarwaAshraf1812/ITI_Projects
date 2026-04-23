import { Component, inject, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthServiceService } from '../../services/authService.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  authService = inject(AuthServiceService);
  loginError = signal<string | null>(null);
  user = {
    email: '',
    password: '',
  }
  onSubmit(form: NgForm) {
    if(form.invalid) return;
    this.loginError.set(null);
    this.authService.login(form.value);
  }
}
