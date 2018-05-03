// CHALLENGE 1 //

/*
In your constructor method, you should assign two properties for each object created from the MessageBoard class. The first should be a property called messages which is an empty Map, and the second is a property called id which has a value of 1
*/

// var m = new MessageBoard

// console.log(m.hasOwnProperty('messages')); // true
// console.log(m.messages.constructor); // function Map() { [native code] }
// console.log(m.hasOwnProperty('id')); // true
// console.log(m.id); // 1



// CHALLENGE 2 //

/*
Add a method called addMessage which accepts a string. The function should add a key and value to the messages map with a key of whatever the value of this.id is and a value of whatever the string is that is passed to the function. The function should return the object created from the class so that the method can be chained. (HINT - to implement the last part, make sure to return this).
*/

// var m = new MessageBoard

// console.log(m.addMessage('hello'));;
// console.log(m.messages.size); // 1
// console.log(m.addMessage('awesome!')); // m
// console.log(m.addMessage('awesome!').addMessage('nice!').addMessage('cool!')); 



// CHALLENGE 3 //

/*
Add a method called findMessageById which accepts a number and returns the message in the messages map with the same key as the number passed to the function. If the key is not found in the messages map, the function should return undefined
*/

// var m = new MessageBoard;
// console.log(m.addMessage('hello!'));
// console.log(m.addMessage('hi!'));
// console.log(m.addMessage('whats up?'));
// console.log(m.findMessageById(1)); // 'hello!'
// console.log(m.findMessageById(2)); // 'hi!'
// console.log(m.findMessageById(3)); // 'whats up?'
// console.log(m.findMessageById(4)); // undefined
// console.log(m.findMessageById()); // undefined



// CHALLENGE 4 //

/*
Add a method called removeMessage which accepts a number and removes a message in the messages map with a key of the number passed to the function
*/

// var m = new MessageBoard;
// console.log(m.addMessage('hello!'));
// console.log(m.addMessage('hi!'));
// console.log(m.addMessage('whats up?'));
// console.log(m.removeMessage(1));
// console.log(m.removeMessage(2));
// console.log(m.messages.size); // 1
// console.log(m.removeMessage()); // m



// CHALLENGE 5 //

/*
Add a method called numberOfMessages which returns the number of keys in the messages map
*/

// var m = new MessageBoard
// console.log(m.addMessage('hello!'));
// console.log(m.addMessage('hi!'));
// console.log(m.addMessage('whats up?'));
// console.log(m.numberOfMessages()); // 3



// CHALLENGE 6 //

/*
Add a method called messagesToArray which returns an array of all of the values in the messages map
*/

// var m = new MessageBoard;
// console.log(m.addMessage('hello!'));
// console.log(m.addMessage('hi!'));
// console.log(m.addMessage('whats up?'));
// console.log(m.messagesToArray()); // ['hello!', 'hi!', 'whats up?'])



// CHALLENGE 7 //

/*
Write a function called uniqueValues which accepts an array and returns the number of unique values in the array
*/

// console.log(uniqueValues([1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5, 6])); // 6



// CHALLENGE 8 //

/*
Write a function called hasDuplicates which accepts an array and returns true if there are duplicate values in the array, otherwise it should return false.
*/

// console.log(hasDuplicates([1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5, 6])); // true
// console.log(hasDuplicates([1, 2, 3, 4, 5, 6])); // false
// console.log(hasDuplicates([])); // false



// CHALLENGE 9 //

/*
Write a function called countPairs which accepts an array and a number. The function should return the number of pairs (two numbers) that sum up to the number passed to the function.
*/

// console.log(countPairs([8, 2, 6, 4, 10, 0], 10)); // 3
// console.log(countPairs([8, 2], 10)); // 1
// console.log(countPairs([1, 2], 10)); // 0
// console.log(countPairs([1, 2, 3, 4, 5], 10)); // 0
// console.log(countPairs([], 10)); // 0
// console.log(countPairs([5, 4, -10, 6, -20, 16], -4)); // 2
// console.log(countPairs([0, -4], -4)); // 1