// Tradition function 
function greet(name){
    return 'Hello ' + name + '!';
}

console.log(greet('emmanuel'))


const greetArrow = (name)=>{
    return 'Hello ' + name + '!';
}

console.log(greetArrow('Balablue'));


// Arrow function with implicit return
const myArrow = (name)=>'Hello ' + name + '!'

console.log(myArrow('Bizmarrow'));


// Iterating over arrays

navMenu = ["Home", "About", "Services", "Contact"]

let myArray = navMenu.map((item)=> item)
console.log(myArray);

// Event handlers in React

const ClickMe = () => {
    console.log('Button clicked');
};


// Presence of 'arguments' object
const traditionalFunc = function() {
    console.log(arguments);
};
traditionalFunc(1, 2, 3); // Outputs: [1, 2, 3]

const arrowFunc = () => {
    console.log(arguments); // ReferenceError: arguments is not defined
}
arrowFunc(1, 2, 3);



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
    const name = 'Zarah'
    console.log(name);
}

const name = 'abdul'

console.log(name);


// default parameters in function 

function greeting(name='world'){
    console.log("Hello " + name + "!");
}

greeting('emmanuel')
greeting()

// Destructuring 
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


const Products = ['Iphone', 'Samsung', 'Redmi', 'infinix', 'Techo', 'itel']

const  [items1, items2, items3, ...items4] = Products

console.log(items1, items2, items3,  items4);



// Arrays Method in javascript 

let Arrays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
Arrays.push(1, 2, 3, 4, 5, 6, 7)
console.log(Arrays);

console.log(Arrays.length); 

speed = 300

var result = (speed > 10) ? "speed is greater than 10" : (speed < 10) ? "speed is less than 10" : "speed is equal to 10";
console.log(result); 

const greetings =`<h1> Hello React</h1>` 

console.log(greetings);

const header = (
    <header>npx create-react-app my-react-app

        <h1>I am mr header</h1>
    </header>
)

const container = (
    <div>
        <a herf="http://"></a>
    </div>
)








