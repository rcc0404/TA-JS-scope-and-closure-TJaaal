// 1. What does thread of execution means in JavaScript ?
//Ans:-    
var user = "Arya";

function sayHello(){
  return `Hello ${user}`;
}

var userMsg = sayHello(user);

// 2. Where the JavaScript code gets executed?

//Ans:-JavaScript Engine

// 3. What does context means in Global Execution Context?

//Ans:-Environment means where code is executed.

// 4. When do you create a global execution context.

//Ans:- Global execution context will be created in the start.

// 5. Execution context consists of what all things?

//Ans:- Two thing One- memory which is store in var/function
//Second - operation/execution/manipulation

// 6. What are the different types of execution context?

//Ans:- Global execution & function execution context

// 7. When global and function execution context gets created?

// Ans:- Global execution context will be created in Start
// Function execution context will be created in when function execution.

// 8. Function execution gets created during function execution or while declaring a function.

//Ans:- execution

// 9. Create a execution context diagram of the following code on your notebook. Take a screenshot/photo and store it in the folder named `img`. Use `![](./img/image-name.png)` to display it here.

var user = "Arya";

function sayHello(){
  return `Hello ${user}`;
}

var userMsg = sayHello(user);


// <!-- Put your image here -->

![](./img/image-name.jpg)



```js
var marks = 400;
var total = 500;

function getPercentage(amount, totalAmount){
  return (amount * 100) / totalAmount;
}

var percentageMarks = getPercentage(marks, total);
var percentageProfit = getPercentage(400, 200);
```

<!-- Put your image here -->

![](./img/image-name.jpg)



```js
var age = 21;

function customeMessage(userAge){
  if(userAge > 18){
    return `You are an adult`;
  }else {
    return `You are a kid`;
  }
}

var whoAmI = customeMessage(age);
var whoAmIAgain = customeMessage(12);
```

<!-- Put your image here -->

![](./img/image-name.jpg)