export interface Order {
    id: string;
    customerId: string;
    dateCreated: Date;
    dateIssued: Date;
    dateModified: Date;
    TotalAmount: string;
    orderItems: OrderItem [];
}

export interface OrderItem {
    id: string;
    productId: string;
    productName: string;
    unitPrice: number;
    initialUnitPrice: number;
    quantity: number;
}