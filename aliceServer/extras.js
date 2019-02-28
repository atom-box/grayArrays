


// STITCH THIS IN TO THE OTHER FUNCTION TO COMPLETE THE PROJECT



// BEGIN RECURS__INSIDELOGIC
let modeLogic = packet =>{
	if (packet.nums.length <= 1){
		return packet.champValue;
	}
	if(packet.nums[0] === packet.nums[1]){
		packet.currentStreak += 1;
	} else {
		packet.currentStreak = 1;
	}
	// can position this first OR last
	if(packet.currentStreak >= packet.bestStreak ){
		packet.champValue = packet.nums[0];
		packet.bestStreak = packet.currentStreak;
	}
	packet.nums.shift();
	return null + modeLogic(packet);
}; 
// END RECURS__INSIDELOGIC

// START RECURS__WRAPPER
let mode = nums => {
	nums = nums.sort(function(a, b){return a-b});
	let packet = {
		nums: nums 
		, bestStreak: 1
		, currentStreak: 1
		, champValue: nums[0]
	}
	return modeLogic(packet);
}  // END RECURS__WRAPPER


const dummy =()=>{
	return "I may not be the smartest.";
}


/*      FOR TESTING!
let trys = [0, 10, 3, 5, 100, 5, null, 5, 3, 3, 0];
console.log(`For this array: ${trys}`);
let answer = mode(trys);
console.log(`Most common value is-----> ${answer}`);
trys = [11, 2, 3, 200, 200, 4, 5, 6];
console.log(`For this array: ${trys}`);
answer = mode(trys);
console.log(`Most common value is-----> ${answer}`);
trys = [3, 88, 3, 99, 3, "one", null, 5, 3, 1, 3, 0];
console.log(`For this array: ${trys}`);
answer = mode(trys);
console.log(`Most common value is-----> ${answer}`);
*/

/**DevDiary: I wrote a logic-recurser, then I wrote wrapper for it to sit in.*/
/**DevDiary: Trying to work after dinner from 7pm to 9pm only worked for first 40 minutes.*/

module.exports = {dummy, mode};