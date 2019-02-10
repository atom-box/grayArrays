// my scratchspace:
// Find threefers, return integer of detected threefers as DASH INTEGER appended onto end of string
// As above but also append DASH INTEGER tallying threefers with a vowel in the middle
// Finally, return the modified string described in the spec 

let zipZap = inS =>{
	let outS = inS;
	return(`There are ${outS.length} chars in ${outS}.`);
}

console.log(zipZap("zipXzap"));
console.log(zipZap("zopzop"));
console.log(zipZap("zzzopzop"));


/***************
ZipZap exercise https://codingbat.com/prob/p180759
@mistergenest 
Evan Genest
Feb 10, 2019
Look for patterns like "zip" and "zap" in the string -- length-3, starting with 'z' and ending with 'p' and the middle has a vowel. Return a string where for all such words, the middle letter is gone, so "zipXzap" yields "zpXzp".

zipZap("zipXzap") → "zpXzp"
zipZap("zopzop") → "zpzp"
zipZap("zzzopzop") → "zzzpzp"
****************/