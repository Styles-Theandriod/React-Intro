// Traditional function 
function greet(name){
    return "Hello" + name + "!";
}


//Arrow function 
const greetArrow = (name)=>{
    return "Hello" + name + "!";
}

// Arrow function with implicit return
const greetImplicit = (name)=> "Hello" + name + "!";

// Traditional function
function Person() {
    this.age = 0;
    setInterval(function growUp() {
        this.age++; // 'this' is not pointing to the Person object
    }, 1000);
}

// Arrow function
function Person() {
    this.age = 0;
    setInterval(() => {
        this.age++; // 'this' refers to the Person object
    }, 1000);
}

// Iterating over arrays
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);

// Object methods
const person = {
    name: 'John',
    sayHello: () => {
        console.log('Hello, ' + this.name); // 'this' is not bound to the object
    }
};

// Event handlers in React
const handleClick = () => {
    console.log('Button clicked');
};



// Binding of 'this'
const obj = {
    value: 42,
    getValue: function() {
        return this.value;
    },
    getValueArrow: () => {
        return this.value; // 'this' refers to the global object, not obj
    }
};

console.log(obj.getValue()); // Outputs: 42
console.log(obj.getValueArrow()); // Outputs: undefined

// Presence of 'arguments' object
const traditionalFunc = function() {
    console.log(arguments);
};
traditionalFunc(1, 2, 3); // Outputs: [1, 2, 3]

const arrowFunc = () => {
    console.log(arguments); // ReferenceError: arguments is not defined
};
arrowFunc(1, 2, 3);

// Use as constructors (arrow functions cannot be used as constructors)
// const Foo = () => {};
// const foo = new Foo(); // TypeError: Foo is not a constructor


// ES6 Variables
let x = 10;
x = 20; // Valid

const y = 5;
// y = 10; // Invalid, attempting to reassign a const variable

// Block Scoping with let and const

// Variables declared with let and const are block-scoped, 
// meaning they are only accessible within the block they are defined in.
// This is different from var, which is function-scoped or globally scoped.


{
    let blockScope = 'scopeme'
}

{
    let z = 30;
    const pi = 3.14;
}
// console.log(z); // ReferenceError: z is not defined
// console.log(pi); // ReferenceError: pi is not defined


let tems = 'sabi girl'
console.log(tems);

function greeting(name='world'){
    console.log("Hello " + name + "!");
}

greeting("emmauel")
greeting()

// Destructuring Assignment

// Destructuring assignment allows you to extract values 
// from arrays or properties from objects and assign them to 
// variables in a more concise way.

const Jarvis = {
    firstName : 'Iron',
    lastName : 'Man'
} 

const {firstName, lastName} = Jarvis
console.log(firstName);
console.log(lastName);

list = ['Asake', 'Nasboi', 'Balablue']

let[ item1, item2, item3] = list

console.log(item1)
