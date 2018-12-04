const u = [2,[77, 200,[100, 35]]];
const v = [2,[77, 200,[100, 35],[230, 210, 185, 172], 29, 45]];

const w = [2,[77, 200,[100, 35],[230, 210, 185, 172], 29, 45], 3.14, 2.7, [1965, 1960, 1956], null, undefined];
const x = [33, 45, 78];

console.log("Is w an Array?");
console.log(Array.isArray(w));

let total = 0;

function tally (tot_1, arr1 ){
	if (tot_1===NaN || !Array.isArray(arr1)){
		return 0;
		//	non-array was passed in
	}
	let stop = arr1.length;
	let i = 0;
	for(; i < stop; i++){
		if (Array.isArray(arr1[i])){
			tot_1 += tally(arr1[i]);

		} else {
			tot_1 += arr1[i];
			console.log("added " + arr1[i] + " in the ELSE");
		}
		console.log("after func added");
	} 
	return tot_1;
}

console.log("Simple array totalled: " + tally(total, x));
console.log("Multi-array U totalled: " + tally(total, u));
console.log("Multi-array totalled: " + tally(total, w));
console.log("Done.");

/*   
Dec 1, 2018  Evan Genest
This problem asks you to sum up all of the numbers within an array, but the array may also contains other arrays with numbers. This is what we call a nested array. For example:
[1, 1, 1, [3, 4, [8]], [5]]
 */
