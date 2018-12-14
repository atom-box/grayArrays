const chopify =(str1, str2)=>{
	let str1and2 = str1 + str2;
	return str1and2; 
};

console.log(chopify("Pig", "Pen"));

/**
codingbat.com says:
Given two strings, a and b, create a bigger 
string made of the first char of a, the first char 
of b, the second char of a, the second char of b, 
and so on. Any leftover chars go at the end of the 
result.
mixString("abc", "xyz") → "axbycz"
mixString("Hi", "There") → "HTihere"
mixString("xxxx", "There") → "xTxhxexre"
December 14, 2018
@mistergenest
*/