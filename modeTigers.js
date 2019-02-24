const games = [105, 158, 153, 137, 110, 153, 94, 120, 154, 92, 109, 68, 56, 30, 31, 30, 29, 13, 5, 8, 3, 1, 35, 34, 19, 14, 26, 50, 6, 14, 37, 61, 56, 5, 20, 19, 62, 4, 21, 3, 6, 66, 24, 54];
const triples = [1, 1, 4, 0, 4, 2, 5, 2, 0, 1, 2, 1, 3, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

let tigers = {games: games,
							triples: triples
							}


const median =(nums)=>{
	//works for odds
	return (nums.sort())[Math.trunc(nums.length/2+1)];
};

const mean =(nums)=>{
	let sum = 0;
	let result = null;
	for (let n of nums){
		sum += n;
	}
		result = Math.trunc(sum / nums.length * 10);
		result /= 10;
	 	return result;
};

const median =(nums)=>{

};

console.log(`Mean Tiger games played: ${mean(tigers.games)}`);
console.log(`median Tiger games played: ${mode(tigers.games)}`);

/**
Return the mean, median, and mode of an array.
*/

/**
February 24, 2019
Evan Genest
*/



/* Detroit Tigers stats from 2016*/
// watch these hoist or not
// Result: when tried making object above, NEITHER hoisted.


/**
Dev Diary: strangely, nothing hoists: these arrays are unprintable above.

Dev Diary: Whoa, I was confused on the ES6 For loop: 
for i IN nums
for i OF nums
Big difference!  Got it now.
*/
