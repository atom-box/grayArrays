// my scratchspace:
// Find threefers, return integer of detected threefers as DASH INTEGER appended onto end of string
// As above but also append DASH INTEGER tallying threefers with a vowel in the middle
// Finally, return the modified string described in the spec 

let zipZap = inS =>{
	outS = '';
	console.log(`:    :    :    :    :    `);
	console.log(`Incoming --------> ${inS}.`);
	for(let i=0; i<inS.length-2; i++){
		outS += inS[i];
		if (inS[i]==='z' && 
			inS[i+2]==='p' &&
			['a','e','i','o','u','y'].includes(inS[i+1])){
			console.log(`DETECTED Z*P IN for ${inS[i]}${inS[i+1]}${inS[i+2]}`)
			i++;
		}
	}
	// without this you'll skip final letter.
	outS += inS.slice(-2);  // MEMORIZE syntax !!
	return outS;
}

let myString = "zaapzaap";
console.log(`[${myString}] becomes [ ${zipZap(myString)}]`);
myString = "z-pz?pzzzaaapppzypzoop ppppzzazoz";
console.log(`[${myString}] becomes [ ${zipZap(myString)}]`);
myString = "z=pz6p";
console.log(`[${myString}] becomes [ ${zipZap(myString)}]`);
myString = "zapz-p";
console.log(`[${myString}] becomes [ ${zipZap(myString)}]`);
myString = "zwpzup";
console.log(`[${myString}] becomes [ ${zipZap(myString)}]`);

/*****}]`**********
ZipZap exercise https://codingbat.com/prob/p180759
@mistergenest 
Evan Genest
Feb 10, 2019
Look for patterns like "zip" and "zap" in the string -- length-3, starting with 'z' and ending with 'p' and the middle has a vowel. Return a string where for all such words, the middle letter is gone, so "zipXzap" yields "zpXzp".

zipZap("zipXzap") → "zpXzp"
zipZap("zopzop") → "zpzp"
zipZap("zzzopzop") → "zzzpzp"

DEV NOTES
You forgot syntax of inS.slice(-1) to get the last letter of a string.

Fails for z-p and zaap

This was a just-right exercise for before breakfast.  Was not solved on first try, had bite sized edge cases that didn't need much work to solve.
****************/
