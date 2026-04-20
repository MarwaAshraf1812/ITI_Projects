import { Component } from '@angular/core';
import {  FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { User } from '../../types';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  constructor(private router: Router) {}

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

    const existingUser = localStorage.getItem('user');
    if (existingUser) {
      alert('A wizard is already enrolled on this magical device! Proceed to Login.');
      this.router.navigate(['/login']);
      return;
    }

    const newUser: User = {
      username: this.registerForm.value.username || '',
      email: this.registerForm.value.email || '',
      password: this.registerForm.value.password || '',
      confirmPassword: this.registerForm.value.confirmPassword || '',
      school: this.registerForm.value.school || '',
    };
    
    localStorage.setItem('user', JSON.stringify(newUser));
    console.log('Successfully Enrolled:', newUser);
    this.router.navigate(['/login']);
  }

}
