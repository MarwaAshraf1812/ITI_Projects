import { Component, OnInit, OnDestroy, ChangeDetectorRef, inject } from '@angular/core';
import { CityService } from '../../services/city.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-city-sensors',
  imports: [],
  templateUrl: './city-sensors.html',
  styleUrl: '../../app.css'
})
export class CitySensorsComponent implements OnInit, OnDestroy {
  private readonly cityService = inject(CityService);
  private readonly cdr = inject(ChangeDetectorRef);

  cityLogs: { temp: number; traffic: string }[] = [];
  private sub: Subscription | null = null;

  ngOnInit(): void {
    this.refreshCity();
  }

  refreshCity() {
    this.resetState();
    
    this.sub = this.cityService.getCityMonitor().subscribe({
      next: (data) => {
        const reading = { temp: data[0], traffic: data[1] };
        this.cityLogs = [reading, ...this.cityLogs].slice(0, 8);
        this.cdr.detectChanges();
      }
    });
  }

  private resetState() {
    if (this.sub) {
      this.sub.unsubscribe();
      this.sub = null;
    }
    this.cityLogs = [];
    this.cdr.detectChanges();
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
