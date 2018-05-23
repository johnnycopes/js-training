'use strict';

// CHALLENGE 1 //

/*
Create a constructor function for a Person. Each person should have a firstName, 
lastName, favoriteColor, favoriteNumber)
*/



// CHALLENGE 2 //

/*
Add a function on the Person.prototype called fullName that returns the firstName 
and lastName property of an object created by the Person constructor concatenated together
*/

// var person = new Person("Elie", "Schoppik", "purple", 34)
// person.fullName() // "Elie Schoppik"



// CHALLENGE 3 //

/*
Add a property on the object created from the Person function called 
family which is an empty array
*/

// function add(a, b) {
// 	return a + b
// }

// var addOnlyThreeTimes = invokeMax(add, 3);
// console.log(addOnlyThreeTimes(1, 2)); // 3
// console.log(addOnlyThreeTimes(2, 2)); // 4
// console.log(addOnlyThreeTimes(1, 2)); // 3
// console.log(addOnlyThreeTimes(1, 2)); // "Maxed Out!"



// CHALLENGE 4 //

/*
Add a function on the Person.prototype called addToFamily which adds an 
object constructed from the Person constructor to the family array. To make 
sure that the object you are adding is an object construced from the Person 
constructor (HINT - take a look at the instanceof keyword). Make sure that 
your family array does not include duplicates! This method should 
return the length of the family array.
*/

// var anotherPerson = new Person()
// console.log(person.addToFamily(anotherPerson)); // 1
// console.log(person.addToFamily(anotherPerson)); // 1
// console.log(person.family.length); // 1

// console.log(person.addToFamily("test")); // 1
// console.log(person.addToFamily({})); // 1
// console.log(person.addToFamily([])); // 1
// console.log(person.addToFamily(false)); // 1
// console.log(person.family.length); // 1



// CHALLENGE 5 //

/*
Implement your own version of Array.prototype.map. The function should accept 
a callback and return a new array with the result of the callback for 
each value in the array.
*/



// CHALLENGE 6 //

/*
Implement a function called reverse that reverses a string and place 
it on the String.prototype
*/

// console.log("test".reverse()); // "tset"
// console.log("tacocat".reverse()); // "tacocat"