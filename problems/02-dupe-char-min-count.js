/***********************************************************************
Write a function `duplicateCharMinCount(string, minCount)` that will take
a string as an argument and returns an array of characters that show up
at least `minCount` number of times. The string will have at least one
character.

Examples:

duplicateCharMinCount("apple", 2) // ["p"]
duplicateCharMinCount("banana", 2) // ["a", "n"]
duplicateCharMinCount("What about a longer string?", 3) // ["a", "t", " "]
***********************************************************************/

function countCharacters(string) {
	// Your code here 
	let obj = {};

	for (let i = 0; i < string.length; i++) {
		let keys = Object.keys(obj);
		if (!keys.includes(string[i])) {
			obj[string[i]]= 1;
		} else {
			obj[string[i]] += 1;
		}
	}
	return obj;
}

function duplicateCharMinCount(string, minCount) {
	// Your code here 
	let obj = countCharacters(string);
	let res = [];
	
	for (let key in obj) {
		if (obj[key]>=minCount) {
			res.push(key);
		}
	}
	// console.log(res);
	return res;
}

duplicateCharMinCount("apple", 2) // ["p"]
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = duplicateCharMinCount;
