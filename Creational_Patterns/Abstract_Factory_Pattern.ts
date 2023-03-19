
// abstract factory design pattern

/* An interface. */
export interface IPaymentgatewayFactory {
    createPayment(): PaymentMethod;
    createTransaction(): CreateTransaction;

}

/* PaypalFactory implements IPaymentgatewayFactory and creates PaypalPayment and PaypalTransaction. */
export class PaypalFactory implements IPaymentgatewayFactory {

    public createPayment(): PaymentMethod {
        return new PaypalPayment();
    }
    public createTransaction(): CreateTransaction {
        return new PaypalTransaction();
    }
}

/* StripeFactory implements IPaymentgatewayFactory and returns StripePayment and StripeTransaction */
export class StripeFactory implements IPaymentgatewayFactory {

    public createPayment(): PaymentMethod {
        return new StripePayment();
    }
    public createTransaction(): CreateTransaction {
        return new StripeTransaction();
    }

}

/* An interface. */
export interface PaymentMethod {
    create(): void;
}

/* PaypalPayment implements the PaymentMethod interface. */
export class PaypalPayment implements PaymentMethod {

    create(): void {
        console.log("create paypal method");
    }
}

/* StripePayment implements the PaymentMethod interface. */
export class StripePayment implements PaymentMethod {
    create(): void {

    }
}

/* An interface. */
export interface CreateTransaction {
    create(): void;
}



/* PaypalTransaction implements CreateTransaction */
export class PaypalTransaction implements CreateTransaction {

    create(): void {
        console.log("create paypal transactions");
    }
}

/* This class is a wrapper for the Paypal API. It's used to create a transaction. */
export class StripeTransaction implements CreateTransaction {
    create(): void {
        /* This class is a wrapper for the Paypal API. It's used to create a transaction. */
        console.log("create stripe transactions");
    }
}

let paymentFactoryType: string = "paypal";

/* It's declaring a variable called `paymentFactory` of type `IPaymentgatewayFactory`. */
let paymentFactory: IPaymentgatewayFactory;

if (paymentFactoryType == "paypal") {
    paymentFactory = new PaypalFactory();
    printConsole(paymentFactory);
}
else if (paymentFactoryType == "stripe") {
    paymentFactory = new StripeFactory();
    printConsole(paymentFactory);

}

function printConsole(paymentFactory: IPaymentgatewayFactory) {
    paymentFactory.createPayment().create();
    paymentFactory.createTransaction().create();
}



