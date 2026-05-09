import { IDiscountStrategy } from "./types";

export class StandardDiscount implements IDiscountStrategy {
    calculate(amount: number): number { return 0; }
}

export class PremiumDiscount implements IDiscountStrategy {
    calculate(amount: number): number { return amount * 0.10; }
}

export class BulkDiscount implements IDiscountStrategy {
    calculate(amount: number): number { return amount * 0.20; }
}