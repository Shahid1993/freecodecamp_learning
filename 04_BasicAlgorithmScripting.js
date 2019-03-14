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




/** 
