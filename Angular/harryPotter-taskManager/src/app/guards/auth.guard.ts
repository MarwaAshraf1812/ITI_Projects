import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const user = localStorage.getItem('user');
  const isAuthenticated = localStorage.getItem('isAuthenticated');

  if(user && isAuthenticated) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
}