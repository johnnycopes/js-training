'use strict';

// CHALLENGE 1 //

/*
Refactor the following code to use ES2015 arrow functions - make sure your function 
is also called tripleAndFilter
*/

function tripleAndFilter(arr) {
	return arr.map(function (value) {
		return value * 3;
	}).filter(function (value) {
		return value % 5 === 0;
	})
}



// CHALLENGE 2 //

/*
Refactor the following code to use ES2015 arrow functions. Make sure your function 
is also called doubleOddNumbers
*/

function doubleOddNumbers(arr) {
	return arr.filter(function (val) {
		return val % 2 !== 0;
	}).map(function (val) {
		return val * 2;
	})
}



// CHALLENGE 3 //

/*
Refactor the following code to use ES2015 arrow functions. Make sure your function 
is also called mapFilterAndReduce
*/

function mapFilterAndReduce(arr) {
	return arr.map(function (val) {
		return val.firstName
	}).filter(function (val) {
		return val.length < 5;
	}).reduce(function (acc, next) {
		acc[next] = next.length
		return acc;
	}, {})
}



// CHALLENGE 4 //

/*
Write a function called createStudentObj which accepts two parameters, firstName 
and lastName and returns an object with the keys of firstName and lastName with 
the values as the parameters passed to the function
*/

// console.log(createStudentObj('Elie', 'Schoppik')); // {firstName: 'Elie', lastName: 'Schoppik'}



// CHALLENGE 5 //

/*
Refactor this code to use arrow functions to make sure that in 1000 milliseconds 
you console.log 'Hello Colt'
*/

var instructor = {
	firstName: "Colt",
	sayHi: function() {
		setTimeout(function () {
			console.log('Hello ' + this.firstName)
		}, 1000)
	}
}