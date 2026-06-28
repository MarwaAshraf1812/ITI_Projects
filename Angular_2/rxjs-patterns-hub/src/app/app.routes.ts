import { Routes } from '@angular/router';
import { ProductFeedComponent } from './components/product-feed/product-feed';
import { AirportComponent } from './components/airport/airport';
import { CitySensorsComponent } from './components/city-sensors/city-sensors';
import { LearningPlatformComponent } from './components/learning-platform/learning-platform';

export const routes: Routes = [
  { path: '', redirectTo: 'warehouse', pathMatch: 'full' },
  { path: 'warehouse', component: ProductFeedComponent },
  { path: 'airport', component: AirportComponent },
  { path: 'city-sensors', component: CitySensorsComponent },
  { path: 'learning-platform', component: LearningPlatformComponent }
];

