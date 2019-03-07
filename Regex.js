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




/** Regular Expressions: Match Single Characters Not Specified (called, negated character sets)*/
//To create a negated character set, you place a caret character (^) after the opening bracket and before the characters you do not want to match.

//Create a single regex that matches all characters that are not a number or a vowel. Remember to include the appropriate flags in the regex.

let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line




/**Regular Expressions: Match Characters that Occur One or More Times */
//You can use the + character to check if that is the case. Remember, the character or pattern has to be present consecutively. That is, the character has to repeat one after the other.

//You want to find matches when the letter s occurs one or more times in "Mississippi". Write a regex that uses the + sign.

let difficultSpelling = "Mississippi";
let myRegex = /s+/gi; // Change this line
let result = difficultSpelling.match(myRegex);




/** Regular Expressions: Match Characters that Occur Zero or More Times */
//The character to do this is the asterisk or star: *.

//Create a regex chewieRegex that uses the * character to match all the upper and lower"a" characters in chewieQuote. Your regex does not need flags, and it should not match any of the other quotes.

let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/; // Change this line
let result = chewieQuote.match(chewieRegex);




/** Regular Expressions: Find Characters with Lazy Matching */
//In regular expressions, a greedy match finds the longest possible part of a string that fits the regex pattern and returns it as a match. The alternative is called a lazy match, which finds the smallest possible part of the string that satisfies the regex pattern.

//Fix the regex /<.*>/ to return the HTML tag <h1> and not the text "<h1>Winter is coming</h1>". Remember the wildcard . in a regular expression matches any character.

let text = "<h1>Winter is coming</h1>";
//let myRegex = /<.*>/; // Change this line
let myRegex = /<.*?>/; // Change this line
let result = text.match(myRegex);




/** Regular Expressions: Match Beginning String Patterns */
//caret character (^) inside a character set to create a negated character set in the form [^thingsThatWillNotBeMatched]. Outside of a character set, the caret is used to search for patterns at the beginning of strings.

let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString);
// Returns true
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst);
// Returns false




/** Regular Expressions: Match Ending String Patterns */
//You can search the end of strings using the dollar sign character $ at the end of the regex.

let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding);
// Returns true
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding);
// Returns false




/** Regular Expressions: Match All Letters and Numbers */
/** shorthand character classes */
//The closest character class in JavaScript to match the alphabet is \w. This shortcut is equal to [A-Za-z0-9_].

//Use the shorthand character class \w to count the number of alphanumeric characters in various quotes and strings.

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;




/** Regular Expressions: Match Everything But Letters and Numbers */
/** \W - This shortcut is the same as [^A-Za-z0-9_] */

//Use the shorthand character class \W to count the number of non-alphanumeric characters in various quotes and strings.

let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;




/** Regular Expressions: Match All Numbers */
/** The shortcut to look for digit characters is \d, with a lowercase d. This is equal to the character class [0-9] */

//Use the shorthand character class \d to count how many digits are in movie titles. Written out numbers ("six" instead of 6) do not count.

let numString = "Your sandwich will be $5.00";
let numRegex = /\d/g; // Change this line
let result = numString.match(numRegex).length;




/** Regular Expressions: Match All Non-Numbers */
/** The shortcut to look for non-digit characters is \D. This is equal to the character class [^0-9] */

//Use the shorthand character class for non-digits \D to count how many non-digits are in movie titles.

let numString = "Your sandwich will be $5.00";
let noNumRegex = /\D/g; // Change this line
let result = numString.match(noNumRegex).length;




/** Regular Expressions: Restrict Possible Usernames */

//1) The only numbers in the username have to be at the end. There can be zero or more of them at the end.
//2) Username letters can be lowercase and uppercase.
//3) Usernames have to be at least two characters long. A two-letter username can only use alphabet letter characters.

let username = "JackOfAllTrades";
let userCheck = /([a-zA-Z]\d*){2,}$/; // Change this line
let result = userCheck.test(username);



/** Regular Expressions: Positive and Negative Lookahead */
/** Lookaheads are patterns that tell JavaScript to look-ahead in your string to check for patterns further along. This can be useful when you want to search for multiple patterns over the same string. */
/** A positive lookahead will look to make sure the element in the search pattern is there, but won't actually match it. A positive lookahead is used as (?=...) where the ... is the required part that is not matched. */
/** A negative lookahead will look to make sure the element in the search pattern is not there. A negative lookahead is used as (?!...) where the ... is the pattern that you do not want to be there. The rest of the pattern is returned if the negative lookahead part is not present. */

let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/;
let qRegex = /q(?!u)/;
quit.match(quRegex); // Returns ["q"]
noquit.match(qRegex); // Returns ["q"]

//Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long and have two consecutive digits.

let sampleWord = "astronaut";
let pwRegex = /(?=\w{5,})(?=\D*\d{2})/; // Change this line
let result = pwRegex.test(sampleWord);




/** Regular Expressions: Reuse Patterns Using Capture Groups */
/** You can search for repeat substrings using capture groups. Parentheses, ( and ), are used to find repeat substrings. You put the regex of the pattern that will repeat in between the parentheses. */
/** To specify where that repeat string will appear, you use a backslash (\) and then a number. This number starts at 1 and increases with each additional capture group you use. An example would be \1 to match the first group. */

let repeatStr = "regex regex";
let repeatRegex = /(\w+)\s\1/;
repeatRegex.test(repeatStr); // Returns true
repeatStr.match(repeatRegex); // Returns ["regex regex", "regex"]

/** Using the .match() method on a string will return an array with the string it matches, along with its capture group. */


/** Regular Expressions: Match Whitespace */
/** You can search for whitespace using \s, which is a lowercase s. */
/** This pattern not only matches whitespace, but also carriage return, tab, form feed, and new line characters. */
/**You can think of it as similar to the character class [ \r\t\f\n\v]. */

let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
whiteSpace.match(spaceRegex);
// Returns [" ", " "]




/** Regular Expressions: Match Non-Whitespace Characters */
/** Search for non-whitespace using \S, which is an uppercase s. */
/** This pattern will not match whitespace, carriage return, tab, form feed, and new line characters. */
/** You can think of it being similar to the character class [^ \r\t\f\n\v]. */

let whiteSpace = "Whitespace. Whitespace everywhere!"
let nonSpaceRegex = /\S/g;
whiteSpace.match(nonSpaceRegex).length; // Returns 32




/** Regular Expressions: Specify Upper and Lower Number of Matches */
/** You can specify the lower and upper number of patterns with quantity specifiers. */
/** Quantity specifiers are used with curly brackets ({ and }). */
/** You put two numbers between the curly brackets - for the lower and upper number of patterns. */

//Change the regex ohRegex to match only 3 to 6 letter h's in the word "Oh no".
//https://www.freecodecamp.org/forum/t/the-quantity-specifiers-in-regex-is-upper-limit-really-a-limit/252836/6?u=shahid1993

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/; // Change this line
let result = ohRegex.test(ohStr);




/** Regular Expressions: Check for All or None */
/** You can specify the possible existence of an element with a question mark, ?. */
/** This checks for zero or one of the preceding element. */ 
/** You can think of this symbol as saying the previous element is optional. */

// Change the regex favRegex to match both the American English (favorite) and the British English (favourite) version of the word.

let favWord = "favorite";
let favRegex = /ou?/; // Change this line
let result = favRegex.test(favWord);



/** Regular Expressions: Reuse Patterns Using Capture Groups */
/** You can search for repeat substrings using capture groups. Parentheses, ( and ), are used to find repeat substrings. You put the regex of the pattern that will repeat in between the parentheses. */
/** To specify where that repeat string will appear, you use a backslash (\) and then a number. This number starts at 1 and increases with each additional capture group you use. An example would be \1 to match the first group. */

let repeatStr = "regex regex";
let repeatRegex = /(\w+)\s\1/;
repeatRegex.test(repeatStr); // Returns true
repeatStr.match(repeatRegex); // Returns ["regex regex", "regex"]

/** Using the .match() method on a string will return an array with the string it matches, along with its capture group. */

//Use capture groups in reRegex to match numbers that are repeated only three times in a string, each separated by a space.

let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/; // Change this line
let result = reRegex.test(repeatNum);




/** Regular Expressions: Use Capture Groups to Search and Replace */
/** You can search and replace text in a string using .replace() on a string. The inputs for .replace() is first the regex pattern you want to search for. The second parameter is the string to replace the match or a function to do something. */

let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");
// Returns "The sky is blue."

/** You can also access capture groups in the replacement string with dollar signs ($). */
"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');
// Returns "Camp Code"

//Write a regex so that it will search for the string "good". Then update the replaceText variable to replace "good" with "okey-dokey".
let huhText = "This sandwich is good.";
let fixRegex = /good/; // Change this line
let replaceText = "okey-dokey"; // Change this line
let result = huhText.replace(fixRegex, replaceText);




/** Regular Expressions: Remove Whitespace from Start and End */

//Write a regex and use the appropriate string methods to remove whitespace at the beginning and end of strings.
let hello = "   Hello, World!  ";
let wsRegex = /^\s*|\s*$/g; // Change this line
let result = hello.replace(wsRegex,''); // Change this line

















