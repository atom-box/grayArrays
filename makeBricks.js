function makeBricks(small, large, linear) {
	console.log("ARGUMENTS LENGTH");
	console.log(arguments.length);
	console.log("000000");
	console.log(arguments[0]);
	console.log("111111");
	console.log(arguments[1]);
	console.log("222222");
	console.log(arguments[2]);
	console.log("333333");
	console.log(arguments[3]);
	console.log("444444");
	console.log(arguments[4]);
	console.log(small);
	console.log(large);
	console.log(linear);
}


console.log(`MAKEBRICKS expects ${makeBricks.length} argggss.`);
console.log(`Passed in 3, 2, 77, 5, 4, 33, 222,4, 3, 2, 3, 2, 12`);
makeBricks(3, 2, 77, 5, 4, 33, 222,4, 3, 2, 3, 2, 12);

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