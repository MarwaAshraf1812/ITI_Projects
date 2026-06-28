import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, map, Observable, of, Subject } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  price: number;
  available?: boolean;
}

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartState$ = new BehaviorSubject<Product[]>([]);
  cart$ = this.cartState$.asObservable();

  private toastSubject = new Subject<String>();
  toast$ = this.toastSubject.asObservable();

  getProducts(): Observable<Product[]> {
    return of([
      { id: 1, name: 'Apple MacBook Pro', price: 1200, available: true },
      { id: 2, name: 'iPhone 15 Pro', price: 999, available: true },
      { id: 3, name: 'Sony WH-1000XM5', price: 350, available: false },
      { id: 4, name: 'iPad Air', price: 600, available: true }
    ]).pipe(delay(500));
  }


  addProductToCart(product: Product): Observable<Product> {
  return new Observable<Product>(subscriber => {
    const timer = setTimeout(() => {
      if (!product.available) {
        subscriber.error(`Sorry, ${product.name} is out of stock!`);
      } else {
        const currentItems = this.cartState$.value;
        this.cartState$.next([...currentItems, product]);
        
        this.toastSubject.next(`Added ${product.name} successfully!`);
        
        subscriber.next(product);
        subscriber.complete();
      }
    }, 2500);

    return () => clearTimeout(timer);
  });
}

  getTotalPrice(): Observable<number> {
    return this.cartState$.pipe(
      map(items => items.reduce((total, item) => total + item.price, 0)));
  }

  getItemCount(): Observable<number> {
    return this.cartState$.pipe(
      map(items => items.length)
    )
  }

  clearCart() {
    this.cartState$.next([]);
    this.toastSubject.next('Cart cleared!');
  }

  removeProductFromCart(productId: number): void {
    const current = this.cartState$.value.filter(item => item.id !== productId);
    this.cartState$.next(current);
    this.toastSubject.next('Product removed from cart');
  }

  decrementProductInCart(productId: number): void {
    const current = this.cartState$.value;
    const index = current.findIndex(item => item.id === productId);
    if (index !== -1) {
      const updated = [...current];
      updated.splice(index, 1);
      this.cartState$.next(updated);
      this.toastSubject.next('Product quantity decremented');
    }
  }
}


