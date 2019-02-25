const mode = (nums)=>{
	let champIndex = 0,
	occurances = 0,
	maxCount = 0;

	nums.sort();

	for (let n of nums){

	}
	/**
	STRATEGY
	sort the array!!

	set index of champ, index of now,  flood, occurances.
	whileloop increments occurances until hetero
	if occurances > champ set new index of champ as that.
	Return nums[champIndex]

................LEFT OFF HERE

	store prev
	if same as prev
	increment OCCURANCES

 ALTERNATIVE STRATEGY write pairs to [a,0],[b,0],[c,0].  
 This avoids sorting.  Would it be better at scale?  Prolly not.
	*/
};

const dummy =()=>{
	return "Boy am I dumb.";
}

module.exports = {dummy, mode};