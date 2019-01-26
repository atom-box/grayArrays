const bestTimes = [31, 1, 1, [3, 4, [8]], [5]];

let tally = nums => {
	let recur = parcel =>{
		return nums[0];
	}
	let sum = 0;
	sum = recur(nums);
	return sum;
};





console.log(tally(bestTimes));

/*   
Jan 26, 2019  Evan Genest
Same problem from a month ago; see if you can remember the recursive base case.
This problem asks you to sum up all of the numbers within an array, but the array may also contains other arrays with numbers. This is what we call a nested array. For example:
[1, 1, 1, [3, 4, [8]], [5]]
 */
