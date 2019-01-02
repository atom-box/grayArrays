/* 
brix  An object with # of bricks and boolean function for wall length.
_stockpile Object.  A private property.  Each category of brick is named by inches a digitstring
*/ 
let brix = {};
brix = {
	_stockpile: {
		5: 0,
		1: 0
	}
};


/**
 currentGap Integer.  The inches of wall you are trying to fill in.
 whichBrick Integer.  The inches a single brick is.
*/
brix.postBuildGap =(currentGap, whichBrick)=> {
	console.log(`If your opening is ${currentGap} and your brick size is ${whichBrick}...`);
	// to do: Input should be vetted.
	// to do: Brick stockpiles should be confirmed.

	// Is gap already solved? Report as zero.
	if (currentGap === 0) return currentGap;
	let canLay = currentGap / whichBrick;
	canLay = Math.trunc(canLay);
	const leftOverSpace = currentGap - canLay * whichBrick;
	console.log(`...we can lay ${canLay} (size ${whichBrick}) bricks.  This will leave a space of ${leftOverSpace}.`);
	// to do: Confirm bricks exist in stock!
	return leftOverSpace;
}


console.log(`Passed in 11, 5`);
const message = brix.postBuildGap(11, 5);
console.log(`Function exited, returned this: ${message}`);

/*
Jan 1, 2019
@mistergenest

We want to make a row of bricks that is goal inches long. We have a number of small bricks (1 inch each) and big bricks (5 inches each). Return true if it is possible to make the goal by choosing from the given bricks. This is a little harder than it looks and can be done without any loops. See also: Introduction to MakeBricks

makeBricks(3, 1, 8) → true
makeBricks(3, 1, 9) → false
makeBricks(3, 2, 10) → true

DevDiary: I learned that arrow functions are different than functions.  They are strictish, they lack the arguments list, so you cannot check their length.
*/