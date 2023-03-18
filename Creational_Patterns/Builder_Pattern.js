// creation of complex objects and having large configurations
// it has four parts mainly 
// 1. Director tells the steps to follows.
// 2. Builder
// 3. ConcreteBuilder.
// 4. Product.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//product class
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.setModel = function (model) {
        this.model = model;
    };
    Car.prototype.setYear = function (year) {
        this.year = year;
    };
    Car.prototype.setColor = function (color) {
        this.color = color;
    };
    Car.prototype.setEngineType = function (engineType) {
        this.engineType = engineType;
    };
    Car.prototype.setNumDoors = function (numDoors) {
        this.numDoors = numDoors;
    };
    return Car;
}());
// builder interface
var CarBuilder = /** @class */ (function () {
    function CarBuilder() {
    }
    CarBuilder.prototype.getCar = function () {
        return this.car;
    };
    CarBuilder.prototype.createNewCar = function () {
        this.car = new Car();
    };
    return CarBuilder;
}());
var HondaBuilder = /** @class */ (function (_super) {
    __extends(HondaBuilder, _super);
    function HondaBuilder() {
        return _super.call(this) || this;
    }
    HondaBuilder.prototype.buildModel = function () {
        this.car.setModel('Honda Civic');
    };
    HondaBuilder.prototype.buildYear = function () {
        this.car.setYear(2022);
    };
    HondaBuilder.prototype.buildColor = function () {
        this.car.setColor('White');
    };
    HondaBuilder.prototype.buildEngineType = function () {
        this.car.setEngineType('Gasoline');
    };
    HondaBuilder.prototype.buildNumDoors = function () {
        this.car.setNumDoors(4);
    };
    return HondaBuilder;
}(CarBuilder));
var CarDirector = /** @class */ (function () {
    function CarDirector() {
    }
    CarDirector.prototype.setBuilder = function (builder) {
        this.carBuilder = builder;
    };
    CarDirector.prototype.getCar = function () {
        return this.carBuilder.getCar();
    };
    CarDirector.prototype.buildCar = function () {
        this.carBuilder.createNewCar();
        this.carBuilder.buildModel();
        this.carBuilder.buildYear();
        this.carBuilder.buildColor();
        this.carBuilder.buildEngineType();
        this.carBuilder.buildNumDoors();
    };
    return CarDirector;
}());
// Client code
var director = new CarDirector();
var hondaBuilder = new HondaBuilder();
director.setBuilder(hondaBuilder);
director.buildCar();
var hondaCar = director.getCar();
console.log(hondaCar);
// simple example
var ButtonBuilder = /** @class */ (function () {
    function ButtonBuilder() {
        this.button = document.createElement('button');
    }
    ButtonBuilder.prototype.setText = function (text) {
        this.button.textContent = text;
        return this;
    };
    ButtonBuilder.prototype.setSize = function (size) {
        var _this = this;
        var sizes = ['small', 'medium', 'large'];
        sizes.forEach(function (s) { return _this.button.classList.remove("btn-".concat(s)); });
        this.button.classList.add("btn-".concat(size));
        return this;
    };
    ButtonBuilder.prototype.setVariant = function (variant) {
        var _this = this;
        var variants = ['primary', 'secondary', 'success', 'danger', 'warning'];
        variants.forEach(function (v) { return _this.button.classList.remove("btn-".concat(v)); });
        this.button.classList.add("btn-".concat(variant));
        return this;
    };
    ButtonBuilder.prototype.setDisabled = function (disabled) {
        if (disabled) {
            this.button.setAttribute('disabled', '');
        }
        else {
            this.button.removeAttribute('disabled');
        }
        return this;
    };
    ButtonBuilder.prototype.build = function () {
        return this.button;
    };
    return ButtonBuilder;
}());
// Example usage
var button = new ButtonBuilder()
    .setText('Click me!')
    .setSize('medium')
    .setVariant('primary')
    .setDisabled(false)
    .build();
document.body.appendChild(button);
