class Person {
    public hobby: string;

    static numOfPersons: number = 0;

    constructor(private name: string, private age: number) {
        Person.numOfPersons++;
    }

    info(): void {
        console.log(this.name, ' ', this.age);
    }
}


const john = new Person('John', 26);
john.info();


class Player extends Person {
    constructor(name: string, age: number) {
        super(name, age);
    }
}

const hank = new Player('Hank', 30);
hank.info();
console.log(john);
console.log(hank);

class Player extends Person {
    constructor(name: string, age: number) {
        super(name, age);
    }
}

const ronaldo = new Player('Ronaldo', 32);
ronaldo.info();
