import {dummy, jr, rotators} from './bottom.js';
// to avoid CORS error, get path right
// THE file that is the head can be anywhere, but the next called path must have same insert point on the tree.
// See also SWISSREGEX project


let cliffWords = ["Lear", "addresses", "these", "words", "to", "the", "body", "of", "Cordelia", "in", "the", "play’s", "final", "scene"];
let bardWords = ["O", "thou'lt", "come", "no", "more", "never", "never", "never", "never", "never"];

  //---------------------1---------------------------
let ele = document.createElement("P");         
let content = `${cliffWords} -AND- ${bardWords}`;
ele.innerHTML = content;            // Insert text
document.getElementById("demo1__before").appendChild(ele); 
ele = document.createElement("P");         
content = cliffWords.concat(bardWords);
ele.innerHTML = content;           // Insert text
document.getElementById("demo1__after").appendChild(ele); 
  //---------------------2---------------------------
ele = document.createElement("P");         
content = `${bardWords}`
ele.innerHTML = content;            // Insert text
document.getElementById("demo2__before").appendChild(ele); 
ele = document.createElement("P");         
content = bardWords.slice(5, 9);
ele.innerHTML = content;           // Insert text
document.getElementById("demo2__after").appendChild(ele); 
  //----------------------3--------------------------
ele = document.createElement("P");         
let lear_tears = bardWords.slice(5, 9);
content = `${lear_tears}`
ele.innerHTML = content;            // Insert text
document.getElementById("demo3__before").appendChild(ele); 
ele = document.createElement("P");         
content = lear_tears.join('****');
ele.innerHTML = content;           // Insert text
document.getElementById("demo3__after").appendChild(ele); 
  //----------------------4--------------------------
// Checks for the word "never"
let sansNever =(w)=>{
	if (w ==='never'){
		return false;
	} else if (w!=='never'){
		return true;
	} else {
		console.log('ERROR');
	}
}


ele = document.createElement("P");         // Create a <p> element
lear_tears = bardWords;
cont = `${lear_tears}`
ele.innerHTML = cont;            // Insert text
document.getElementById("demo4__before").appendChild(ele); 
ele = document.createElement("P");         // Create a <p> element
lear_tears = bardWords.filter(sansNever);
cont = `${lear_tears}`
ele.innerHTML = cont;            // Insert text
document.getElementById("demo4__after").appendChild(ele); 
  //-------------------5-----------------------------

// Three functions that feed to MAP functions below
ele = document.createElement("P");         // Create a <p> element
let herAge =(o)=>{
	return o.Age;	
}
let herName =(o)=>{
	return o.Name;
}
// Takes age as arg
let isKid =(o)=>{
	if (o.Age < 30) return o.Name; 
}

let starterAges = [];
starterAges = rotators.map(herAge);
cont = `Ages: ` + starterAges.join(', ');
ele.innerHTML =  cont;            // Insert ages
let starterNames = [];
starterNames = rotators.map(herName);
cont = cont + ' and Names: ' + starterNames.join(', ');
ele.innerHTML = cont;            // Insert names
document.getElementById("demo5__before").appendChild(ele); 
starterNames = rotators.map(isKid);
cont = starterNames;
ele.innerHTML = cont;           // Insert text
document.getElementById("demo5__after").appendChild(ele); 
  //-----------------------6-$------------------------
// WOW -- FOREACH  doesn't return anything! By definition.
let takeSum =(o)=>{
	sumK += o.SO9;
}

starterNames = rotators.map(herName);
cont = starterNames.join(', ');
console.log(`The starternames in 97 worked [${starterNames}]`)
ele.innerHTML = cont;            // Insert text
document.getElementById("demo6__before").appendChild(ele); 
let aveK = 0, sumK = 0;
rotators.forEach(takeSum);
aveK = sumK / rotators.length;
aveK = aveK.toFixed(2);
cont = `The average strikeouts for a Tigers starter PER 9 INNINGS is ${aveK}`;
ele.innerHTML = cont;            // Insert text
document.getElementById("demo6__after").appendChild(ele); 
  //----------------------7--$------------------------


  ele = document.createElement("P");         // Create a <p> element
cont = `${bardWords}`
ele.innerHTML = cont;            // Insert text
document.getElementById("demo7__before").appendChild(ele); 
ele = document.createElement("P");         // Create a <p> element
cont = bardWords.slice(5, 9);
ele.innerHTML = cont;           // Insert text
document.getElementById("demo7__after").appendChild(ele); 
  //----------------------8---$-----------------------


  ele = document.createElement("P");         // Create a <p> element
cont = `${bardWords}`
ele.innerHTML = cont;            // Insert text
document.getElementById("demo8__before").appendChild(ele); 
ele = document.createElement("P");         // Create a <p> element
cont = bardWords.slice(5, 9);
ele.innerHTML = cont;           // Insert text
document.getElementById("demo8__after").appendChild(ele); 
  //----------------------3--------------------------

console.log(`Hit last line of "top.js".`);

// Add suggested array  data1, data2
// Wire the data into the frontend.
// store data as JSON
// use the array of objects

// ARRAY
// forEach 1-arg 3-args, filter, every, some,  ISAMEMBEROF
// splice, toSTRING, reduce, reduceright, indexof, sort, reverse
// STRING
// repeat, slice, directlygetchar[], substring

// bring on the regexing	
