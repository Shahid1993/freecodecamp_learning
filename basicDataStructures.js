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
/** splice(startIndex, length, replaceElement) : to remove an element/elements from somewhere in the middle and replace */


let array = ['today', 'was', 'not', 'so', 'great'];

array.splice(2, 2);
// remove 2 elements beginning with the 3rd element
// array now equals ['today', 'was', 'great']
