/*functional, vowel-counter*/

let test1 = "florecitas";
let test2 = [true, true, false]

function countVowels(s){
	let letters = Array.from(s);
	let bologna = letters.reduce( (a, b)=>{return a += (b === 'a')? 1: 0;}, 0);
	return bologna;
}

console.log(countVowels('Cleveland: Aaaaaaaaaaaahhhhhh...'));