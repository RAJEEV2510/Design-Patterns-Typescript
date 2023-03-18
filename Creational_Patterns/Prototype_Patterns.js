// prototype patterns
// cloning objects from existing objects at run time
var prototype = /** @class */ (function () {
    function prototype(name, age) {
        this.name = name;
        this.age = age;
    }
    prototype.prototype.clone = function () {
        /* Calling the constructor of the class. */
        console.log(this.age, this.name);
        return new prototype(this.name, this.age);
    };
    return prototype;
}());
var p1 = new prototype("John", 20);
var p2 = p1.clone();
console.log(p1, p2);
var PrimaryButton = /** @class */ (function () {
    function PrimaryButton() {
        this.label = "Primary";
        this.color = "#007bff";
        this.onClick = function () { return console.log("Primary button clicked"); };
    }
    /**
     * The clone() function returns a new instance of the PrimaryButton class.
     * @returns A new instance of the PrimaryButton class.
     */
    PrimaryButton.prototype.clone = function () {
        return new PrimaryButton();
    };
    return PrimaryButton;
}());
var SecondaryButton = /** @class */ (function () {
    function SecondaryButton() {
        this.label = "Secondary";
        this.color = "#ffc107";
        this.onClick = function () { return console.log("Secondary button clicked"); };
    }
    /**
     * The clone() function returns a new instance of the SecondaryButton class.
     * @returns A new instance of SecondaryButton.
     */
    SecondaryButton.prototype.clone = function () {
        return new SecondaryButton();
    };
    return SecondaryButton;
}());
var primaryButtonObj = new PrimaryButton();
/* Creating a new object from the existing object. */
var dangerButtonObj = primaryButtonObj.clone();
dangerButtonObj.color = 'red';
dangerButtonObj.label = 'Danger';
dangerButtonObj.onClick = function () { return console.log("Danger button clicked"); };
console.log(primaryButtonObj);
console.log(dangerButtonObj);
