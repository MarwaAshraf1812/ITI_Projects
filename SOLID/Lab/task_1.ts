import { Order, IDiscountStrategy } from "./types";

// 1- validation
class OrderValidator {
  validate(order_data: Order) : boolean {
    if(order_data.items.length  === 0 ) return false;
    if(!order_data.customerEmail.includes("@")) return false;
    if(order_data.totalAmount <= 0) return false;
    return true;
  }
}

// 2- Persistence
class OrderStorage {
  save(order_data: Order) : void {
     console.log(`Saved order ${order_data.id} to DB`);
  }
 }

// 3- Notification
class OrderEmailSender {
  sendConfirmation(order_data: Order) : void {
     console.log(`Sending confirmation email to ${order_data.customerEmail}`);
  }
 }

// 4- Order Report
class OrderReportService {
  generateReport(orders: Order[]) : string {
    const totalRevenue = orders.reduce((sum, order) => sum + order.totalAmount, 0);
    return `Orders: ${orders.length}, Total Revenue: ${totalRevenue}`
  }
  exportToCSV(orders: Order[]) : string {
    return orders.map(o => `${o.id},${o.customerEmail},${o.totalAmount}`).join("\n");
    
  }
 }

// 5- Order Service
class OrderProcessor {
  private validator = new OrderValidator();
  private storage = new OrderStorage();
  private emailSender = new OrderEmailSender();

  process(order: Order, discountStrategy: IDiscountStrategy): void {
    if (!this.validator.validate(order)) {
        console.log("Invalid Order");
        return;
    }

    const discountAmount = discountStrategy.calculate(order.totalAmount);
    const finalAmount = order.totalAmount - discountAmount;

    console.log(`Final Amount after discount: ${finalAmount}`);
    
    this.storage.save(order);
    this.emailSender.sendConfirmation(order);
  }
}