import { inject, Injectable, signal } from "@angular/core";
import { User } from "../types";
import { Router } from "@angular/router";
import { popUpService } from "./popUp.service";
import { ApiService } from "./api.service";

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  private router = inject(Router);
  private popUpService = inject(popUpService);
  private api = inject(ApiService);

  isAuthenticated = signal<boolean>(localStorage.getItem('isAuthenticated') === 'true');
  currentUser = signal<User | null>(
    localStorage.getItem('currentUser')
      ? JSON.parse(localStorage.getItem('currentUser')!)
      : null
  );

  private saveSession(user: User) {
    localStorage.setItem('currentUser', JSON.stringify(user));
    localStorage.setItem('isAuthenticated', 'true');
    this.currentUser.set(user);
    this.isAuthenticated.set(true);
  }

  private clearSession() {
    localStorage.removeItem('currentUser');
    localStorage.setItem('isAuthenticated', 'false');
    this.currentUser.set(null);
    this.isAuthenticated.set(false);
  }

  register(newUser: User) {
    this.api.get<User[]>(`users?email=${newUser.email}`).subscribe({
      next: (existing) => {
        if (existing.length > 0) {
          this.popUpService.showPopUp('error', 'This email is already in the Ministry records! 📜');
          return;
        }
        const userWithId: User = { ...newUser, id: crypto.randomUUID() };
        this.api.post<User>('users', userWithId).subscribe({
          next: () => {
            this.popUpService.showPopUp('success', 'Your name is now in the Book of Admittance! 🪄');
            this.router.navigate(['/login']);
          },
          error: () => this.popUpService.showPopUp('error', 'The quill failed! Try again.')
        });
      },
      error: () => this.popUpService.showPopUp('error', 'Could not reach the Ministry!')
    });
  }

  login(credentials: Partial<User>) {
    this.api.get<User[]>(`users?email=${credentials.email}`).subscribe({
      next: (users) => {
        if (users.length === 0) {
          this.popUpService.showPopUp('error', 'No wizard found with this email! ⚡');
          return;
        }
        const user = users[0];
        if (user.password === credentials.password) {
          this.saveSession(user);
          this.popUpService.showPopUp('success', 'Welcome back, Wizard! ✨');
          this.router.navigate(['/task-manager']);
        } else {
          this.popUpService.showPopUp('error', 'Dark magic detected! Wrong password. ⚡');
        }
      },
      error: () => this.popUpService.showPopUp('error', 'Could not reach the Ministry! Try again.')
    });
  }

  logout() {
    this.clearSession();
    this.popUpService.showPopUp('info', 'Safe travels back to the Muggle world! 🕊️');
    this.router.navigate(['/login']);
  }
}