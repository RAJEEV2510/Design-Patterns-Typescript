
// singleton pattern 

class Singleton {
   /* A private static variable that holds the single instance of the Singleton class. */
    private static instance: Singleton; 
    private constructor() {}
    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }


}

let singletonObj1 = Singleton.getInstance();
let singletonObj2 = Singleton.getInstance();
console.log(singletonObj1 == singletonObj2);