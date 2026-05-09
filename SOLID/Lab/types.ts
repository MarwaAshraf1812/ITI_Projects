export interface OrderItem {
    productName: string;
    quantity: number;
    unitPrice: number;
}

export interface Order {
    id: string;
    customerEmail: string;
    orderType: "Standard" | "Premium" | "Bulk";
    totalAmount: number;
    items: OrderItem[];
}

export interface IDiscountStrategy {
    calculate(amount: number): number;
}

export interface IOrderReader {
    getAll(): Order[];
}

export interface IOrderWriter {
    save(order: Order): void;
}

export interface IOrderProcessor {
    processOrder(order: Order): void;
}

export interface IOrderNotifier {
    sendConfirmationEmail(order: Order): void;
}

export interface IOrderReporter {
    generateReport(orders: Order[]): string;
}

export interface IOrderExporter {
    exportToCsv(orders: Order[]): string;
}

export interface IOrderStorage {
    save(order: Order): void; 
}
export interface IOrderEmailSender {
     send(to: string, sub: string): void; 
}
export interface IOrderLogger { 
    log(msg: string): void; 
}