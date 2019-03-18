
/** Define a Constructor Function */
//Constructors are defined with a capitalized name to distinguish them from other functions that are not constructors.
//Constructors use the keyword this to set properties of the object they will create. Inside the constructor, this refers to the new object it will create.
//Constructors define properties and behaviors instead of returning a value as other functions might.

function Dog(){
  this.name = 'name';
  this.color = 'color';
  this.numLegs = 4;
}
