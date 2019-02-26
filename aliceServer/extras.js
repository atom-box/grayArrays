console.log("Top.");

// start modeLogic A RECURSIVE FUNCTION INSIDE THE MODE WRAPPER
let modeLogic = packet =>{
	if (packet.nums.length <= 1){
		console.log("...hip...");
		return packet.champValue;
	}
	console.log(packet.nums.shift());
	console.log("...hop...");
	return modeLogic(packet);
} 
// end modeLogicsion



let modeWrapper = nums => {
	nums.sort();
	let packet = {
		nums: nums 
		, bestRun: 1
		, champValue: nums[0]
	}
	console.log(`We see ${packet.nums.length} then ${packet.bestRun} and finally ${packet.champValue}  `);
	return modeLogic(packet);
}


const dummy =()=>{
	return "I may not be the smartest.";
}

let answer = modeWrapper([3, 5, 5, 5, 3, 3]);
console.log(`Answer-----> ${answer}`);

/**DevDiary: I wrote a logic-recurser, then I wrote wrapper for it to sit in.*/

module.exports = {dummy, modeWrapper};