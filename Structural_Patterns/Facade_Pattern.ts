// Facade Design Pattern
// Facade pattern is a design pattern that provides a single interface to a large number of objects,
// so that they can be treated uniformly. It is a structural design pattern that separates an object's functionality
// from its implementation.

// Customer Service
class CustomerService {
    private _customerList: { [key: string]: any } = {};

    addCustomer(customer: any) {
        this._customerList[customer.getCustomerId()] = customer;
    }

    getCustomer(customerId: string) {
        return this._customerList[customerId];
    }

    updateCustomer(customerId: string) {
        this._customerList[customerId].updateCustomer();
    }
    deleteCustomer(customerId: string) {
        delete this._customerList[customerId];
    }


}

// Product Service
class ProductService {
    private _products: { [key: string]: any } = {}

    addProduct(product: any) {
        this._products[product.getProductId()] = product;
    }
    getProduct(productId: string) {
        return this._products[productId];
    }
    updateProduct(productId: string) {
        this._products[productId].updateProduct();
    }
    deleteProduct(productId: string) {
        delete this._products[productId];
    }

}


// facade class which has both object of customerservice and productservice

class EcommerceFacade {
    private _customerService: CustomerService;
    private _productService: ProductService;

    constructor() {
        this._customerService = new CustomerService();
        this._productService = new ProductService();
    }

    addCustomer(customer: any) {
        this._customerService.addCustomer(customer);
    }

    getCustomer(customerId: string) {
        return this._customerService.getCustomer(customerId);
    }
    updateCustomer(customerId: string) {
        this._customerService.updateCustomer(customerId);
    }
    deleteCustomer(customerId: string) {
        this._customerService.deleteCustomer(customerId);
    }

    addProduct(product: any) {
        this._productService.addProduct(product);
    }

    getProduct(productId: string) {
        return this._productService.getProduct(productId);
    }

    updateProduct(productId: string) {
        this._productService.updateProduct(productId);
    }

    deleteProduct(productId: string) {
        this._productService.deleteProduct(productId);
    }

}


let product: any = {
    name: "neo",
    getProductId() {
        return '1';
    }
}


let customer: any = {
    name: "customer",
    getCustomerId() {
        return '2';
    }
}
let ecommerceFacade = new EcommerceFacade();
ecommerceFacade.addCustomer(customer);
ecommerceFacade.addProduct(product);
console.log(ecommerceFacade.getCustomer("2"));
console.log(ecommerceFacade.getProduct("1"));