// prototype patterns
// cloning objects from existing objects at run time
 
class prototype{

    public name:string;
    public age:number;

    constructor(name:string,  age:number){
        this.name = name;
        this.age = age;
    }
    clone(){
        /* Calling the constructor of the class. */
        console.log(this.age,this.name)
        return  new prototype(this.name, this.age);
    }
}

let p1 = new prototype("John", 20);
let p2 = p1.clone();
console.log(p1,p2);




/* Defining the interface for the button prototype. */
interface ButtonPrototype {
    label: string;
    color: string;
    onClick: () => void;
    clone(): ButtonPrototype;
  }

class PrimaryButton implements ButtonPrototype {
    public label: string = "Primary";
    public color: string = "#007bff";
    public onClick: () => void = () => console.log("Primary button clicked");
    constructor() { }
   /**
    * The clone() function returns a new instance of the PrimaryButton class.
    * @returns A new instance of the PrimaryButton class.
    */
    clone(): ButtonPrototype {
        return new PrimaryButton();
    }
}


class SecondaryButton implements ButtonPrototype {
    public label: string = "Secondary";
    public color: string = "#ffc107";
    public onClick: () => void = () => console.log("Secondary button clicked");
    constructor() { }
   /**
    * The clone() function returns a new instance of the SecondaryButton class.
    * @returns A new instance of SecondaryButton.
    */
    clone(): ButtonPrototype {
        return new SecondaryButton();
    }
}

let primaryButtonObj = new PrimaryButton();
/* Creating a new object from the existing object. */
let dangerButtonObj = primaryButtonObj.clone();
dangerButtonObj.color='red';
dangerButtonObj.label='Danger';
dangerButtonObj.onClick = () => console.log("Danger button clicked");
console.log(primaryButtonObj);
console.log(dangerButtonObj);