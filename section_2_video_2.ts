getName();

function getName() {
    return 'John';
}

const getNameExpression = function () {
    return 'John expression';
};

let age: number = 26;
let names: string[] = [];

const addName = (...nameArr: string[]): string[] => {
    nameArr.forEach(function (name) {
        names.push(name);
    });

    return names;
};

console.log(addName('John', 'Sam', 'Will'));

Number.toString();
String.toString();
Function.toString();


function primitiveTostring<T>(type: T): string {
    return type.toString();
}

const primitives = [Number, Boolean, String];

primitives.forEach((primitive) =>
    console.log(primitiveTostring(primitive))
);


function ChatRoom() {
    this.numOfPersons = 0;

    this.addPerson = (): void => {
        this.numOfPersons++;
        console.log(this.numOfPersons)
    }
}

const room = new ChatRoom();

//setInterval(room.addPerson, 500);

//callback
const doSmthWithData = (data: any): void => {
    console.log('callback with ', data);
};

function addNumber(a: number, b: number, callback: (data: any) => void): number {
    const result = a + b;
    //6
    callback(result);
    return result;
}

addNumber(2, 4, doSmthWithData);
