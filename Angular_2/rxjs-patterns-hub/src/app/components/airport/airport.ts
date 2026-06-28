import { Component, OnInit, OnDestroy, ChangeDetectorRef, inject } from '@angular/core';
import { AirportService, Flight, Weather, Gate } from '../../services/airport.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-airport',
  templateUrl: './airport.html',
  styleUrl: '../../app.css'
})
export class AirportComponent implements OnInit, OnDestroy {
  private cdr = inject(ChangeDetectorRef);

  flightData: Flight | null = null;
  weatherData: Weather | null = null;
  gateData: Gate | null = null;

  isLoading = false;
  isDashboardReady = false;
  errorMessage = '';

  private subs: Subscription[] = [];

  constructor(private airportService: AirportService) {}

  ngOnInit() {
    this.loadDashboard(false);
  }

  loadDashboard(shouldFail: boolean) {
    this.resetState();
    this.isLoading = true;
    this.cdr.detectChanges();

    const sub = this.airportService.getDashboardData(shouldFail).subscribe({
      next: (data) => {
        this.flightData = data.flight;
        this.weatherData = data.weather;
        this.gateData = data.gate;
        this.isDashboardReady = true;
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.errorMessage = err;
        this.isLoading = false;
        this.isDashboardReady = false;
        this.cdr.detectChanges();
      }
    });

    this.subs.push(sub);
  }

  private resetState() {
    this.unsubscribeAll();
    this.flightData = null; 
    this.weatherData = null; 
    this.gateData = null;
    this.errorMessage = ''; 
    this.isDashboardReady = false;
    this.cdr.detectChanges();
  }

  private unsubscribeAll() {
    this.subs.forEach(s => s.unsubscribe());
    this.subs = [];
  }

  ngOnDestroy() {
    this.unsubscribeAll();
  }
}