// source: https://jsbin.com/pawayikozo/edit?js,console,output

// CHALLENGE 1 //

/*
Write code that will log to the console, 'I am at the beginning of the code'.

Beneath that console log, set a timer (see setTimeout) that will log to the console 'I am in the setTimeout callback function' after 3 seconds (3000 ms)

Next, add code to the end of the challenge to log 'I am at the end of the code'. Now re-run the code.

Make sure the 'console' and 'output' panes are showing (click the tabs above if not) and then run your code with the 'Run with JS' button.

Clear the console. Change the delay time in the time from 3000 ms to 0. Think hard about how the order should change and then run the code again.
*/


// CHALLENGE 2 //

/*
Write code that will log to the console "Interval Hello!" every 2 seconds (see setInterval). Use the given clearAllIntervals function to clear all the messages when you have this functionality working.

Next, modify your code so that the "Interval Hello!" messages will automatically stop after 10 seconds.

Then, modify your code again so that the "Interval Hello!" messages will automatically stop after 10 seconds without use of the clearAllIntervals function, and using clearInterval only once. Perform research if you are unsure how to do this.
*/

// included code
function clearAllIntervals() {
	for (let i = 0; i < 1000; i++) {
		clearInterval(i);
	}
}
// =============


// CHALLENGE 3 //

/*
Write a function everyXsecsForYsecs that will accept three arguments: a function, an interval time in seconds, and a total time in seconds. everyXsecsForYsecs should invoke the given function every X times 1000 milliseconds, but then stop invoking the function after Y times 1000 milliseconds.

Write function sayHowdy that will log "Howdy" to the console. Then test your everyXsecsForYsecs function by using it to invoke sayHowdy every 1 second for 5 seconds.

Now, modify your everyXsecsForYsecs function so it does not use setInterval, but still keeps the same functionality.
*/

// V1 (with setInterval)
function everyXsecsForYsecs(fn, intervalTime, totalTime) {
	const interval = setInterval(sayHowdy, intervalTime);
	setTimeout(() => clearInterval(interval), totalTime);
}

// V2 (without setInterval -- recursive call to setTimeout)
function everyXsecsForYsecs(fn, intervalTime, totalTime) {
	let time = intervalTime;
	function callFn() {
		sayHowdy(time);
		if (time < totalTime) {
			setTimeout(callFn, intervalTime);
			time += intervalTime;
		}
	}
	setTimeout(callFn, intervalTime);
}

function sayHowdy() {
	console.log('Howdy');
}

// everyXsecsForYsecs(sayHowdy, 1000, 5000);


// CHALLENGE 4 //

/*
Recreate the built in array method, forEach: Write a function that takes as parameters an array, arr, and a callback function, cb. The forEach function will iterate through arr passing each element and its index as arguments to cb.

Create a variable named delays and assign to it an array with the numbers 2000, 5000, 0, and 3500 (in that order).

Write a function, delayLog, that takes as input a delayTime and an index, i. When invoked, the function should wait delayTime milliseconds before logging to the console, "printing element i" (with "i" replaced with the actual index passed in).

Putting it all together, run the delayLog function on each item of the delays array using the forEach function you created.
*/

function forEach(arr, cb) {
	for (let i = 0; i < arr.length; i++) {
		cb(arr[i], i);
	}
}

const delays = [2000, 5000, 0, 3500];

function delayLog(delayTime, i) {
	setTimeout(() => console.log(`printing element ${i} with value ${delayTime}`), delayTime);
}

// forEach(delays, delayLog);


// CHALLENGE 5 //

/*
Write a function changeColor that when invoked will first check if the current page background color is "rgb(221, 238, 255)". If it is, it changes the color to "rgb(255, 238, 221)". If it isn't, it sets the color to "rgb(221, 238, 255)".

Add a click event listener to button #1 above (it has an id of "activate"). On click, the button should log to the console "clicked #1". It should also set up a click event listener on button #2 (id of "color"). That listener should log to console "clicked #2" and then call the changeColor function you just created.

Refresh and try to change the background color by only clicking button #2. What needs to happen for the button to work?
*/

const body = document.querySelector('body');
const button1 = document.querySelector('#activate');
const button2 = document.querySelector('#color');

function changeColor() {
	const tan = 'rgb(255, 238, 221)';
	const blue = 'rgb(221, 238, 255)';

	let bgColor = body.style.backgroundColor;
	bgColor = bgColor !== blue ? blue : tan;
	body.style.backgroundColor = bgColor;
}

button1.addEventListener('click', () => {
	console.log('clicked #1');
	button2.addEventListener('click', () => {
		console.log('clicked #2');
		changeColor();
	});
});


// CHALLENGE 6 //

/*
In this challenge we are going to simulate an AJAX call to get information from a server. This is not a real AJAX call, but the asynchonicity is similar.

Modify the function ajaxSimulate to take an id and a callback function as input. After the database array, set a timer that will pass the element of database whose index matches id to the callback function after 0 ms.

Create a second function storeData (outside of ajaxSimulate) that takes data as input and assigns it to the dataReceived variable already defined.

Invoke the ajaxSimulate function with an id of 1 and the storeData function as the callback. Immediately after, log to the console the value of dataReceived. What do you expect it to be?

Without changing anything else, copy-paste the console.log statement somewhere where it will log with the info we need.
*/

// included code
let dataReceived;

function ajaxSimulate(id, callback) {
	let database = ['Aaron', 'Barbara', 'Chris'];
	setTimeout(() => callback(database[id]), 0);
}
// =============

function storeData(data) {
	console.log(data); // 2) setTimeout fn is run here and prints after console.log that runs in global execution context
	dataReceived = data;
}

ajaxSimulate(1, storeData);
console.log(dataReceived); // 1) dataReceived is still undefined because setTimeout callback fn hasn't run yet


// CHALLENGE 7 //

/*
Perform a GET request to the Bandsintown API (https://app.swaggerhub.com/apis/Bandsintown/PublicAPI/3.0.0) to search for your favorite band. For the 'app_id', use the string 'jshp'.

Then in the returned JSON, find the URL for the image associated with the band and display it in the DOM.

Make sure to use 'https' for JSBIN to allow the request. There is a div with the ID 'ch2' for you to target. If you want, you can view this div by opening the HTML pane, by clicking the HTML button at the top.
*/


// CHALLENGE 8 //

/*
Perform a GET request to the Bandsintown API Bandsintown API (https://app.swaggerhub.com/apis/Bandsintown/PublicAPI/3.0.0) to search and find all events associated with your favorite artist. For the 'app_id', use the string 'jshp'.

Then use the returned JSON object to display all the names of the venues hosting the events in a list in the DOM.

Make sure to use 'https' for JSBIN to allow the request. There is a div with the ID 'ch3' for you to target.
*/


// CHALLENGE 9 //

/*
Perform a GET request to the Bandsintown API Bandsintown API (https://app.swaggerhub.com/apis/Bandsintown/PublicAPI/3.0.0) to search and find all events associated with your favorite artist. For the 'app_id', use the string 'jshp'.

This time, use the returned JSON object to select ONLY the events that will happen within the United States, and render them to the DOM.

Make sure to use 'https' for JSBIN to allow the request. There is a div with the ID 'ch4' for you to target.
*/
