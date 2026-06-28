import { Injectable } from '@angular/core';
import { from, merge, Observable, delay } from 'rxjs';

export interface Product {
  id: string | number;
  name: string;
  price: number;
  origin?: string;
}

@Injectable({ providedIn: 'root' })
export class WarehouseService {
  getWarehouseA(): Observable<Product[]> {
  return new Observable(subscriber => {
    setTimeout(() => {
      subscriber.next([
        { id: 'A1', name: 'Wireless Mouse', price: 25, origin: 'Cairo Warehouse' }
      ]);
      subscriber.complete();
    }, 1000);
  });
}

getWarehouseB(): Observable<Product[]> {
  return new Observable(subscriber => {
    setTimeout(() => {
      subscriber.next([
        { id: 'B1', name: 'Mechanical Keyboard', price: 80, origin: 'Alexandria Warehouse' }
      ]);
      subscriber.complete();
    }, 2000)
  });
}

  getWarehouseC(): Observable<Product[]> {
  return new Observable(subscriber => {
    setTimeout(() => {
      subscriber.next([
        { id: 'C1', name: 'Gaming Laptop', price: 999, origin: 'Giza Warehouse' }
      ]);
      subscriber.complete();
    }, 500); 
  });
}

  getAllProducts(): Observable<Product[]> {
    return merge(
      this.getWarehouseA(),
      this.getWarehouseB(),
      this.getWarehouseC()
    );
  }
}