import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home').then(m => m.Home)
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about').then(m => m.About)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login').then(m => m.Login)
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register/register').then(m => m.Register)
  },
  {
    path: 'tasks',
    loadComponent: () => import('./pages/tasks/tasks').then(m => m.Tasks), canActivate: [authGuard]
  },
  {
    path: 'task-manager',
    loadComponent: () => import('./pages/task-manager/task-manager').then(m => m.TaskManager), canActivate: [authGuard]
  },
  { path: '**', redirectTo: 'home' },
];
