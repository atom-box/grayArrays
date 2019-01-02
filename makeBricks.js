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
}


console.log(`Passed in 11, 5`);
brix.postBuildGap(11, 5);

/*console.log(`Passed in NUTHIN`);
makeBricks();
*//*console.log(`Passed in 4, 3, 2, 3, 2, 12`);
makeBricks(4, 3, 2, 3, 2, 12);
*/
/*
Jan 1, 2019
@mistergenest

We want to make a row of bricks that is goal inches long. We have a number of small bricks (1 inch each) and big bricks (5 inches each). Return true if it is possible to make the goal by choosing from the given bricks. This is a little harder than it looks and can be done without any loops. See also: Introduction to MakeBricks

makeBricks(3, 1, 8) → true
makeBricks(3, 1, 9) → false
makeBricks(3, 2, 10) → true

*/