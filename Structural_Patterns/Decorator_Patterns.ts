// Decorator Pattern 
// Design Parking Systems

/* Defining the interface for the class BasiParkingLot. */
interface ParkingLot {
    park(Vehicle: Vehicle): void;
    unpark(Vehicle: Vehicle): void;
    getAvaiableSpace(): number;
    getParkedVehicles(): Vehicle[];
}


/* The Vehicle class is a blueprint for creating objects that have the properties name, color, type,
id, and isParked. */
class Vehicle {
    public name: string;
    public color: string;
    public type: string;
    public id: number;
    public isParked: boolean;

    constructor(name: string, color: string, type: string, id: number) {
        this.name = name;
        this.color = color;
        this.type = type;
        this.id = id;
        this.isParked = false;
    }

}


class BasicParkingLot implements ParkingLot {
    private _vehicles: Vehicle[];
    private _availableSpace: number;

    constructor(availableSpace: number) {
        this._vehicles = [];
        this._availableSpace = availableSpace;
    }

    park(vehicle: Vehicle): void {
        if (this._availableSpace > 0) {
            vehicle.isParked = true;
            this._vehicles.push(vehicle);
            this._availableSpace -= 1;
            console.log(this._vehicles);
        }

    }

    unpark(vehicle: Vehicle): void {
        if (this._vehicles.length > 0) {
            vehicle.isParked = false;
            this._vehicles = this._vehicles.filter(v => v.id !== vehicle.id);
            this._availableSpace += 1;
            console.log(this._vehicles);
        }
    }

    getAvaiableSpace(): number {
        return this._availableSpace;
    }

    getParkedVehicles(): Vehicle[] {
        return this._vehicles;
    }

}

class SecurityCameraDecorator implements ParkingLot {
    private _parkingLot: BasicParkingLot;

    constructor(parkingLot: BasicParkingLot) {
        this._parkingLot = parkingLot;
    }

    park(vehicle: Vehicle): void {
        console.log(`Security camera recorded vehicle {vehicle.getLicensePlate()} entering the parking lot.`);
        this._parkingLot.park(vehicle);
    }

    unpark(vehicle: Vehicle): void {
        console.log(`Security camera recorded vehicle {vehicle.getLicensePlate()} entering the parking lot.`);
        this._parkingLot.unpark(vehicle);
    }

    getAvaiableSpace(): number {
        return this._parkingLot.getAvaiableSpace();
    }
    getParkedVehicles(): Vehicle[] {
        return this._parkingLot.getParkedVehicles();
    }
}

let VehicleList: Vehicle[] = [];
for (var counter = 1; counter < 10; counter++) {
    var vehicle: Vehicle = new Vehicle("creta" + counter, "red", "suv", counter);
    VehicleList.push(vehicle);
}



let parkingLot: BasicParkingLot = new BasicParkingLot(10);
let cameraDecorator: SecurityCameraDecorator = new SecurityCameraDecorator(parkingLot);
cameraDecorator.park(VehicleList[0]);
cameraDecorator.park(VehicleList[1]);

cameraDecorator.unpark(VehicleList[0])
console.log(cameraDecorator.getParkedVehicles());
