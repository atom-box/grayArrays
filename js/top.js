import {dummy, jr} from './bottom.js';
// to avoid CORS error, get path right
// THE file that is the head can be anywhere, but the next called path must have same insert point on the tree.
// See also SWISSREGEX project

let nihilWordsQuote = ["O", "thou'lt", "come", "no", "more", "never", "never", "never", "never", "never"];
let nihilWordsComment = ["Lear", "addresses", "these", "words", "to", "the", "body", "of", "Cordelia", "in", "the", "play’s", "final", "scene"];

// refactor the incoming data to be JSON

// const funcs = [];
// let tempFuncObj = new Date(); 
// funcs.push(tempFuncObj);
// tempFuncObj = {
// 	name: 'CamEst thou from an OBJECT in TOP?' ,
// 	printableCode: "p r i n n a b l e" ,
// 	data1: nihilWordsQuote,
// 	verb: function(a){return this.a}
// };
// funcs.push(tempFuncObj);
// tempFuncObj = {
// 	name: 'Gramps & Fran',
// 	printableCode: null ,
// 	verb: function(a){return this.a}
// };
// funcs.push(tempFuncObj);

let funcs = [];
funcs = JSON.parse(jr);

var para = document.createElement("P");                 // Create a <p> element
para.innerHTML = funcs[1].name;                // Insert text
document.getElementById("input__concat").appendChild(para); 


console.log(`"Top" is loaded.`);
console.log(`"Bottom" says: ${funcs[0]}`);

// Add suggested array  data1, data2
// Wire the data into the frontend.
// store data as JSON
// use the array of objects
