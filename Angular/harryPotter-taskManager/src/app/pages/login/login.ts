import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  constructor(private router: Router) { }
  user = {
    email: '',
    password: '',
  }
  onSubmit(form: NgForm) {
    console.log(form.value);
    if(form.invalid) {
      return;
    }

    const savedUser = localStorage.getItem('user');
    if(savedUser) {
      const user = JSON.parse(savedUser);
      if(user.email === this.user.email && user.password === this.user.password) {
        localStorage.setItem('isAuthenticated', 'true');
        this.router.navigate(['/tasks']);
      } else {
        alert('Invalid credentials');
        this.user = {
          email: '',
          password: '',
        }
      }
    } else {
     alert('You are not registered yet')
     this.router.navigate(['/register']);
    }
  }
}
