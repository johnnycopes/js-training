'use strict';

// CHALLENGE 1 //

/*
Write a function called filterByValue which accepts an array of objects and a key 
and returns a new array with all the objects that contain that key
*/

// console.log(filterByValue([
// 	{ first: 'Elie', last: "Schoppik" },
// 	{ first: 'Tim', last: "Garcia", isCatOwner: true },
// 	{ first: 'Matt', last: "Lane" }, { first: 'Colt', last: "Steele", isCatOwner: true }
// ], 'isCatOwner'));
// should return: [{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}]



// CHALLENGE 2 //

/*
Write a function called find which accepts an array and a value and returns the 
first element in the array that has the same value as the second parameter or 
undefined if the value is not found in the array
*/

// console.log(find([1, 2, 3, 4, 5], 3)); // 3
// console.log(find([1, 2, 3, 4, 5], 10)); // undefined



// CHALLENGE 3 //

/*
Write a function called findInObj which accepts an array of objects, a key, and 
some value to search for that returns the first found value in the array
*/

// console.log(findInObj([
// 	{ first: 'Elie', last: "Schoppik" },
// 	{ first: 'Tim', last: "Garcia", isCatOwner: true },
// 	{ first: 'Matt', last: "Lane" },
// 	{ first: 'Colt', last: "Steele", isCatOwner: true }
// ], 'isCatOwner', true));
// should return: {first: 'Tim', last:"Garcia", isCatOwner: true}



// CHALLENGE 4 //

/*
Write a function called removeVowels which accepts a string and returns a new 
string with all of the vowels (both uppercased and lowercased) removed. Every 
character in the new string should be lowercased
*/

// console.log(removeVowels('Elie')); // ('l')
// console.log(removeVowels('TIM')); // ('tm')
// console.log(removeVowels('ZZZZZZ')); // ('zzzzzz')



// CHALLENGE 5 //

/*
Write a function called doubleOddNumbers which accepts an array and returns a 
new array with all of the odd numbers doubled (HINT - you can use map and filter 
to double and then filter the odd numbers)
*/

// console.log(doubleOddNumbers([1, 2, 3, 4, 5])); // [2,6,10]
// console.log(doubleOddNumbers([4, 4, 4, 4, 4])); // []