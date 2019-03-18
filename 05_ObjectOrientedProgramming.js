
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




/** 
