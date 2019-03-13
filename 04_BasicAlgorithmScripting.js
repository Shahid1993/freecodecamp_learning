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




/**  */
