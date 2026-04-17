import { Component } from '@angular/core';
import { slide } from '../../types';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.html',
  styleUrl: './carousel.css'
})
export class CarouselComponent {
  slides : slide[] = [
    {
      id: 0,
      image: 'assets/images/productivity.png',
      title: 'Boost Productivity',
      subtitle: 'Organize your tasks with precision and style.'
    },
    {
      id: 1,
      image: 'assets/images/collaboration.png',
      title: 'Effortless Collaboration',
      subtitle: 'Connect with your team and achieve goals together.'
    },
    {
      id: 2,
      image: 'assets/images/planning.png',
      title: 'Strategic Planning',
      subtitle: 'Visualize your success and plan your next big move.'
    }
  ];



  currentIndex = 0;
  private intervalId: any;

  constructor() {
    this.startAutoSlide();
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  stopAutoSlide() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
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
