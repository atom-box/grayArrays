let earsAre =bunnies=>{
	if (bunnies){
		bunnies -= 1;
		return 2;
	} else {
		return 0;
	}
}

let n = 1;
console.log(`For ${n} bunnies there are ${earsAre(n)} ears.`);
n = 0;
console.log(`For ${n} bunnies there are ${earsAre(n)} ears.`);



/*
We have a number of bunnies and each bunny has two big floppy ears. We want to compute the total number of ears across all the bunnies recursively 
(Using recursion: no loops or multiplication!).

bunnyEars(0) → 0
bunnyEars(1) → 2
bunnyEars(2) → 4

Nick Parlante's recursion strategy: 
first test for one or two base cases that are so simple, the answer can be returned immediately. Otherwise, make a recursive a call for a smaller case (that is, a case which is a step towards the base case). Assume that the recursive call works correctly, and fix up what it returns to make the answer.
*/