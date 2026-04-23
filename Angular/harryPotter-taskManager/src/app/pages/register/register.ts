import { Component, inject, signal } from '@angular/core';
import { FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { User } from '../../types';
import { RouterLink } from '@angular/router';
import { AuthServiceService } from '../../services/authService.service';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  authService = inject(AuthServiceService);
  registerError = signal<string | null>(null);
  registerForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
    school: new FormControl('', [Validators.required]),
  })

  onSubmit() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }
    const { password, confirmPassword } = this.registerForm.value;


    if(password !== confirmPassword){
      this.registerError.set('Passwords do not match');
      return;
    }

    const newUser: User = this.registerForm.value as User || {};
    
    this.authService.register(newUser);
    this.registerError.set(null);
  }

}
