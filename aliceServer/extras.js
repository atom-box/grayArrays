console.log("Top.");

// BEGIN RECURS__INSIDELOGIC
let modeLogic = packet =>{
	if (packet.nums.length <= 1){
		console.log(`finally reached base case, array is now ${packet.nums}.`);
		return packet.champValue;
	}
	console.log("...hop...");
	if(packet.nums[0] === packet.nums[1]){
		packet.currentStreak += 1;
	} else {
		packet.currentStreak = 1;
	}
	// can position this first OR last
	if(packet.currentStreak >= packet.bestStreak ){
		packet.champValue
	}
	console.log(packet.nums.shift());
	return null + modeLogic(packet);
}; 
// END RECURS__INSIDELOGIC

// START RECURS__WRAPPER
let modeWrapper = nums => {
	nums = nums.sort(function(a, b){return a-b});
	console.log(`Post sort order is:${nums}.`);

	let packet = {
		nums: nums 
		, bestStreak: 1
		, currentStreak: 1
		, champValue: nums[0]
	}
	console.log(`Incoming Array ${packet.nums}`);
	console.log(`We see ${packet.nums.length} then ${packet.bestStreak} and finally ${packet.champValue}  `);
	return modeLogic(packet);
}  // END RECURS__WRAPPER


const dummy =()=>{
	return "I may not be the smartest.";
}

let answer = modeWrapper([10, 3, 5, 5, 5, 3, 3]);
console.log(`Answer-----> ${answer}`);
answer = modeWrapper([11, 2, 3, 200, 200, 4, 5, 6]);
console.log(`Answer-----> ${answer}`);
answer = modeWrapper([111, 5, 5, 5, 5, 3, 111, 13,  3, 11]);
console.log(`Answer-----> ${answer}`);

/**DevDiary: I wrote a logic-recurser, then I wrote wrapper for it to sit in.*/

module.exports = {dummy, modeWrapper};