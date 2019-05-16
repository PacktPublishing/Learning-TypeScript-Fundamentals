interface Person {
    name: string,
    age: number
}

const john: Person = {
    name: 'John',
    age: 26
};

interface Vehicle {
    drive(): any;
}

class Car implements Vehicle {
    drive(): void {
        console.log('driving a car');
    }
}

class Bicycle implements Vehicle {
    drive(): void {
        console.log('driving a bicycle');
    }
}

const car = new Car();
const bike = new Bicycle();

car.drive();
bike.drive();