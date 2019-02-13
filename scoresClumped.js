/**
IRONCHEF this Challenge:
1. Incorporate ternary shift syntax
2. Build in a push button to DOM
	field
	button
	out
3. Handle all data (and funcs?) in a page 50 object
*/

/** My pseudocode!
let  hasClump = (nums)=>{
	if arraylength 2orless return false
	if 0, 1, 2 clumpy return true
	unshift by one
	pass array recursively	
}; 
*/

let  hasClump = (nums)=>{
	if (nums.length < 3){
		return false;
	}
	if ((nums[2] - nums[1] <= 2 ) && (nums[1]-nums[0]<=2)){
		console.log(`Found cluster: ${nums[0]} ${nums[1]} ${nums[2]}`)
		return true;
	}
	nums.unshift(1);
	hasClump(nums);
};

let testNums = [2, 14, 49];
console.log(`result for ${testNums} is ${hasClump(testNums)}`); // false
testNums = [3, 4, 6];
console.log(`result for ${testNums} is ${hasClump(testNums)}`); // false
testNums = [1, 3, 5, 5];
console.log(`result for ${testNums} is ${hasClump(testNums)}`); // true


/**
SCORESCLUMP exercise:
https://codingbat.com/prob/p194530
Given an array of scores sorted in increasing order, return true if the array contains 3 adjacent scores that differ from each other by at most 2, such as with {3, 4, 5} or {3, 5, 5}.
Test data:
scoresClump([3, 4, 5]) → true
scoresClump([3, 4, 6]) → false
scoresClump([1, 3, 5, 5]) → true
*/

/**
Based on Lucky8srecursive.js you did: the way to not initialize is
1 always take the whole thing, but at the end
when you call the recursion
call it on some degraded state.
For an array, this could mean the array operates ever on the first position
and keeps passing a smaller array that's been unshifted.
*/