// adapter pattern has 2 mains things
// 1. Adapter that convert into required format
// 2. Adaptee Exiting Method

export interface IWeightMachine {
    getWeight(): number;
}


// weighting machine
export class WeightMachine implements IWeightMachine {

    // return weight in pounds
    getWeight(): number {
        return 300;
    }
}


// client wants weight in kg();
export interface IWeightMachineAdapter {
    getWeightInkg(): number;
}



/* The WeightMachineAdapter class implements the IWeightMachineAdapter interface and adapts the
IWeightMachine interface to the IWeightMachineAdapter interface. */
export class WeightMachineAdapter implements IWeightMachineAdapter {

    // return weight in kg
    getWeightInkg(): number {
        return this.weightMachine.getWeight() * 0.453592;
    }

    constructor(private weightMachine: IWeightMachine) {
    }
}



// client wants weight in kg();
let weightMachine: IWeightMachine = new WeightMachine();
console.log(weightMachine.getWeight(), "pounds");
let adapter: IWeightMachineAdapter = new WeightMachineAdapter(weightMachine);
console.log(adapter.getWeightInkg(), "kg");



// adapter design pattern mainly used for converting into one format to require format
//Ex- client needs into json and in database store into xml
