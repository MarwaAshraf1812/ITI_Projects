import { IOrderReporter, IOrderExporter, Order } from "./types";

class OrderReportService implements IOrderReporter {
    generateReport(orders: Order[]): string {
        return `Orders: ${orders.length}`;
    }
}

class OrderExportService implements IOrderExporter {
    exportToCsv(orders: Order[]): string {
        return orders.map(o => `${o.id},${o.customerEmail},${o.totalAmount}`).join("\n");
    }
}
