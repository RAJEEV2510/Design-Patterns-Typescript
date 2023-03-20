// proxy pattern

/* Defining the interface for the class. */
interface Image {
    displayImage(file: string): void;
}


// RealImage Class Obj
class RealImage implements Image {

    constructor(file: string) {
        this.displayImage(file);
    }

    /**
     * `displayImage` is a function that takes a file as an argument and logs a message to the console.
     * @param file - The file to load.
     */
    displayImage(file): void {
        console.log(`load image from disk ${file}`);
    }
}


/* "The ProxyImage class is a wrapper class that wraps the RealImage class. It creates a RealImage
object only when the displayImage() method is called."

The ProxyImage class implements the Image interface. It has a private RealImage object and a private
string variable. The constructor takes a string parameter and assigns it to the private string
variable */
class ProxyImage implements Image {

    private realImage: RealImage;
    private file: string;

    constructor(file: string) {
        this.file = file;
    }

    /**
     * If the realImage object is not instantiated, instantiate it, otherwise call the displayImage
     * function on the realImage object
     */
    displayImage(): void {
        if (!this.realImage) {
            this.realImage = new RealImage("file");
        }
        else {
            this.realImage.displayImage(this.file);
        }

    }
}

// lazy load the image when we need 
let image = new ProxyImage("file");
image.displayImage();

