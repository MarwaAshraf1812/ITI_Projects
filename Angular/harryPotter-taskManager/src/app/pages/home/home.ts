import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { slide } from '../../types';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  slides: slide[] = [
    {
      id: 1,
      title: 'Hogwarts Task Management',
      image: '/images/slide1.png',
      subtitle: 'Organize your magical journey across the grounds of Hogwarts Castle.'
    },
    {
      id: 2,
      title: 'Your Magical Study Desk',
      image: '/images/slide2.png',
      subtitle: 'Keep track of potions, spells, and daily owl posts effectively.'
    },
    {
      id: 3,
      title: 'The Great Hall Updates',
      image: '/images/slide3.png',
      subtitle: 'Check the enchanted notice board for the latest magical events.'
    },
  ];

  currentIndex = 0;
  private intervalId: any;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.startAutoSlide();
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
      this.cdr.detectChanges();
    }, 5000);
  }


  stopAutoSlide() {
    if(this.intervalId) {
      clearInterval(this.intervalId)
    }
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % 3;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + 3) % 3;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
    this.stopAutoSlide();
    this.startAutoSlide();
  }
}
