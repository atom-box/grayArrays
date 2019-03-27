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
	return "I come from bottom JS.";
}

module.exports = {dummy, };