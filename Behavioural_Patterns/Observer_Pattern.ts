interface Observer {
    update: (stock: Stock) => void;
}

interface Subject {
    attach: (observer: Observer) => void;
    detach: (observer: Observer) => void;
    notify: () => void;
}

class Stock {
    public readonly symbol: string;
    public price: number;

    constructor(symbol: string, price: number) {
        this.symbol = symbol;
        this.price = price;
    }
}

class StockExchange implements Subject {
    private observers: Observer[] = [];
    private stocks: Stock[] = [];

    public attach(observer: Observer): void {
        this.observers.push(observer);
    }

    public detach(observer: Observer): void {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }

    public notify(): void {
        for (const observer of this.observers) {
            observer.update(this.stocks[0]); // Notify all observers of the first stock in the list
        }
    }

    public addStock(stock: Stock): void {
        this.stocks.push(stock);
        this.notify();
    }

    public updateStockPrice(symbol: string, newPrice: number): void {
        const stockIndex = this.stocks.findIndex((stock) => stock.symbol === symbol);
        if (stockIndex !== -1) {
            this.stocks[stockIndex].price = newPrice;
            this.notify();
        }
    }
}

class Trader implements Observer {
    private readonly name: string;

    constructor(name: string) {
        this.name = name;
    }

    public update(stock: Stock): void {
        console.log(`${this.name} received an update for ${stock.symbol}: $${stock.price}`);
    }
}

// Usage
const stockExchange = new StockExchange();
const trader1 = new Trader("John");
const trader2 = new Trader("Jane");

stockExchange.attach(trader1);
stockExchange.attach(trader2);

stockExchange.addStock(new Stock("AAPL", 145.32));
stockExchange.updateStockPrice("AAPL", 147.65);
