import { Order, IDiscountStrategy, IOrderProcessor, IOrderStorage, IOrderEmailSender, IOrderLogger } from "./types";
import { PremiumDiscount } from "./task_2";
import { SqlOrderStorage } from "./task_3";

class SmtpEmailSender implements IOrderEmailSender {
    send(to: string, sub: string): void {
        console.log(`Sending email to ${to}: ${sub}`);
    }
}

class ConsoleOrderLogger implements IOrderLogger {
    log(msg: string): void {
        console.log(msg);
    }
}

class OrderProcessor implements IOrderProcessor {
    constructor(
        private storage: IOrderStorage,
        private emailSender: IOrderEmailSender,
        private logger: IOrderLogger,
        private discountStrategy: IDiscountStrategy 
    ) {}

    processOrder(order: Order): void {
        this.logger.log(`Processing order ${order.id}`);
        
        const discount = this.discountStrategy.calculate(order.totalAmount);
        const finalAmount = order.totalAmount - discount;

        this.storage.save(order);
        this.emailSender.send(order.customerEmail, "Order Confirmed");
    }
}

function setupSystem() {
    const storage = new SqlOrderStorage();
    const emailer = new SmtpEmailSender();
    const logger = new ConsoleOrderLogger();
    const discount = new PremiumDiscount(); 

    const processor = new OrderProcessor(storage, emailer, logger, discount);
    return processor;
}