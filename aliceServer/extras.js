console.log("Top.");

// BEGIN RECURS__INSIDELOGIC
let modeLogic = packet =>{
	if (packet.nums.length <= 1){
		console.log("...hip...");
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
	nums.sort();
	let packet = {
		nums: nums 
		, bestStreak: 1
		, currentStreak: 1
		, champValue: nums[0]
	}
	console.log(`We see ${packet.nums.length} then ${packet.bestRun} and finally ${packet.champValue}  `);
	return modeLogic(packet);
}  // END RECURS__WRAPPER


const dummy =()=>{
	return "I may not be the smartest.";
}

let answer = modeWrapper([3, 5, 5, 5, 3, 3]);
console.log(`Answer-----> ${answer}`);

/**DevDiary: I wrote a logic-recurser, then I wrote wrapper for it to sit in.*/

module.exports = {dummy, modeWrapper};