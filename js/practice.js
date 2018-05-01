function reverseString(str) {
	// 1. set up an empty variable to store the new string
	// 2. store an individual character on each iteration

	let stringContainer = "";

	for (let i = str.length - 1; i >= 0; i--) {
		console.log(str[i]);
		stringContainer += str[i];
		// console.log('string container:', stringContainer);
	}

	return stringContainer;
}

console.log(
	reverseString("hello")

);