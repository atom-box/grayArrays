const u = [2,[77, 200,[100, 35]]];
const v = [2,[77, 200,[100, 35],[230, 210, 185, 172], 29, 45]];

const w = [2,[77, 200,[100, 35],[230, 210, 185, 172], 29, 45], 3.14, 2.7, [1965, 1960, 1956], null, undefined];
const x = [33, 45, 78];


function sumNested(arr) { let result = 0;
// sum up all the numbers in array
for (let i = 0; i < arr.length; i++) {
// if element is a nested array, sum all of its elements
if (typeof arr[i] !== 'number') { result += sumNested(arr[i]);
} else {
result += arr[i];
} }
return result; }

console.log("---Simple array totalled: " + sumNested(x));
console.log("---Multi-array U totalled: " + sumNested(u));
console.log("---Done.");

/*   
Dec 1, 2018  Evan Genest
This problem asks you to sum up all of the numbers within an array, but the array may also contains other arrays with numbers. This is what we call a nested array. For example:
[1, 1, 1, [3, 4, [8]], [5]]
 */
