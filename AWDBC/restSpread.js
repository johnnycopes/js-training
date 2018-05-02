// CHALLENGE 1 //

/*
Write a function called smallestValue which accepts a variable number of parameters and returns the smallest parameters passed to the function
*/

// smallestValue(4, 1, 12, 0) // 0
// smallestValue(5, 4, 1, 121) // 1
// smallestValue(4, 2) // 2
// smallestValue(99, 12321, 12.2) // 2



// CHALLENGE 2 //

/*
Write a function called placeInMiddle which accepts two parameters, an array and another array. This function should return the first array with all of the values in the second array placed in the middle of the first array
*/

// placeInMiddle([1, 2, 6, 7], [3, 4, 5]) // [1,2,3,4,5,6,7]
// placeInMiddle([1], [3, 4, 5]) // [3,4,5,1]
// placeInMiddle([1, 6], [2, 3, 4, 5]) // [1,2,3,4,5,6]
// placeInMiddle([], [2, 3, 4, 5]) // [2,3,4,5]



// CHALLENGE 3 //

/*
Write a function called joinArrays which accepts a variable number of parameters (you can assume that each argument to this function will be an array) and returns an array of all of the parameters concatenated together
*/

// joinArrays([1], [2], [3]) // [1,2,3]
// joinArrays([1], [2], [3], [1], [2], [3]) // [1,2,3,1,2,3]
// joinArrays([1, 2, 3], [4, 5, 6], [7, 8, 9]) // [1,2,3,4,5,6,7,8,9]
// joinArrays([1], [3], [0], [7]) // [1,3,0,7]


// CHALLENGE 4 //

/*
Write a function called sumEvenArgs which takes all of the parameters passed to a function and returns the sum of the even ones
*/

// sumEvenArgs(1, 2, 3, 4) // 6
// sumEvenArgs(1, 2, 6) // 8
// sumEvenArgs(1, 2) // 2