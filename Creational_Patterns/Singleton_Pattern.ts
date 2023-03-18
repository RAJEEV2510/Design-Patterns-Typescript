
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

let singleton = Singleton.getInstance();
console.log(singleton);