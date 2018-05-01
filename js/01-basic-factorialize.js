function factorialize(num) {
	var total = 1;
	for (let i = 1; i < num + 1; i++) {
		total  = total * i;
	}

	return total;
}

console.log(factorialize(5)); //should return 120.
console.log(factorialize(10)); // should return 3628800.
console.log(factorialize(20)); // should return 2432902008176640000.
console.log(factorialize(0)); // should return 1