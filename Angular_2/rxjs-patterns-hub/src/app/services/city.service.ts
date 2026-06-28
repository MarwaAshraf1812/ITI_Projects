import { Injectable } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CityService {
  getTempSensor(): Observable<number> {
    return new Observable(subscriber => {
      const intervalId = setInterval(() => {
        subscriber.next(Math.floor(Math.random() * 40));
      }, 3000);
      return () => clearInterval(intervalId);
    });
  }

  getTrafficSensor(): Observable<string> {
    return new Observable(subscriber => {
      const intervalId = setInterval(() => {
        subscriber.next(['Low', 'High', 'Medium'][Math.floor(Math.random() * 3)]);
      }, 5000);
      return () => clearInterval(intervalId);
    });
  }

  getCityMonitor(): Observable<[number, string]> {
    return combineLatest([this.getTempSensor(), this.getTrafficSensor()]);
  }
}