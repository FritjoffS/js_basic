// Functions

// Declare a fuction
function greet() {
  console.log('Hello World');
}
// call the function
greet();

// declare another function 
function hello(name) {
  console.log('Hello ' + name)
}
// calling and passing a value
hello('John');
hello('Mary');

// declare another fuction
// performing a task, display something on the console
function holla(fName, lastName) {
  console.log('Hello ' + fName + ' ' + lastName)
}
// calling and passing a value
holla('John', 'Smith');

// functions with calculations
function square(number) {
  return Math.pow(number, number); // number * number; // this is reurned
};

// This is one way of doing this
let number = square(2); // calling function and passing a value
console.log(number); // printing to console

// This is another way of doing this
console.log(square(2)); // Printing, calling and passing the value of 2, but not assingning it to "number"
