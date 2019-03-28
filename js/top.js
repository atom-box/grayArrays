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
	data1: nihilWordsQuote,
	verb: function(a){return this.a}
};
funcs.push(tempFuncObj);
tempFuncObj = {
	name: 'Gramps & Fran',
	printableCode: null ,
	verb: function(a){return this.a}
};
funcs.push(tempFuncObj);

var para = document.createElement("P");                 // Create a <p> element
para.innerHTML = "This is a paragraph.";                // Insert text
document.getElementById("myDIV").appendChild(para); 


console.log(`"Top" is loaded.`);
console.log(`"Bottom" says: ${funcs[0]}`);

// Add suggested array  data1, data2
// Wire the data into the frontend.