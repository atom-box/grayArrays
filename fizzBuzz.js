// Refactor! What is modern js for FOR?
let i = 1;
let out = "";
for (; i <= 100; i++) {

	if (!(i%3)) {
	console.log(out);
	} 
	if (!(i%5)) {
	console.log(out);
	} 
	if (!out){
	console.log(i);
	} 
}
console.log("Done.");

/*   
Dec 1, 2018  Evan Genest
Fizz Buzz
Print out all the numbers from 1 to 100. But for every number divisible by 3 print replace it with the word “Fizz,” for any number divisible by 5 replace it with the word “Buzz” and for a number divisible by both 3 and 5 replace it with the word “FizzBuzz.”

 */
