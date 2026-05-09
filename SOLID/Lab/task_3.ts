import { IOrderReader, IOrderWriter, Order } from "./types";
export class SqlOrderStorage implements IOrderReader, IOrderWriter {
    save(order: Order): void {
        console.log(`[SQL] Saved order ${order.id}`);
    }

    getAll(): Order[] {
        return []; 
    }
}

export class ArchiveOrderStorage implements IOrderReader {
    getAll(): Order[] {
        console.log("Fetching from archive...");
        return [];
    }
}