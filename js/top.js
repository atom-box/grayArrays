import {dummy, jr, rotators} from './bottom.js';
// to avoid CORS error, get path right
// THE file that is the head can be anywhere, but the next called path must have same insert point on the tree.
// See also SWISSREGEX project


let cliffWords = ["Lear", "addresses", "these", "words", "to", "the", "body", "of", "Cordelia", "in", "the", "play’s", "final", "scene"];
let bardWords = ["O", "thou'lt", "come", "no", "more", "never", "never", "never", "never", "never"];

  //------------------------------------------------
let ele = document.createElement("P");         // Create a <p> element
let cont = `${cliffWords} -AND- ${bardWords}`;
ele.innerHTML = cont;            // Insert text
document.getElementById("demo1__before").appendChild(ele); 
ele = document.createElement("P");         // Create a <p> element
cont = cliffWords.concat(bardWords);
ele.innerHTML = cont;           // Insert text
document.getElementById("demo1__after").appendChild(ele); 
  //------------------------------------------------
ele = document.createElement("P");         // Create a <p> element
cont = `${bardWords}`
ele.innerHTML = cont;            // Insert text
document.getElementById("demo2__before").appendChild(ele); 
ele = document.createElement("P");         // Create a <p> element
cont = bardWords.slice(5, 9);
ele.innerHTML = cont;           // Insert text
document.getElementById("demo2__after").appendChild(ele); 
  //------------------------------------------------
ele = document.createElement("P");         // Create a <p> element
let lear_tears = bardWords.slice(5, 9);
cont = `${lear_tears}`
ele.innerHTML = cont;            // Insert text
document.getElementById("demo3__before").appendChild(ele); 
ele = document.createElement("P");         // Create a <p> element
cont = lear_tears.join('****');
ele.innerHTML = cont;           // Insert text
document.getElementById("demo3__after").appendChild(ele); 
  //------------------------------------------------
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
  //------------------------------------------------


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
starterNames = rotators.map(	herName);
cont = cont + ' and Names: ' + starterNames.join(', ');
ele.innerHTML = cont;            // Insert names
document.getElementById("demo5__before").appendChild(ele); 
ele = document.createElement("P");         // Create a <p> element
starterNames = rotators.map(isKid);
cont = starterNames;
ele.innerHTML = cont;           // Insert text
document.getElementById("demo5__after").appendChild(ele); 
  //------------------------------------------------


console.log(`Hit last line of "top.js".`);

// Add suggested array  data1, data2
// Wire the data into the frontend.
// store data as JSON
// use the array of objects
