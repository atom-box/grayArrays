const {dummy, mode} = require('./extras.js');

console.log(`${dummy()}, but I'm here.`);

const games = [105, 158, 153, 137, 110, 153, 94, 120, 154, 92, 109, 68, 56, 30, 31, 30, 29, 13, 5, 8, 3, 1, 35, 34, 19, 14, 26, 50, 6, 14, 37, 61, 56, 5, 20, 19, 62, 4, 21, 3, 6, 66, 24, 54];
const triples = [1, 1, 4, 0, 4, 2, 5, 2, 0, 1, 2, 1, 3, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

let tigers = {games: games,
							triples: triples
							};


const median =(nums)=>{
	//works for odds
	if (nums.length === 0){return null};
	if (nums.length === 1){return nums[0]};
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


console.log(`Mean Tiger games played: ${mean(tigers.games)}`);
console.log(`Median Tiger games played: ${median(tigers.games)}`);
console.log(`Mode Tiger games played: ${mode(tigers.games)}`);

console.log(`Mean triples: ${mean(tigers.triples)}`);
console.log(`Median triples: ${median(tigers.triples)}`);
console.log(`Mode triples: ${mode(tigers.triples)}`);

/**

if (nums.length === 0){return null};if (nums.length === 0)Return the mean, median, and mode of an arr{return null};a
y.
*/

/**
February 24, 2019
Evan Genest
*/



/* Detroit Tigers stats from 2016*/
// watch these hoist or not
// Result: when tried making object above, NEITHER hoisted.


/**
Dev Diary: Turns out that TRIPLES are a bimodal statistic, second commonest total is TWO, not ONE.
Dev Diary: strangely, nothing hoists: these arrays are unprintable above.

Dev Diary: Whoa, I was confused on the ES6 For loop: 
for i IN nums
for i OF nums
Big difference!  Got it now.

Dev Diary: 
Idea for a code meetup is to pair-code coding bats. on a given night of the week downtown.  How to promote-recruit?  Ask yCde, ask girls who code, tell at MadisonSoftwareDevs. I would bring a keyboard.
*/
