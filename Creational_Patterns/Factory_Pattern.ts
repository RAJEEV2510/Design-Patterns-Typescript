// factory pattern create objects on the basis of conditions

// create factory class

// interface
interface IChart {
    setTitle: (title: string) => void;
    setLables: (Labels: string[]) => void;
    setData: (data: number[]) => void;
    draw: () => void;
}

// concrete barchart class
class BarChart implements IChart {
    private _title: string;
    private _labels: string[];
    private _data: number[];

    constructor(title: string, labels: string[], data: number[]) {
        this._title = title;
        this._labels = labels;
        this._data = data;
    }

    setTitle(title: string) {
        this._title = title;
    }

    setLables(labels: string[]) {
    }
    setData(data: number[]) {
        this._data = data;
    }

    draw() {
        console.log(this._title);
        console.log(this._labels);
        console.log(this._data);
    }

}

// concrete piechart class
class PieChart implements IChart {
    private _title: string;
    private _labels: string[];
    private _data: number[];

    constructor(title: string, labels: string[], data: number[]) {
        this._title = title;
        this._labels = labels;
        this._data = data;
    }

    setTitle(title: string) {
        this._title = title;
    }

    setLables(labels: string[]) {
        this._labels = labels;
    }
    setData(data: number[]) {
        this._data = data;
    }

    draw() {
        console.log(this._title);
        console.log(this._labels);
        console.log(this._data);
    }

}



/* The ChartFactory class has a createChartObj method that takes in a string, a string, an array of
strings, and an array of numbers. It returns an IChart. */
class ChartFactory {
    createChartObj(objType: string, title: string, labels: string[], data: number[]): IChart {
        switch (objType) {
            case "BarChart":
                return new BarChart(title, labels, data);
            case "PieChart":
                return new PieChart(title, labels, data);
            default:
                throw new Error("Invalid Chart type");
        }
    }
}



// client code
let chartFactoryObj = new ChartFactory();
let piechartObj: IChart = chartFactoryObj.createChartObj("BarChart", "sale", ["vitara", "creta", "seltos"], [10, 20, 30]);
let barChartObj: IChart = chartFactoryObj.createChartObj("PieChart", "sale", ["R15", "RR310", "Bullet"], [100, 200, 300]);
console.log(piechartObj);
console.log(barChartObj);
