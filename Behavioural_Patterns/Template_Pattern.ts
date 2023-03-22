abstract class OrderProcessingTemplate {
    // This method defines the overall process of processing an order
    processOrder(orderId: string): void {
        this.verifyOrder(orderId);
        this.calculateTotal(orderId);
        this.chargeCustomer(orderId);
        this.shipOrder(orderId);
    }

    // This method is implemented differently by each subclass to verify an order
    abstract verifyOrder(orderId: string): void;

    // This method is implemented differently by each subclass to calculate the total amount of an order
    abstract calculateTotal(orderId: string): void;

    // This method is implemented differently by each subclass to charge a customer for an order
    abstract chargeCustomer(orderId: string): void;

    // This method is implemented differently by each subclass to ship an order to the customer
    abstract shipOrder(orderId: string): void;
}

class PayPalOrderProcessing extends OrderProcessingTemplate {
    verifyOrder(orderId: string): void {
        // Verify the order with PayPal's API
    }

    calculateTotal(orderId: string): void {
        // Calculate the total amount of the order with PayPal's API
    }

    chargeCustomer(orderId: string): void {
        // Charge the customer with PayPal's API
    }

    shipOrder(orderId: string): void {
        // Ship the order to the customer using a shipping provider
    }
}
