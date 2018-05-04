// Closures, Scope, and Execution Context

// CHALLENGE 1 //

/*
Create a function createFunction that creates and returns a function. When that created function is called, it should print "hello".
*/

function createFunction() {

}

// var function1 = createFunction();
// function1();



// CHALLENGE 2 //

/*
Create a function createFunctionPrinter that accepts one input and returns a function. When that created function is called, it should print out the input that was used when the function was created.
*/

function createFunctionPrinter(input) {

}

// var printSample = createFunctionPrinter('sample');
// printSample();
// var printHello = createFunctionPrinter('hello');
// printHello();



// CHALLENGE 3 //

/*
Examine the code for the outer function. Notice that we are returning a function and that function is using variables that are outside of its scope.
*/

// function outer() {
// 	var counter = 0; // this variable is outside incrementCounter's scope
// 	function incrementCounter() {
// 		counter++;
// 		console.log('counter', counter);
// 	}
// 	return incrementCounter;
// }

// var willCounter = outer();
// var jasCounter = outer();

/*
Uncomment each of these lines one by one.
Before your do, guess what will be logged from each function call.
*/

// willCounter();
// willCounter();
// willCounter();

// jasCounter();
// willCounter();



// CHALLENGE 4 //

/*
Now we are going to create a function addByX that returns a function that will add an input by x.
*/

function addByX(x) {

}

// var addByTwo = addByX(2);
// console.log(addByTwo(1)); // 3
// console.log(addByTwo(2)); // 4
// console.log(addByTwo(3)); // 5

// var addByThree = addByX(3);
// console.log(addByThree(1)); // 4
// console.log(addByThree(2)); // 5

// var addByFour = addByX(4);
// console.log(addByFour(4)); // 8
// console.log(addByFour(10)); // 14



// CHALLENGE 5 //

/*
Write a function once that accepts a callback as input and returns a function. When the returned function is called the first time, it should call the callback and return that output. If it is called any additional times, instead of calling the callback again it will simply return the output value from the first time it was called.
*/

function once(func) {

}

var onceFunc = once(addByTwo);

// console.log(onceFunc(4));  // 6
// console.log(onceFunc(10));  // 6
// console.log(onceFunc(9001));  // 6



// CHALLENGE 6 //

/*
Write a function after that takes the number of times the callback needs to be called before being executed as the first parameter and the callback as the second parameter.
*/

function after(count, func) {

}

// var called = function () { console.log('hello') };
// var afterCalled = after(3, called);

// afterCalled(); // (nothing is printed)
// afterCalled(); // (nothing is printed)
// afterCalled(); // 'hello'



// CHALLENGE 7 //

/*
Write a function delay that accepts a callback as the first parameter and the wait in milliseconds before allowing the callback to be invoked as the second parameter. Any additional arguments after wait are provided to func when it is invoked. HINT: research setTimeout();
*/

function delay(func, wait) {

}