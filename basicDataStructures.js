/** Add Items to an Array with push() and unshift() */
/** the push() method adds elements to the end of an array, and unshift() adds elements to the beginning */

let twentyThree = 'XXIII';
let romanNumerals = ['XXI', 'XXII'];

romanNumerals.unshift('XIX', 'XX');
// now equals ['XIX', 'XX', 'XXI', 'XXII']

romanNumerals.push(twentyThree);
// now equals ['XIX', 'XX', 'XXI', 'XXII', 'XXIII']




/** Remove Items from an Array with pop() and shift() */
/** pop() removes an element from the end of an array, while shift() removes an element from the beginning. */

let greetings = ['whats up?', 'hello', 'see ya!'];

greetings.pop();
// now equals ['whats up?', 'hello']

greetings.shift();
// now equals ['hello']




/** Remove Items Using splice() */
/** splice(startIndex, length) : to remove an element/elements from somewhere in the middle */
/** Add Items Using splice() */
/** splice(startIndex, length, replaceElement) : to remove an element/elements from somewhere in the middle and replace */


let array = ['today', 'was', 'not', 'so', 'great'];

array.splice(2, 2);
// remove 2 elements beginning with the 3rd element
// array now equals ['today', 'was', 'great']




/** Copy Array Items Using slice()  */
/** slice(), rather than modifying an array, copies, or extracts, a given number of elements to a new array, leaving the array it is called upon untouched. slice() takes only 2 parameters — the first is the index at which to begin extraction, and the second is the index at which to stop extraction (extraction will occur up to, but not including the element at this index) */
let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];

let todaysWeather = weatherConditions.slice(1, 3);
// todaysWeather equals ['snow', 'sleet'];
// weatherConditions still equals ['rain', 'snow', 'sleet', 'hail', 'clear']




/** Copy an Array with the Spread Operator */
/** ES6's new spread operator allows us to easily copy all of an array's elements, in order, with a simple and highly readable syntax. The spread syntax simply looks like this: ... */

let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];
// thatArray equals [true, true, undefined, false, null]
// thisArray remains unchanged, and is identical to thatArray

function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // change code below this line
    newArr.push([...arr]);
    // change code above this line
    num--;
  }
  return newArr;
}

// change code here to test different cases:
console.log(copyMachine([true, false, true], 2));




/** Combine Arrays with the Spread Operator */

let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];

let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];
// thatArray now equals ['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander']




/** Add Key-Value Pairs to JavaScript Objects */
/** dot notation */
/** bracket notation : allows us to pass a variable in to be evaluated as a property name */




/** Use the delete Keyword to Remove Object Properties */

    delete foods.apples;




/** Check if an Object has a Property */
/** hasOwnProperty() method */
/** in keyword*/

users.hasOwnProperty('Alan');
'Alan' in users;
// both return true

