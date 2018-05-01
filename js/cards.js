var count = 0;

function cc(card) {
	// Only change code below this line
	// count = card;

	if (card >= 2 && card <= 6) {
		count += 1;
	}
	else if (!(card >= 7 && card <= 9)) {
		count -= 1;
	}

	var advice = "";
	if (count > 0) {
		advice = "Bet";
	}
	else {
		advice = "Hold";
	}

	return `${count} ${advice}`;
	// Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display

// count = 0
console.log(cc(2)); // 1 Bet
console.log(cc(3)); // 2 Bet
console.log(cc(7)); // 2 Bet
console.log(cc('K')); // 1 Bet
console.log(cc('A')); // 0 Hold

