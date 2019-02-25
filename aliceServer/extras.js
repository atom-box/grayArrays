const mode = (nums)=>{
	/**
	STRATEGY
	sort the array!!
	set index of champ, index of now,  flood, occurances.
	whileloop increments occurances until hetero
	if occurances > champ set new index of champ as that.
	Return nums[champIndex]

 ALTERNATIVE STRATEGY write pairs to [a,0],[b,0],[c,0].  
 This avoids sorting.  Would it be better at scale?  Prolly not.
	*/
	let champ = null;
	let occurances = 0;
};

const dummy =()=>{
	return "Boy am I dumb.";
}

module.exports = {dummy, mode};