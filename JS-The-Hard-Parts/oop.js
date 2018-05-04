// Object-Oriented JavaScript

/****************************************************************
                  WORKING WITH OBJECT LITERALS
****************************************************************/

// CHALLENGE 1 //

/*
Create a function that accepts two inputs(name and age) and returns an object.Let's call this function makePerson. This function will:
- create an empty object
- add a name property to the newly created object with its value being the 'name' argument passed into the function
- add an age property to the newly created object with its value being the 'age' argument passed into the function
- return the object
*/

function makePerson(name, age) {

}

// var vicky = makePerson('Vicky', 24);
// console.log(vicky.name); // 'Vicky'
// console.log(vicky.age); // 24



/****************************************************************
                       USING OBJECT.CREATE
****************************************************************/

// CHALLENGE 1 //

/*
Inside personStore object, create a property greet where the value is a function that logs "hello"
*/

var personStore = {

};

// personStore.greet(); // 'hello'



// CHALLENGE 2 //

/*
Create a function personFromPersonStore that takes as input a name and an age. When called, the function will create person objects using the Object.create method on the personStore object
*/

function personFromPersonStore(name, age) {

}

// var sandra = personFromPersonStore('Sandra', 26);
// console.log(sandra.name); // 'Sandra'
// console.log(sandra.age); // 26
// sandra.greet(); // 'hello'



// CHALLENGE 3 //

/*
Without editing the code you've already written, add an introduce method to the personStore object that logs "Hi, my name is [name]".
*/

// sandra.introduce(); // 'Hi, my name is Sandra'



/****************************************************************
                    USING THE 'NEW' KEYWORD
****************************************************************/

// CHALLENGE 1 //

/*
Create a function PersonConstructor that uses the this keyword to save a single property onto its scope called greet. greet should be a function that logs the string 'hello'
*/

function PersonConstructor() {

}

// var simon = new PersonConstructor;
// simon.greet(); // 'hello'



// CHALLENGE 2 //

/*
Create a function personFromConstructor that takes as input a name and an age. When called, the function will create person objects using the new keyword instead of the Object.create method
*/

function personFromConstructor(name, age) {

}

// var mike = personFromConstructor('Mike', 30);
// console.log(mike.name); // -> 'Mike'
// console.log(mike.age); //-> 30
// mike.greet(); //-> 'hello'



// CHALLENGE 3 //

/*
Without editing the code you've already written, add an introduce method to the PersonConstructor function that logs "Hi, my name is [name]"
*/

// mike.introduce(); // 'Hi, my name is Mike'



/****************************************************************
                        USING ES6 CLASSES
****************************************************************/

// CHALLENGE 1 //

/*
Create a class PersonClass. PersonClass should have a constructor that is passed an input of name and saves it to a property by the same name. PersonClass should also have a method called greet that logs the string 'hello'
*/

class PersonClass {
	constructor() {

	}
}

// var george = new PersonClass;
// george.greet(); // 'hello'



// CHALLENGE 2 //

/*
Create a class DeveloperClass that creates objects by extending the PersonClass class. In addition to having a name property and greet method, DeveloperClass should have an introduce method. When called, introduce should log the string 'Hello World, my name is [name]'
*/

// var thai = new DeveloperClass('Thai', 32);
// console.log(thai.name); // 'Thai'
// thai.introduce(); // 'Hello World, my name is Thai'



/****************************************************************
                      EXTENSION: SUBCLASSING
****************************************************************/

var userFunctionStore = {
	sayType: function () {
		console.log("I am a " + this.type);
	}
}

function userFactory(name, score) {
	let user = Object.create(userFunctionStore);
	user.type = "User";
	user.name = name;
	user.score = score;
	return user;
}


// CHALLENGE 1 //

/*
Create an object adminFunctionStore that has access to all methods in the userFunctionStore object, without copying them over individually
*/



// CHALLENGE 2 //

/*
Create an adminFactory function that creates an object with all the same data fields (and default values) as objects of the userFactory class, but without copying each data field individually.

Then, make sure the value of the 'type' field for adminFactory objects is 'Admin' instead of 'User'.

Make sure that adminFactory objects have access to adminFunctionStore methods, without copying them over.
*/


function adminFactory(name, score) {

}

// var adminFromFactory = adminFactory("Eva", 5);
// adminFromFactory.sayType() // "I am a Admin"
// adminFromFactory.sharePublicMessage() // "Welcome users!"



// CHALLENGE 3 //

/*
Created a method called sharePublicMessage that logs 'Welcome users!' and will be available to adminFactory objects, but not userFactory objects. Do not add this method directly in the adminFactory function
*/



