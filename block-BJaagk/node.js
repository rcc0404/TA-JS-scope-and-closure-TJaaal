// 1. Convert the function below into different forms of function expression.


function percentage(marks, total) {
  return (marks * 100) / total;
}


// Your code goes here
let percentage = function percentage(marks, total) {
  return (marks * 100) / total;
}

let percentage = function(marks, total) {
  return (marks * 100) / total;
}

let percentage = (marks, total) => {
  return (marks * 100) / total;
}

let percentage = (marks, total) => (marks * 100) / total;


// 2. Write Function Declaration or Function Expression next to the function.


function percentage(marks, total) {
  return (marks * 100) / total;
}
// Function Declaration


let percentage = function percentage(marks, total) {
  return (marks * 100) / total;
};
// Function Expression


let percentage = function (marks, total) {
  return (marks * 100) / total;
};
//Function Expression


let percentage = (marks, total) => {
  return (marks * 100) / total;
};
//Function Expression


let percentage = (marks, total) => (marks * 100) / total;
//Function Expression


// 3. Why is a function definition an expression in JavaScript? Give one example of function expression.

//number, string, null, boolean, undefined, object

function add() {

}
let obj = {};

let add = function () { };

// 4. Why is a function call an expression in JavaScript?

//Functions call always return vlaue in right side else undfined which is also undefined

function add(a, b) {
    return a + b;
}
function addAgain(a, b) {
    
}

add(12, 23); //35

addAgain(); //undefined

// 5. Write VALID and INVALID next to each example below with the reason.

function add(a, b) {
  return a + b;
}

let five = add(2, 3); // Valid 5
five = add; // Valid
five = five(10, 11); // Valid 21
five = function () {
  return 'Hello';
}; // Hello


// 6. What is the difference between function definition and function call? Explain with an example.

function add() { //function defination

}

add(); //function call

// 7. What is the similarities between function definition and function call?

//Ans:- function defination is an expression (function is an object)
//function call is an expression (function call always return a value)


// 8. Is the code below valid or invalid. Explain with reason.


function hello() {
  console.log('Hello World!');
}

hello.user = 'Sam'; // valid


//9. What is higher order function explain with an example.

// - That accepts a function defination
// - That return a fucntion defination

function add(cb) { //HOF
    function main() { }
    return main
}

//10. Explain what is callback function. Why you can pass a function inside a function?

//Because  function is an expression in JS we can pass a fucntion inside another  fucntion