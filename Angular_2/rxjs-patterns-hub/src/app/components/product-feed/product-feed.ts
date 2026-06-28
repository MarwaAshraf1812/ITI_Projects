import { Component, OnInit, OnDestroy, inject, ChangeDetectorRef } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { WarehouseService, Product } from '../../services/warehouse.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-feed',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-feed.html',
  styleUrl: '../../app.css'
})
export class ProductFeedComponent implements OnInit, OnDestroy {
  private readonly warehouseService = inject(WarehouseService);
  private readonly cdr = inject(ChangeDetectorRef);

  products: Product[] = [];

  private feedSubscription: Subscription | null = null;

  ngOnInit(): void {
    this.refreshWarehouse();
  }

  refreshWarehouse() {
    if (this.feedSubscription) {
      this.feedSubscription.unsubscribe();
    }

    this.products = [];
    this.cdr.detectChanges();

    this.feedSubscription = this.warehouseService.getAllProducts().subscribe({
      next: (newWarehouseProducts) => {
        this.products = [...this.products, ...newWarehouseProducts];

        this.cdr.detectChanges();
      },
      complete: () => {
        console.log('All warehouse data loaded inside the component feed!');
      }
    });
  }

  ngOnDestroy(): void {
    if (this.feedSubscription) {
      this.feedSubscription.unsubscribe();
    }
  }
}
