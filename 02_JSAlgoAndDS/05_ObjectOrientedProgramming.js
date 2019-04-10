
/** Define a Constructor Function */
//Constructors are defined with a capitalized name to distinguish them from other functions that are not constructors.
//Constructors use the keyword this to set properties of the object they will create. Inside the constructor, this refers to the new object it will create.
//Constructors define properties and behaviors instead of returning a value as other functions might.

function Dog(){
  this.name = 'name';
  this.color = 'color';
  this.numLegs = 4;
}




/** Verify an Object's Constructor with instanceof */
// instanceof allows you to compare an object to a constructor, returning true or false based on whether or not that object was created with the constructor.
let Bird = function(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}

let crow = new Bird("Alexis", "black");

crow instanceof Bird; // => true




/** Understand Own Properties */
// name and numLegs are called own properties, because they are defined directly on the instance object. That means that duck and canary each has its own separate copy of these properties.
// In fact every instance of Bird will have its own copy of these properties.

function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let ownProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps); // prints [ "name", "numLegs" ]




/** Use Prototype Properties to Reduce Duplicate Code */
// The prototype is an object that is shared among ALL instances
// Since all instances automatically have the properties on the prototype, think of a prototype as a "recipe" for creating objects.
// Nearly every object in JavaScript has a prototype property which is part of the constructor function that created it.

Bird.prototype.numLegs = 2;
console.log(duck.numLegs); // prints 2
console.log(canary.numLegs); // prints 2




/** Iterate Over All Properties */
/** own properties and prototype properties. Own properties are defined directly on the object instance itself. And prototype properties are defined on the prototype. */

let ownProps = [];
let prototypeProps = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

console.log(ownProps); // prints ["name"]
console.log(prototypeProps); // prints ["numLegs"]




/** Understand the Constructor Property */
/** a special constructor property located on the object instances */
/**  constructor property is a reference to the constructor function that created the instance. */
/** The advantage of the constructor property is that it's possible to check for this property to find out what kind of object it is. */

function Dog(name) {
  this.name = name;
}

// Add your code below this line
function joinDogFraternity(candidate) {
  return candidate.constructor === Dog;
}




/** Change the Prototype to a New Object **/

Bird.prototype = {
  numLegs: 2,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};

console.log(duck.constructor)   // prints ‘undefined’ - Oops!  -- constructor property got erased
// To fix this, whenever a prototype is manually set to a new object, remember to define the constructor property




/** Remember to Set the Constructor Property when Changing the Prototype **/

Bird.prototype = {
  constructor: Bird, // define the constructor property
  numLegs: 2,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};




/** Understand Where an Object’s Prototype Comes From **/
//an object inherits its prototype directly from the constructor function that created it.

function Bird(name) {
  this.name = name;
}

let duck = new Bird("Donald");
//duck inherits its prototype from the Bird constructor function. You can show this relationship with the isPrototypeOf method:

Bird.prototype.isPrototypeOf(duck);
// returns true




/** Understand the Prototype Chain **/
//All objects in JavaScript (with a few exceptions) have a prototype. Also, an object’s prototype itself is an object.

function Bird(name) {
  this.name = name;
}

typeof Bird.prototype; // => object

//Because a prototype is an object, a prototype can have its own prototype! 
//In this case, the prototype of Bird.prototype is Object.prototype:

Object.prototype.isPrototypeOf(Bird.prototype);  // returns true

//The hasOwnProperty method is defined in Object.prototype, which can be accessed by Bird.prototype, which can then be accessed by duck. This is an example of the prototype chain.
//In this prototype chain, Bird is the supertype for duck, while duck is the subtype. Object is a supertype for both Bird and duck.
//Object is a supertype for all objects in JavaScript. Therefore, any object can use the hasOwnProperty method.





/** Use Inheritance So You Don't Repeat Yourself **/
//There's a principle in programming called Don't Repeat Yourself (DRY).

function Cat(name) {
  this.name = name; 
}

Cat.prototype = {
  constructor: Cat
};

function Bear(name) {
  this.name = name; 
}

Bear.prototype = {
  constructor: Bear
};

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};




/** Inherit Behaviors from a Supertype **/

function Animal() { }

Animal.prototype = {
  constructor: Animal, 
  eat: function() {
    console.log("nom nom nom");
  }
};
//one way to create an instance of Animal using the new operator:
let duck = new Animal();
//There are some disadvantages when using this syntax for inheritance. Instead, here's an alternative approach without those disadvantages:
let duck =  Object.create(Animal.prototype); // Change this line
let beagle = Object.create(Animal.prototype); // Change this line

duck.eat(); // Should print "nom nom nom"
beagle.eat(); // Should print "nom nom nom" 
//Object.create(obj) creates a new object, and sets obj as the new object's prototype.





/** Set the Child's Prototype to an Instance of the Parent **/
//set the prototype of the subtype (or child)—in this case, Bird—to be an instance of Animal.

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

// Add your code below this line
Dog.prototype = Object.create(Animal.prototype);

let beagle = new Dog();
beagle.eat();  // Should print "nom nom nom"




/** Reset an Inherited Constructor Property **/
//When an object inherits its prototype from another object, it also inherits the supertype's constructor property.

function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
let duck = new Bird();
duck.constructor // function Animal(){...}

//But duck and all instances of Bird should show that they were constructed by Bird and not Animal. 
//To do so, you can manually set Bird's constructor property to the Bird object:

Bird.prototype.constructor = Bird;
duck.constructor // function Bird(){...}




/** Add Methods After Inheritance **/

function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// Add your code below this line
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function(){
    console.log("Woof!");
}

let beagle = new Dog();

beagle.eat(); // Should print "nom nom nom"
beagle.bark(); // Should print "Woof!"




/** Override Inherited Methods **/

function Animal() { }
Animal.prototype.eat = function() {
  return "nom nom nom";
};
function Bird() { }

// Inherit all methods from Animal
Bird.prototype = Object.create(Animal.prototype);

// Bird.eat() overrides Animal.eat()
Bird.prototype.eat = function() {
  return "peck peck peck";
};




/** Use a Mixin to Add Common Behavior Between Unrelated Objects **/
