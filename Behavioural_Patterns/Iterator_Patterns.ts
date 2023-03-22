//iterator patterns
// In iterator Pattern access the next element through iterator without knowing the data structure of storing the elements


// implement own collection

/* Defining an interface for an iterator. */
interface iterator<T> {
    next(): T | undefined;
    hasNext(): boolean;
}

interface User {
    id: number,
    name: string,
    email: string
}



const users: User[] = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com' }
];


/* The UserIterator class implements the iterator interface and provides a next() and hasNext() method
to iterate over the users array. */
class UserIterator implements iterator<User> {
    private users: User[];
    private index: number;

    constructor(users: User[]) {
        this.users = users;
        this.index = 0;
    }

    next(): User | undefined {
        if (this.hasNext()) {
            const user = this.users[this.index];
            this.index++;
            return user;
        }
        return undefined;
    }

    hasNext(): boolean {
        return this.index < this.users.length;
    }
}

const userIterator = new UserIterator(users);

while (userIterator.hasNext()) {
    const user = userIterator.next();
    console.log(user);
}



