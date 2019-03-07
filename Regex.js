/** Regular Expressions: Using the Test Method */

let myString = "Hello, World!";
let myRegex = /Hello/;
//let result = myRegex; // Change this line
let result = myRegex.test(myString);




/** Regular Expressions: Match a Literal String with Different Possibilities */

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);




/** Regular Expressions: Ignore Case While Matching */

let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; // Change this line
let result = fccRegex.test(myString);




/** Regular Expressions: Extract Matches */

"Hello, World!".match(/Hello/);
// Returns ["Hello"]
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);
// Returns ["expressions"]




/** Regular Expressions: Find More Than the First Match */ 
//To search or extract a pattern more than once, you can use the g flag.
//You can have multiple flags on your regex like /search/gi

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; // Change this line
let result = twinkleStar.match(starRegex); // Change this line




/** Regular Expressions: Match Anything with Wildcard Period */
//The wildcard character . will match any one character. The wildcard is also called dot and period.

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result = unRegex.test(exampleStr);




/** Regular Expressions: Match Single Character with Multiple Possibilities */
//You can search for a literal pattern with some flexibility with character classes. 
//Character classes allow you to define a group of characters you wish to match by placing them inside square ([ and ]) brackets.

//Use a character class with vowels (a, e, i, o, u) in your regex vowelRegex to find all the vowels in the string quoteSample.

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line




/** Regular Expressions: Match Letters of the Alphabet */
//Inside a character set, you can define a range of characters to match using a hyphen character: -.

//Match all the letters in the string quoteSample. Be sure to match both upper- and lowercase letters.

let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result = quoteSample.match(alphabetRegex); // Change this line




/** 





