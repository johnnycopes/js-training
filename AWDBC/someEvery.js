// CHALLENGE 1 //

/*
Write a function called hasOddNumber which accepts an array and returns true if the array contains at least one odd number, otherwise it returns false
*/

// hasOddNumber([1, 2, 2, 2, 2, 2, 4]) // true
// hasOddNumber([2, 2, 2, 2, 2, 4]) // false



// CHALLENGE 2 //

/*
Write a function called hasAZero which accepts a number and returns true if that number contains at least one zero. Otherwise, the function should return false
*/

// hasAZero(3332123213101232321) // true
// hasAZero(1212121) // false



// CHALLENGE 3 //

/*
Write a function called hasOnlyOddNumbers which accepts an array and returns true if every single number in the array is odd. If any of the values in the array are not odd, the function should return false
*/

// hasOnlyOddNumbers([1, 3, 5, 7]) // true
// hasOnlyOddNumbers([1, 2, 3, 5, 7]) // false



// CHALLENGE 4 //

/*
Write a function called hasNoDuplicates which accepts an array and returns true if there are no duplicate values (more than one element in the array that has the same value as another). If there are any duplicates, the function should return false
*/

// hasNoDuplicates([1, 2, 3, 1]) // false
// hasNoDuplicates([1, 2, 3]) // true



// CHALLENGE 5 //

/*
Write a function called hasCertainKey which accepts an array of objects and a key, and returns true if every single object in the array contains that key. Otherwise it should return false
*/

// var arr = [
// 	{ title: "Instructor", first: 'Elie', last: "Schoppik" },
// 	{ title: "Instructor", first: 'Tim', last: "Garcia", isCatOwner: true },
// 	{ title: "Instructor", first: 'Matt', last: "Lane" },
// 	{ title: "Instructor", first: 'Colt', last: "Steele", isCatOwner: true }
// ]

// hasCertainKey(arr, 'first') // true
// hasCertainKey(arr, 'isCatOwner') // false



// CHALLENGE 6 //

/*
Write a function called hasCertainValue which accepts an array of objects and a key, and a value, and returns true if every single object in the array contains that value for the specific key. Otherwise it should return false.
*/

// var arr = [
// 	{ title: "Instructor", first: 'Elie', last: "Schoppik" },
// 	{ title: "Instructor", first: 'Tim', last: "Garcia", isCatOwner: true },
// 	{ title: "Instructor", first: 'Matt', last: "Lane" },
// 	{ title: "Instructor", first: 'Colt', last: "Steele", isCatOwner: true }
// ]

// hasCertainValue(arr, 'title', 'Instructor') // true
// hasCertainValue(arr, 'first', 'Elie') // false