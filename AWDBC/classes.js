'use strict';

// CHALLENGE 1 //

/*
Create a class for a Person. Each person should have a firstName, lastName, favoriteColor, favoriteNumber
*/



// CHALLENGE 2 //

/*
Add an instance method called fullName that returns the firstName and lastName property of an object created by the Person constructor concatenated together
*/

// var person = new Person("Elie", "Schoppik", "purple", 34)
// console.log(person.fullName()); // "Elie Schoppik"



// CHALLENGE 3 //

/*
Add a property on the object created from the Person function called family which is an empty array
*/



// CHALLENGE 4 //

/*
Add a instance method called addToFamily which adds an object constructed from the Person constructor to the family array. To make sure that the object you are adding is an object construced from the Person constructor (HINT - take a look at the instanceof keyword). Make sure that your family array does not include duplicates! This method should return the length of the family array
*/

// var person = new Person("Elie", "Schoppik", "purple", 34)
// var anotherPerson = new Person()
// console.log(person.addToFamily(anotherPerson)); // 1
// console.log(person.addToFamily(anotherPerson)); // 1
// console.log(person.family.length); // 1

// console.log(person.addToFamily("test")); // 1
// console.log(person.addToFamily({})); // 1
// console.log(person.addToFamily([])); // 1
// console.log(person.addToFamily(false)); // 1
// console.log(person.family.length); // 1