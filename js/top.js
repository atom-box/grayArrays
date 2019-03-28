import {dummy} from './bottom.js';
// to avoid CORS error, get path right
// THE file that is the head can be anywhere, but the next called path must have same insert point on the tree.
// See also SWISSREGEX project

let nihilWordsQuote = ["O", "thou'lt", "come", "no", "more", "never", "never", "never", "never", "never"];
let nihilWordsComment = ["Lear", "addresses", "these", "words", "to", "the", "body", "of", "Cordelia", "in", "the", "play’s", "final", "scene"];

const funcs = [];
let tempFuncObj = new Date(); 
funcs.push(tempFuncObj);
tempFuncObj = {
	name: 'join' ,
	printableCode: "p r i n n a b l e" ,
	verb: function(a){return this.a}
};
funcs.push(tempFuncObj);
tempFuncObj = {
	name: null,
	printableCode: null ,
	verb: function(a){return this.a}
};
funcs.push(tempFuncObj);




console.log(`"Top" is loaded.`);
console.log(`"Bottom" says: ${funcs[0]}`);

// COMMIT Create datatype: array of objects where each is one of the functions for the page stored as NAME,PRINTABLECODE,VERB where verb is the executable func itself