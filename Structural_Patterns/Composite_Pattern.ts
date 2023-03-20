// composite pattern 
// Design the file system through composite pattern
// every node implements Interface 


abstract class FileSystems {
    protected name: string;
    constructor(name: string) {
        this.name = name;
    }

    //operations must implemented by all nodes
    public abstract getSize(): number;
    public abstract print(): void;
}

// file
class Files extends FileSystems {
    private size: number;

    constructor(name: string, size: number) {
        super(name);
        this.size = size;
    }
    // return the size of file
    public getSize(): number {
        return this.size;
    }
    // print the file name and size of file
    public print(): void {
        console.log(`File: ${this.name}, Size: ${this.size}`);
    }

}


/* The Directory class is a subclass of FileSystems that has a name, a size, and an array of children. */
class Directory extends FileSystems {

    private children: FileSystems[];
    constructor(name: string) {
        super(name);
        this.children = [];
    }

    // get size of all files in root directory
    public getSize(): number {
        let size = 0;
        for (let i = 0; i < this.children.length; i++) {
            size += this.children[i].getSize();
        }
        return size;
    }

    /**
     * For each child, call the print function on that child.
     */
    public print(): void {
        for (let i = 0; i < this.children.length; i++) {
            this.children[i].print();
        }
    }
    /**
     * The above function takes a parameter of type FileSystems and adds it to the children array.
     * @param {FileSystems} file - FileSystems - This is the file that will be added to the directory.
     */
    public add(file: FileSystems): void {
        this.children.push(file);
    }

    /**
     * It removes the file from the children array.
     * @param {FileSystems} file - FileSystems - This is the file that we want to remove from the children
     * array.
     */
    public remove(file: FileSystems): void {
        this.children.splice(this.children.indexOf(file), 1);
    }
}


// create file object
let file = new Files("file.txt", 100);

// create directory object
let dir = new Directory("Dir");
dir.add(file);
let gameDir = new Directory("game");
let gameFile = new Files("Gta.exe", 10000);
gameDir.add(gameFile);
dir.add(gameDir);
// print all file name
console.log(dir.print());
// get size of all files
console.log(dir.getSize());
