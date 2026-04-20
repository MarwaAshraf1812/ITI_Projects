import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class HeaderComponent {
  counter: number = 0;
  private intervalId: any;

  inc() {
    this.counter++;
  }

  ngOnInit() {
  this.intervalId = setInterval(() => {
    this.inc();
  }, 1000);
}


ngOnDestroy() {
  if (this.intervalId) {
      clearInterval(this.intervalId);
    }
}
}
