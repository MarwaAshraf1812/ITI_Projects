import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  tabs = [
    { path: '/warehouse', label: 'Warehouse Feed', desc: 'merge & scan' },
    { path: '/airport', label: 'Airport Status', desc: 'forkJoin' },
    { path: '/city-sensors', label: 'City Sensors', desc: 'combineLatest' },
    { path: '/learning-platform', label: 'Onboarding Pipeline', desc: 'concatMap' }
  ];
}
