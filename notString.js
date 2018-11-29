function yak (a, b){
	if (typeof a !== 'number' || typeof b !== 'number'){
		return "Not a number: error."
	} else if	(a === b){
		return (a+b)*2;
	} else {
		return a*b;
	}
}
console.log(yak(null, true));
console.log(yak(2, 3));
console.log(yak(22, 22));
console.log(yak("horse", 3));
console.log(yak("three", "four"));


/*   
Nov 28, 2018  Evan Genest
from https://codingbat.com/prob/p187868
Given a string, return a new string where "not " has been added to the front. However, if the string already begins with "not", return the string unchanged. Note: use .equals() to compare 2 strings.

notString("candy") → "not candy"
notString("x") → "not x"
notString("not bad") → "not bad"*/