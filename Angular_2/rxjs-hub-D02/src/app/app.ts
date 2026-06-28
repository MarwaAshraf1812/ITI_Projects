import { Component, signal } from '@angular/core';
import { StudentList } from './components/student-list/student-list';
import { CartHub } from './components/cart-hub/cart-hub';
import { MovieHub } from './components/movie-hub/movie-hub';

@Component({
  selector: 'app-root',
  imports: [StudentList, CartHub, MovieHub],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('rxjs-hub-D02');
  readonly activeTab = signal<number>(1);

  setActiveTab(tab: number): void {
    this.activeTab.set(tab);
  }
}