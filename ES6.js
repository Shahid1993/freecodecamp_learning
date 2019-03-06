const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";
  // change code below this line
  const squaredIntegers = arr.filter((val) => Number.isInteger(val) && val > 0).map((d) => {return d*d});
  // change code above this line
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);


/** Modify the function sum so that it uses the rest operator and it works in the same way with any number of parameters. */

const sum = (function() {
  return function sum(...args) {
    //const args = [ x, y, z ];
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3)); // 6



/*** Copy all contents of arr1 into another array arr2 using the spread operator. **/

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  "use strict";
  arr2 = [...arr1]; // change this line
})();
console.log(arr2);


/*** Destructuring assignment  ***/
/*** Use destructuring to obtain the average temperature for tomorrow from the input object AVG_TEMPERATURES, and assign value with key tomorrow to tempOfTomorrow in line. **/
const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
  "use strict";
  // change code below this line
  //const tempOfTomorrow = undefined; // change this line
  const {tomorrow : tempOfTomorrow} = avgTemperatures;
  // change code above this line
  return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES)); // should be 79


/*** ES6: Use Destructuring Assignment to Assign Variables from Nested Objects ***/
//Use destructuring assignment to obtain max of forecast.tomorrow and assign it to maxOfTomorrow.

const LOCAL_FORECAST = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast) {
  "use strict";
  // change code below this line
  //const maxOfTomorrow = undefined; // change this line
  const {tomorrow : {max: maxOfTomorrow}} = forecast;
  // change code above this line
  return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST)); // should be 84.6

/*** ES6: Use Destructuring Assignment to Assign Variables from Arrays ***/
//Use destructuring assignment to swap the values of a and b so that a receives the value stored in b, and b receives the value stored in a.

let a = 8, b = 6;
(() => {
  "use strict";
  // change code below this line
  [a,b] = [b, a];
  // change code above this line
})();
console.log(a); // should be 6
console.log(b); // should be 8

/*** ES6: Use Destructuring Assignment with the Rest Operator to Reassign Array Elements ***/
//Use destructuring assignment with the rest operator to perform an effective Array.prototype.slice() so that arr is a sub-array of the original array source with the first two elements omitted.

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";
  // change code below this line
  //arr = list; // change this
  const [a, b, ...arr] = list;
  // change code above this line
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr); // should be [3,4,5,6,7,8,9,10]
console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];

/** ES6: Use Destructuring Assignment to Pass an Object as a Function's Parameters */
//Use destructuring assignment within the argument to the function half to send only max and min inside the function.

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
const half = (function() {
  "use strict"; // do not change this line

  // change code below this line
  /*return function half(stats) {
    // use function argument destructuring
    return (stats.max + stats.min) / 2.0;
  }; */
  return function half({max, min}) {
    // use function argument destructuring
    return (max + min) / 2.0;
  };
  // change code above this line

})();
console.log(stats); // should be object
console.log(half(stats)); // should be 28.015


/** ES6: Create Strings using Template Literals */
// Use template literal syntax with backticks to display each entry of the result object's failure array. Each entry should be wrapped inside an li element with the class attribute text-warning, and listed within the resultDisplayArray.

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
  "use strict";

  // change code below this line
  //const resultDisplayArray = null;
  const resultDisplayArray = arr.map(item =>  `<li class="text-warning">${item}</li>`);
  // change code above this line

  return resultDisplayArray;
}
/**
 * makeList(result.failure) should return:
 * [ `<li class="text-warning">no-var</li>`,
 *   `<li class="text-warning">var-on-top</li>`, 
 *   `<li class="text-warning">linebreak</li>` ]
 **/
const resultDisplayArray = makeList(result.failure);


/** ES6: Write Concise Object Literal Declarations Using Simple Fields */
//Use simple fields with object literals to create and return a Person object.

const createPerson = (name, age, gender) => {
  "use strict";
  // change code below this line
  /*return {
    name: name,
    age: age,
    gender: gender
  };*/
  return {name, age, gender};
  // change code above this line
};
console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object

/** ES6: Write Concise Declarative Functions with ES6 */
//Refactor the function setGear inside the object bicycle to use the shorthand syntax described above.
// change code below this line
const bicycle = {
  gear: 2,
  /*setGear: function(newGear) {
    "use strict";
    this.gear = newGear;
  }*/
  setGear(newGear) {
    "use strict";
    this.gear = newGear;
  }
};
// change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);


/** ES6: Use class Syntax to Define a Constructor Function */
//Use class keyword and write a proper constructor to create the Vegetable class.
//The Vegetable lets you create a vegetable object, with a property name, to be passed to constructor.


/*function makeClass() {
  "use strict";
   // Alter code below this line 

   // Alter code above this line 
  return Vegetable;
}
const Vegetable = makeClass();*/
class Vegetable {
  constructor(name){
    this.name = name;
  }
}

const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot'


/** ES6: Use getters and setters to Control Access to an Object */
//Use class keyword to create a Thermostat class. The constructor accepts Fahrenheit temperature.

class Thermostat{
  constructor(temp){
    this._temperature = temp;
  }

  get temperature(){
    return (5/9)*(this._temperature - 32)
  }

  set temperature(temp){
    this._temperature = temp
  }
}

const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C


/** ES6: Understand the Differences Between import and require */
//ES6 gives us a very handy tool known as import. With it, we can choose which parts of a module or file to load into a given file, saving time and memory.

"use strict";
import { capitalizeString  } from "string_functions"
capitalizeString("hello!");



/** ES6: Use export to Reuse a Code Block */

const capitalizeString = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
export { capitalizeString } //How to export functions.
export const foo = "bar"; //How to export variables.

// OR Below

const capitalizeString = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
const foo = "bar";
export { capitalizeString, foo }




/** ES6: Use * to Import Everything from a File */

import * as object_with_name_of_your_choice from "file_path_goes_here"
object_with_name_of_your_choice.imported_function

// Example 
import * as myMathModule from "math_functions";
myMathModule.add(2,3);
myMathModule.subtract(5,3);




/** ES6: Create an Export Fallback with export default */

//Usually you will use this syntax if only one value is being exported from a file. 
//It is also used to create a fallback value for a file or module.
//Since export default is used to declare a fallback value for a module or file, you can only have one value be a default export in each module or file. 
//Additionally, you cannot use export default with var, let, or const

export default function add(x,y) {
  return x + y;
}




/** ES6: Import a Default Export */
//The syntax differs in one key place - the imported value, add, is not surrounded by curly braces, {}. 
//Unlike exported values, the primary method of importing a default export is to simply write the value's name after import.

import add from "math_functions";
add(5,4);
