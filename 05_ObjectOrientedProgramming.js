
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


