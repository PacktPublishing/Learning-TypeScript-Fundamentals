getName();

function getName() {
    return 'John';
}

const getNameExpression = function () {
    return 'John expression';
};

let age: number = 26;
let names: string[] = [];

function addName(...nameArr: string[]): string[] {
    nameArr.forEach(function (name) {
        names.push(name);
    });

    return names;
}

console.log(addName('John', 'Sam', 'Will'));

Number.toString();
String.toString();
Function.toString();


function primitiveTostring<T>(type: T): string {
    return type.toString();
}

const primitives = [Number, Boolean, String];

primitives.forEach(function (primitive) {
    console.log(primitiveTostring(primitive));
});

