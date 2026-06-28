import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';

export interface Flight { schedule: string; status: string; }
export interface Weather { temp: number; condition: string; }
export interface Gate { gate: string; terminal: string; }

@Injectable({
  providedIn: 'root'
})
export class AirportService {

  getFlightStatus(): Observable<Flight> {
    return new Observable(subscriber => {
      setTimeout(() => {
        subscriber.next({ schedule: '12:45 PM', status: 'On Time' });
        subscriber.complete();
      }, 1200);
    });
  }

  getWeatherInfo(): Observable<Weather> {
    return new Observable(subscriber => {
      setTimeout(() => {
        subscriber.next({ temp: 24, condition: 'Clear Sky' });
        subscriber.complete();
      }, 800);
    });
  }

  getGateInfo(simulateError: boolean = false): Observable<Gate> {
    return new Observable(subscriber => {
      setTimeout(() => {
        if (simulateError) {
          subscriber.error('Gate Information Service Unavailable (503)!');
        } else {
          subscriber.next({ gate: 'B22', terminal: 'Terminal 3' });
          subscriber.complete();
        }
      }, 2000);
    });
  }

  getDashboardData(simulateError: boolean = false): Observable<{ flight: Flight, weather: Weather, gate: Gate }> {
    return forkJoin({
      flight: this.getFlightStatus(),
      weather: this.getWeatherInfo(),
      gate: this.getGateInfo(simulateError)
    });
  }
}