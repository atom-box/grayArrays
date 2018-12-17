let flitter = (things, rule) => {
	return(`First element: ${things[0]}, length of rule: ${rule.length}`);
};

const ELEMENTS = ["oxygen-8", "boron-5", "titanium-15"];
const CHECK = "non-metal";

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
To Do: export this and call it from app.js
*/