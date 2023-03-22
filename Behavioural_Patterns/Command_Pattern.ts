// encapsulates a request as an object


// Define the interface for the command
interface Command {
    execute(): void;
}

// Define concrete commands for starting and stopping the engine
class StartEngineCommand implements Command {
    private car: Car;

    constructor(car: Car) {
        this.car = car;
    }

    execute() {
        this.car.startEngine();
    }
}

class StopEngineCommand implements Command {
    private car: Car;

    constructor(car: Car) {
        this.car = car;
    }

    execute() {
        this.car.stopEngine();
    }
}

// Define concrete commands for accelerating and decelerating the car
class AccelerateCommand implements Command {
    private car: Car;

    constructor(car: Car) {
        this.car = car;
    }

    execute() {
        this.car.accelerate();
    }
}

class DecelerateCommand implements Command {
    private car: Car;

    constructor(car: Car) {
        this.car = car;
    }

    execute() {
        this.car.decelerate();
    }
}

// Define the receiver of the commands (the car)
class Car {
    private isEngineOn: boolean = false;
    private speed: number = 0;

    startEngine() {
        this.isEngineOn = true;
        console.log('Engine started');
    }

    stopEngine() {
        this.isEngineOn = false;
        console.log('Engine stopped');
    }

    accelerate() {
        this.speed += 10;
        console.log(`Speed is now ${this.speed} km/h`);
    }

    decelerate() {
        this.speed -= 10;
        console.log(`Speed is now ${this.speed} km/h`);
    }
}

// Define the invoker that will execute the commands (the race)
class Race {
    private commands: Command[] = [];
    private car: Car;

    constructor(car: Car) {
        this.car = car;
    }

    addCommand(command: Command) {
        this.commands.push(command);
    }

    execute() {
        this.commands.forEach(command => command.execute());
    }

}

let race = new Race(new Car());
let car = new Car();
race.addCommand(new StartEngineCommand(car));
race.addCommand(new DecelerateCommand(car));
race.addCommand(new AccelerateCommand(car));
race.addCommand(new StopEngineCommand(car));
race.execute();
