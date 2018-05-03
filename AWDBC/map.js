// CHALLENGE 1 //

/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
*/

// console.log(doubleValues([1, 2, 3])); // [2,4,6]
// console.log(doubleValues([1, -2, -3])); // [2,-4,-6]



// CHALLENGE 2 //

/*
Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.
*/

// console.log(valTimesIndex([1, 2, 3])); // [0,2,6]
// console.log(valTimesIndex([1, -2, -3])); // [0,-2,-6]



// CHALLENGE 3 //

/*
Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.
*/

// console.log(extractKey([
// 	{ name: 'Elie' },
// 	{ name: 'Tim' },
// 	{ name: 'Matt' },
// 	{ name: 'Colt' }
// ], 'name')); // ['Elie', 'Tim', 'Matt', 'Colt']



// CHALLENGE 4 //

/*
Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space.
*/

// console.log(extractFullName([
// 	{ first: 'Elie', last: "Schoppik" },
// 	{ first: 'Tim', last: "Garcia" },
// 	{ first: 'Matt', last: "Lane" },
// 	{ first: 'Colt', last: "Steele" }
// ]));
// should return: ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']