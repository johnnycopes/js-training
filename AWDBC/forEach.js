// CHALLENGE 1 //

/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
*/

// console.log(doubleValues([1, 2, 3])); // [2,4,6]
// console.log(doubleValues([5, 1, 2, 3, 10])); // [10,2,4,9,20]



// CHALLENGE 2 //

/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function
*/

// console.log(onlyEvenValues([1, 2, 3])); // [2]
// console.log(onlyEvenValues([5, 1, 2, 3, 10])); // [2,10]



// CHALLENGE 3 //

/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string
*/

// console.log(showFirstAndLast(['colt', 'matt', 'tim', 'udemy'])); // ["ct", "mt", "tm", "uy"]
// console.log(showFirstAndLast(['hi', 'goodbye', 'smile'])); // ['hi', 'ge', 'se']



// CHALLENGE 4 //

/*
Write a function called addKeyAndValue which accepts an array, a key, and a value and returns a the array passed to the function with the new key and value added for each variable
*/

// console.log(addKeyAndValue([
// 	{name: 'Elie'},
// 	{name: 'Tim'},
// 	{name: 'Matt'},
// 	{name: 'Colt'}
// ], 'title', 'instructor'));
// should return: [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]



// CHALLENGE 5 //

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count
*/

// console.log(vowelCount('Elie')); // {e:2,i:1};
// console.log(vowelCount('Tim')); // {i:1};
// console.log(vowelCount('Matt')); // {a:1})
// console.log(vowelCount('hmmm')); // {};
// console.log(vowelCount('I Am awesome and so are you')); // {i: 1, a: 4, e: 3, o: 3, u: 1};