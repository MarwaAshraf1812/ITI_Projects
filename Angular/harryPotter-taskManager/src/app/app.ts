import { Component, OnInit } from '@angular/core';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { RouterOutlet } from '@angular/router';
import { PopUpComponent } from './components/popUp/popUp';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, RouterOutlet, PopUpComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
