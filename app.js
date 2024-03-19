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
const Foo = () => {};
const foo = new Foo(); // TypeError: Foo is not a constructor
