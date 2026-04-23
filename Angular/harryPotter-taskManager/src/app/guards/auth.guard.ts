import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const currentUser = localStorage.getItem('currentUser');
  const isAuthenticated = localStorage.getItem('isAuthenticated');

  if (currentUser && isAuthenticated === 'true') {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
}