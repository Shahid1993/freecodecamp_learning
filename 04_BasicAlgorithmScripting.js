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
