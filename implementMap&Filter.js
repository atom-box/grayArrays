
/*TO DO:
NEXT, AT WORK: (1) append RULE + ARRAYITEM (2) use eval() to check an appended string in the loop 
(3) OUTPUT RESULTS
*/

// rule: A function that returns a boolean.
let flitter = (things, rule) => {

/*	if (arguments.length !== 2){
		console.log(`Function "flitter" was passed ${arguments.length} arguments.`);
		console.log(`Function "flitter" requires LIST and RULE-string`);
		// return empty list if ERR
		return [];
	} */
		// result: Becomes true in loop when the rule matches.
		// stringOfRule: Holds things[i] array member, headed for appending.
		let result = false;
		let stringOfArrItem = "";
		console.log(`Rule result, by item:`);
		for (let i = 0; i <= things.length - 1 ; i++){
			result = rule(things[i]);
			console.log(`# ${i} ${result}`);
 	}
	return(`First element: ${things[0]}, length of rule: ${rule.length}`);
};

const ELEMENTS = ["oxygen-8", "tootsie", "boron-5", "titanium-15"];
const CHECK =(x)=>{return x === "tootsie"} ;

console.log("Begin...");
console.log(flitter(ELEMENTS, CHECK));
console.log("Done!");

/**
Coding Interview byte-ebook says:
IMPLEMENT MAP  &  FILTER
They are both functions that take in a list, perform some operation on that list without changing the original list, and then return a new lists. The functions do not change any other variables and do not touch anything else except those lists they were given.
Map: applY the function to each element in the list   ARGS: list and function
Filter returns a new list where every element in the original list passes the conditional (returns true).  ARGS: list and conditional
December 17, 2018
@mistergenest
Dev Diary:  7:28am
To Do: deciding whether to pass in as a function or a string.  Parsing a string into symbolic sounds tough. 
Try using tick and dollar sign to insert a string into a logic statement.

*/

/*
Idea: Love and Loss remade w/ @sloan in the role of Brian Wilson(stick with me here): Rotate each member through the role of Brian Wilson, like the various actors were Bob in I'm Not There. 
*/