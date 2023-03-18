// creation of complex objects and having large configurations
// it has four parts mainly 
// 1. Director tells the steps to follows.
// 2. Builder
// 3. ConcreteBuilder.
// 4. Product.

//product class
class Car {
    private model: string;
    private year: number;
    private color: string;
    private engineType: string;
    private numDoors: number;
  
    constructor() {}
  
    setModel(model: string) {
      this.model = model;
    }
  
    setYear(year: number) {
      this.year = year;
    }
  
    setColor(color: string) {
      this.color = color;
    }
  
    setEngineType(engineType: string) {
      this.engineType = engineType;
    }
  
    setNumDoors(numDoors: number) {
      this.numDoors = numDoors;
    }
  }

// builder interface
abstract class CarBuilder {
    protected car: Car;
  
    constructor() {}
  
    getCar() {
      return this.car;
    }
  
    createNewCar() {
      this.car = new Car();
    }
  
    abstract buildModel(): void;
    abstract buildYear(): void;
    abstract buildColor(): void;
    abstract buildEngineType(): void;
    abstract buildNumDoors(): void;
  }
  
  
  
class HondaBuilder extends CarBuilder {
    constructor() {
      super();
    }
  
    buildModel() {
      this.car.setModel('Honda Civic');
    }
  
    buildYear() {
      this.car.setYear(2022);
    }
  
    buildColor() {
      this.car.setColor('White');
    }
  
    buildEngineType() {
      this.car.setEngineType('Gasoline');
    }
  
    buildNumDoors() {
      this.car.setNumDoors(4);
    }
  }
  
  class CarDirector {
    private carBuilder: CarBuilder;
  
    constructor() {}
  
    setBuilder(builder: CarBuilder) {
      this.carBuilder = builder;
    }
  
    getCar() {
      return this.carBuilder.getCar();
    }
  
    buildCar() {
      this.carBuilder.createNewCar();
      this.carBuilder.buildModel();
      this.carBuilder.buildYear();
      this.carBuilder.buildColor();
      this.carBuilder.buildEngineType();
      this.carBuilder.buildNumDoors();
    }
  }
  
  // Client code
  const director = new CarDirector();
  const hondaBuilder = new HondaBuilder();
  
  director.setBuilder(hondaBuilder);
  director.buildCar();
  
  const hondaCar = director.getCar();
  console.log(hondaCar);

// simple example

class ButtonBuilder {
    private button: HTMLButtonElement;
  
    constructor() {
      this.button = document.createElement('button');
    }
  
    setText(text: string) {
      this.button.textContent = text;
      return this;
    }
  
    setSize(size: 'small' | 'medium' | 'large') {
      const sizes = ['small', 'medium', 'large'];
      sizes.forEach(s => this.button.classList.remove(`btn-${s}`));
      this.button.classList.add(`btn-${size}`);
      return this;
    }
  
    setVariant(variant: 'primary' | 'secondary' | 'success' | 'danger' | 'warning') {
      const variants = ['primary', 'secondary', 'success', 'danger', 'warning'];
      variants.forEach(v => this.button.classList.remove(`btn-${v}`));
      this.button.classList.add(`btn-${variant}`);
      return this;
    }
  
    setDisabled(disabled: boolean) {
      if (disabled) {
        this.button.setAttribute('disabled', '');
      } else {
        this.button.removeAttribute('disabled');
      }
      return this;
    }
  
    build(): HTMLButtonElement {
      return this.button;
    }
  }
  
  // Example usage
  const button = new ButtonBuilder()
    .setText('Click me!')
    .setSize('medium')
    .setVariant('primary')
    .setDisabled(false)
    .build();
  
  document.body.appendChild(button);
  