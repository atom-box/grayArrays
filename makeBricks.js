const makeBricks =(small, large, linear)=> {
	console.log("Go...");
	console.log(arguments.length);
	console.log(small);
	console.log(large);
	console.log(linear);
}


console.log(`MAKEBRICKS expects ${makeBricks.length} argggss.`);
makeBricks(3, 2, 77);
makeBricks();
makeBricks(4, 3, 2, 3, 2, 12 , "go");

/*
Jan 1, 2019
@mistergenest

We want to make a row of bricks that is goal inches long. We have a number of small bricks (1 inch each) and big bricks (5 inches each). Return true if it is possible to make the goal by choosing from the given bricks. This is a little harder than it looks and can be done without any loops. See also: Introduction to MakeBricks

makeBricks(3, 1, 8) → true
makeBricks(3, 1, 9) → false
makeBricks(3, 2, 10) → true

*/