import { ChangeDetectorRef, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CartService, CartItem, Product } from '../../services/cart';
import { Subject, Subscription, of } from 'rxjs';
import { concatMap, mergeMap, switchMap, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-cart-hub',
  imports: [],
  templateUrl: './cart-hub.html',
  styleUrl: './cart-hub.css',
})
export class CartHub implements OnInit, OnDestroy {
  cartService = inject(CartService);
  private cdr = inject(ChangeDetectorRef);

  products: Product[] = [];
  cartItems: CartItem[] = [];
  logs: string[] = [];
  activeOp: 'concat' | 'merge' | 'switch' = 'concat';

  totalCount = 0;
  totalPrice = 0;

  private addToCartSubject = new Subject<Product>();
  private subs: Subscription[] = [];
  private pipelineSub?: Subscription;

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(list => this.products = list);

    const cartSub = this.cartService.cart$.subscribe(items => {
      this.cartItems = this.groupCartItems(items);
      this.cdr.detectChanges();
    });

    const countSub = this.cartService.getItemCount().subscribe(count => {
      this.totalCount = count;
      this.cdr.detectChanges();
    });

    const priceSub = this.cartService.getTotalPrice().subscribe(price => {
      this.totalPrice = price;
      this.cdr.detectChanges();
    });

    const toastSub = this.cartService.toast$.subscribe(msg => {
      this.log(`NOTIFICATION: ${msg}`);
    });

    this.subs.push(cartSub, countSub, priceSub, toastSub);
    this.setupFlatteningPipeline();
  }

  log(message: string): void {
    this.logs.push(message);
    this.cdr.detectChanges();
  }

  groupCartItems(products: Product[]): CartItem[] {
    const map = new Map<number, CartItem>();
    for (const p of products) {
      const existing = map.get(p.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        map.set(p.id, { id: p.id, name: p.name, price: p.price, quantity: 1 });
      }
    }
    return Array.from(map.values());
  }

  setupFlatteningPipeline(): void {
    if (this.pipelineSub) {
      this.pipelineSub.unsubscribe();
    }

    let pipeline$;
    if (this.activeOp === 'concat') {
      pipeline$ = this.addToCartSubject.pipe(
        concatMap(product => {
          this.log(`PIPELINE [concat]: Starting add request for ${product.name}`);
          return this.cartService.addProductToCart(product).pipe(
            catchError(err => {
              this.log(`ERROR: ${err}`);
              return of(null);
            })
          );
        })
      );
    } else if (this.activeOp === 'merge') {
      pipeline$ = this.addToCartSubject.pipe(
        mergeMap(product => {
          this.log(`PIPELINE [merge]: Starting add request for ${product.name}`);
          return this.cartService.addProductToCart(product).pipe(
            catchError(err => {
              this.log(`ERROR: ${err}`);
              return of(null);
            })
          );
        })
      );
    } else {
      pipeline$ = this.addToCartSubject.pipe(
        switchMap(product => {
          this.log(`PIPELINE [switch]: Starting add request for ${product.name}`);
          return this.cartService.addProductToCart(product).pipe(
            catchError(err => {
              this.log(`ERROR: ${err}`);
              return of(null);
            })
          );
        })
      );
    }

    this.pipelineSub = pipeline$.subscribe();
    this.subs.push(this.pipelineSub);
  }

  changeOp(op: 'concat' | 'merge' | 'switch'): void {
    this.activeOp = op;
    this.log(`SYSTEM: Operator changed to ${op}Map`);
    this.setupFlatteningPipeline();
  }

  addToCart(product: Product): void {
    this.log(`USER: Clicked add to cart for ${product.name}`);
    this.addToCartSubject.next(product);
  }

  incrementQuantity(item: CartItem): void {
    const product: Product = { id: item.id, name: item.name, price: item.price };
    this.addToCart(product);
  }

  decrementQuantity(item: CartItem): void {
    this.cartService.decrementProductInCart(item.id);
  }

  removeItem(item: CartItem): void {
    this.cartService.removeProductFromCart(item.id);
  }

  clearCart(): void {
    this.cartService.clearCart();
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
  }
}
