/*
Next action.
Duh - set brix should be a different function.  Make a setter called brix.set .
Optional input of stock, extend for small. 
Then do an inventory check of the small, large.  If insufficient bricks, dont ERR, just exit with gap unchanged.  
Build more use-cases.
*/





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

// g & s Integers.  New total stock of bricks.
brix.set =(g, s)=>{
	if (!Number.isInteger(g) || !Number.isInteger(s)){return}
	if (g > 0){
		brix._stockpile[5] = g;
	}
	if (s > 0){
		brix._stockpile[1] = s;
	}
}

/**
 currentGap Integer.  The inches of wall you are trying to fill in.
 whichBrick Integer.  The inches a single brick is.
 manualLarge Integer. Optional parameter: if passed in, resets the inventory of large bricks.
 manualSmall Integer.  Optional parameter: if passed in, resets the inventory of small bricks.
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
	console.log(`xxxx...we can lay ${canLay} (size ${whichBrick}) bricks.  This will leave a space of ${leftOverSpace}.`);
	// to do: Confirm bricks exist in stock!
	return leftOverSpace;
}


console.log(`Building for 3, 3, 10`);
brix.set(3, 3);
let remainingSpace = brix.postBuildGap(10, 5);
remainingSpace = brix.postBuildGap(remainingSpace, 1);
console.log(`Function exited, returned this: ${remainingSpace} as the amount of unbuilt space.`);



/*
Jan 1, 2019
@mistergenest

We want to make a row of bricks that is goal inches long. We have a number of small bricks (1 inch each) and big bricks (5 inches each). Return true if it is possible to make the goal by choosing from the given bricks. This is a little harder than it looks and can be done without any loops. See also: Introduction to MakeBricks

makeBricks(3, 1, 8) → true
makeBricks(3, 1, 9) → false
makeBricks(3, 2, 10) → true

DevDiary: I learned that arrow functions are different than functions.  They are strictish, they lack the arguments list, so you cannot check their length.
*/