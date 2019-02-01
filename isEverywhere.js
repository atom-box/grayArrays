let isEverywhere =(nums, candidate )=>{
	for (let i of nums){
		console.log(nums[i]);
	}
	return 990 + candidate;
} ;



console.log(isEverywhere([1, 2, 1, 3], 1));
console.log(isEverywhere([1, 2, 1, 3], 2));
console.log(isEverywhere([1, 2, 1, 3, 4], 1));


/********
@mistergenest
2/1/2019

We'll say that a value is "everywhere" in an array if for every pair of adjacent elements in the array, at least one of the pair is that value. Return true if the given value is everywhere in the array.

isEverywhere([1, 2, 1, 3], 1) → true
isEverywhere([1, 2, 1, 3], 2) → false
isEverywhere([1, 2, 1, 3, 4], 1) → false

*/