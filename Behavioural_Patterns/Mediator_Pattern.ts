// mediator pattern

// Mediator interface
interface ATCMediator {
    notify(airplane: Airplane, event: string): void;
}

// Concrete Mediator
class ATCTower implements ATCMediator {
    private airplanes: Airplane[] = [];

    notify(airplane: Airplane, event: string): void {
        if (event === 'takeoff') {
            console.log(`${airplane.name} is taking off`);
        } else if (event === 'landing') {
            console.log(`${airplane.name} is landing`);
            this.checkForCollisions(airplane);
        }
    }

    register(airplane: Airplane): void {
        this.airplanes.push(airplane);
    }

    private checkForCollisions(airplane: Airplane): void {
        for (const otherPlane of this.airplanes) {
            if (otherPlane !== airplane && otherPlane.altitude === airplane.altitude) {
                console.log(`WARNING: ${airplane.name} and ${otherPlane.name} are dangerously close!`);
            }
        }
    }
}

// Colleague
abstract class Airplane {
    constructor(protected mediator: ATCMediator, public name: string, public altitude: number) { }

    abstract takeOff(): void;
    abstract land(): void;
}

// Concrete Colleague
class Boeing747 extends Airplane {
    constructor(mediator: any, name: string, altitude: number) {
        super(mediator, name, altitude);
        mediator.register(this);
    }

    takeOff(): void {
        console.log(`Requesting takeoff clearance for ${this.name}`);
        this.mediator.notify(this, 'takeoff');
    }

    land(): void {
        console.log(`Requesting landing clearance for ${this.name}`);
        this.mediator.notify(this, 'landing');
    }
}

// Usage
const tower = new ATCTower();
const boeing1 = new Boeing747(tower, 'Boeing 747-1', 1000);
const boeing2 = new Boeing747(tower, 'Boeing 747-2', 2000);
boeing1.takeOff(); // Requesting takeoff clearance for Boeing 747-1
boeing2.takeOff(); // Requesting takeoff clearance for Boeing 747-2
boeing1.land(); // Requesting landing clearance for Boeing 747-1
