/** Reverse a String */

function reverseString(str) {
  return str.split('').reverse().join('');
}

reverseString("hello");




/** Factorialize a Number */

function factorialize(num) {
  if(num == 0 )
    return 1;
  return num * factorialize(num-1);
}

factorialize(5);




/** Find the Longest Word in a String */

function findLongestWordLength(str) {
  return str.split(' ')
    .reduce(function(x,y){
      return Math.max(x,y.length);
    },0);
}




/** Return Largest Numbers in Arrays */

function largestOfFour(arr) {
  return arr.map(Function.apply.bind(Math.max,null));
}

// or 

function largestOfFour(arr) {
  return arr.map(function(subArr){
    return subArr.reduce(function(prev, curr){
      return curr >= prev ? curr : prev;
    })
  })
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);




/** Confirm the Ending */

function confirmEnding(str, target) {
  let newTarget = target.concat("$");
  let regExp = new RegExp(newTarget);
  return regExp.test(str);
}

// or

function confirmEnding(str, target) {
  return str.endsWith(target);
}

// or

function confirmEnding(str, target) {
  return str.slice(str.length - target.length) == target;
}

confirmEnding("Bastian", "n");




/** Repeat a String */

function repeatStringNumTimes(str, num) {
  var accumulatedStr = '';
  while (num > 0) {
    accumulatedStr += str;
    num--;
  }
  return accumulatedStr;
}

// or 

function repeatStringNumTimes(str, num) {
  if(num < 0)
    return "";
  if(num === 1)
    return str;
  else
    return str + repeatStringNumTimes(str, num - 1);
}

// or

function repeatStringNumTimes(str, num) {
  return num > 0 ? str.repeat(num) : '';
}

repeatStringNumTimes("abc", 3);




/** Truncate a String */

function truncateString(str, num) {
  return str.length <= num ? str : str.slice(0,num).concat('...');
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);




/** Finders Keepers */

function findElement(arr, func) {

  for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
    if(func(arr[i]))
      return arr[i];
  }
  return undefined;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);




/** Check if a value is classified as a boolean primitive. */

function booWho(bool) {
  return typeof bool == 'boolean';
}

booWho(null);




/** Title Case a Sentence */

function titleCase(str) {
  return str.toLowerCase().split(' ').map(function(val){
    return val.replace(val.charAt(0),val.charAt(0).toUpperCase())
  }).join(' ');
}

// or

function titleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase());
}

titleCase("I'm a little tea pot");




/** Slice and Splice */
//Use the array methods slice and splice to copy each element of the first array into the second array, in order.
//Begin inserting elements at index n of the second array.
//Return the resulting array. The input arrays should remain the same after the function runs.

function frankenSplice(arr1, arr2, n) {
  let localarr2 = arr2.slice();
  for(let i = 0; i<arr1.length; i++){
    localarr2.splice(n,0,arr1[i]);
    n++;
  }
  return localarr2;
}
frankenSplice([1, 2, 3], [4, 5, 6], 1);

//or

function frankenSplice(arr1, arr2, n) {
  let combinedArrays = arr2.slice()
  combinedArrays.splice(n, 0, ...arr1)
  return combinedArrays
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);




/** Falsy Bouncer */
/** Falsy values in JavaScript are false, null, 0, "", undefined, and NaN. */

function bouncer(arr) {
  return arr.filter(Boolean);
}

bouncer([7, "ate", "", false, 9]);




/** Where do I Belong */
// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

function getIndexToIns(arr, num) {
  return arr.concat(num).sort((a,b)=> a-b).indexOf(num);
}

// or

function getIndexToIns(arr, num) {
  arr.push(num);
  arr.sort(function(a, b){return a-b});
  return arr.indexOf(num);
}

// or ===> https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/basic-algorithm-scripting/where-do-i-belong/

getIndexToIns([40, 60], 50);




/** Mutations */
// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array

function mutation(arr) {
  return arr[1].toLowerCase()
    .split('')
    .every(function(letter){
      return arr[0].toLowerCase().indexOf(letter) != -1;
    });
}

// or

function mutation(arr) {
  var test = arr[1].toLowerCase();
  var target = arr[0].toLowerCase();

  for(let i = 0; i< test.length; i++){
    if(target.indexOf(test[i]) == -1)
      return false;
  }
  return true;
}

mutation(["hello", "hey"]);




/** Chunky Monkey */
//  Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
  let retArr = [];
  while(arr.length){
    retArr.push(arr.splice(0,size));
  }
  return retArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
