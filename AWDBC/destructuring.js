// CHALLENGE 1 //

/*
Write a function called displayStudentInfo which accepts an object and returns the string "Your full name is" concatenated with the value of the first key and a space and then the value of the last key. See if you can destructure this object inside of the function.
*/

// console.log(displayStudentInfo({ first: 'Elie', last: 'Schoppik' })); // 'Your full name is Elie Schoppik')



// CHALLENGE 2 //

/*
Write a function called printFullName which accepts an object and returns the string "Your full name is" concatenated with the value of the first key and a space and then the value of the last key. See if you can destructure this object DIRECTLY from the parameters. The output of the printFullName function should be the exact same as the displayStudentInfo function.
*/

// console.log(printFullName({ first: 'Elie', last: 'Schoppik' })); // 'Your full name is Elie Schoppik'



// CHALLENGE 3 //

/*
Write a function called createStudent which accepts as a parameter, a default parameter which is a destructured object with the key of likesES2015 and value of true, and key of likesJavaScript and value of true.

If both the values of likesJavaScript and likesES2015 are true, the function should return the string 'The student likes JavaScript and ES2015'.
If the value of likesES2015 is false the function should return the string 'The student likes JavaScript!'
If the value of likesJavaScript is false the function should return the string 'The student likesES2015!'
If both the value of likesJavaScript and likesES2015 are false, the function should return the string 'The student does not like much...'
*/

// console.log(createStudent()); // 'The student likes JavaScript and ES2015')
// console.log(createStudent({ likesES2015: false })); // 'The student likes JavaScript!')
// console.log(createStudent({ likesJavaScript: false })); // 'The student likes ES2015!')
// console.log(createStudent({ likesJavaScript: false, likesES2015: false })); // 'The student does not like much...')



// CHALLENGE 4 //

/*
Write a function called reverseArray which accepts an array and returns the array with all values reversed. See if you can do this without creating a new array!
*/

// console.log(reverseArray([1, 2, 3, 4, 5])); // [5,4,3,2,1]
// console.log(reverseArray([1, 2])); // [2,1]
// console.log(reverseArray([])); // []
// console.log(reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // [10,9,8,7,6,5,4,3,2,1