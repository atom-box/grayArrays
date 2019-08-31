// import './bottom.js';

// NEXT:  LOGIC IN SECTION 5 NEEDS FULLNAME ACCUMULATOR
// NEXT:  LOGIC IN SECTION 5 NEEDS INITIALS CREATOR & ACCUMULATOR



console.log(`Yarp`);

// // to avoid CORS error, get path right
// // THE file that is the head can be anywhere, but the next called path must have same insert point on the tree.
// // See also SWISSREGEX project
// console.log(`Yurp`);

//   //---------------------1---------------------------
// let ele = document.createElement("P");         
// let content = `${cliffWords} -AND- ${bardWords}`;
// ele.innerHTML = content;            // Insert text
// document.getElementById("demo1__before").appendChild(ele); 
// ele = document.createElement("P");         
// content = cliffWords.concat(bardWords);
// ele.innerHTML = content;           // Insert text
// document.getElementById("demo1__after").appendChild(ele); 
//   //---------------------2---------------------------
// ele = document.createElement("P");         
// content = `${bardWords}`
// ele.innerHTML = content;            // Insert text
// document.getElementById("demo2__before").appendChild(ele); 
// ele = document.createElement("P");         
// content = bardWords.slice(5, 9);
// ele.innerHTML = content;           // Insert text
// document.getElementById("demo2__after").appendChild(ele); 
//   //----------------------3--------------------------
// ele = document.createElement("P");         
// let lear_tears = bardWords.slice(5, 9);
// content = `${lear_tears}`
// ele.innerHTML = content;            // Insert text
// document.getElementById("demo3__before").appendChild(ele); 
// ele = document.createElement("P");         
// content = lear_tears.join('****');
// ele.innerHTML = content;           // Insert text
// document.getElementById("demo3__after").appendChild(ele); 
//   //----------------------4--------------------------
// // Checks for the word "never"
// let sansNever =(w)=>{
// 	if (w ==='never'){
// 		return false;
// 	} else if (w!=='never'){
// 		return true;
// 	} else {
// 		console.log('ERROR');
// 	}
// }

// console.log(`Length of bard words is ${bardWords.length}`)
// ele = document.createElement("P");         // Create a <p> element
// lear_tears = bardWords;
// content = `${lear_tears}`
// ele.innerHTML = content;            // Insert text
// document.getElementById("demo4__before").appendChild(ele); 
// ele = document.createElement("P");         // Create a <p> element
// lear_tears = bardWords.filter(sansNever);
// content = `${lear_tears}`
// ele.innerHTML = content;            // Insert text
// document.getElementById("demo4__after").appendChild(ele); 
//   //-------------------5-----------------------------

// // Three functions that feed to MAP functions below
// ele = document.createElement("P");         // Create a <p> element
// let monogramatize =(o)=>{
// 	return o.Age;	
// }

// // Show full name of each rotator
// let starterNames = [];
// starterNames = rotators.map(monogramatize);

// content = `Ages: ` + starterNames.join(', ');
// ele.innerHTML =  content;            // Insert ages
// document.getElementById("demo5__before").appendChild(ele); 

// // Show Initials of each rotator
// let starterMonograms = rotators.map(()=>{return null}); // TODO this was 'isKid' function which seems missing
// content = starterMonograms; // todo
// content = `Rex Tillerson v. Earth`; // todo
// ele.innerHTML = content;           // Insert text
// document.getElementById("demo5__after").appendChild(ele); 
//   //-----------------------6-$------------------------
// // WOW -- FOREACH  doesn't return anything! By definition.
// let takeSum =(o)=>{
// 	sumK += o.SO9;
// }

// starterMonograms = rotators.map((n)=> {return "--Charlie X--"});
// content = starterNames.join(', ');
// console.log(`The starternames in 97 worked [${starterNames}]`)
// ele.innerHTML = content;            // Insert text
// document.getElementById("demo6__before").appendChild(ele); 
// let aveK = 0, sumK = 0;
// rotators.forEach(takeSum);
// aveK = sumK / rotators.length;
// aveK = aveK.toFixed(2);
// content = `The average strikeouts for a Tigers starter PER 9 INNINGS is ${aveK}`;
// ele.innerHTML = content;            // Insert text
// document.getElementById("demo6__after").appendChild(ele); 
//   //----------------------7--$------------------------

//   ele = document.createElement("P");         // Create a <p> element
// let i = null, allPitchersArrayOfNames = [], youngPitchersArrayOfObjects = [], youngPitchersArrayOfNames = [];
// for ( i in rotators){
// 	allPitchersArrayOfNames.unshift(rotators[i].Name );
// }

// youngPitchersArrayOfObjects = rotators.filter((o)=>{return o.Age < 30 });
// youngPitchersArrayOfNames = youngPitchersArrayOfObjects.map((o)=>{return o.Name}  );

// content = allPitchersArrayOfNames;
// ele.innerHTML = content;            // Insert text
// document.getElementById("demo7__before").appendChild(ele); 
// ele = document.createElement("P");         // Create a <p> element
// content = youngPitchersArrayOfNames;
// ele.innerHTML = content;           // Insert text
// document.getElementById("demo7__after").appendChild(ele); 

//   //----------------------8---$-----------------------


//   ele = document.createElement("P");         // Create a <p> element
// content = `${bardWords}`
// ele.innerHTML = content;            // Insert text
// document.getElementById("demo8__before").appendChild(ele); 
// ele = document.createElement("P");         // Create a <p> element
// content = bardWords.slice(5, 9);
// ele.innerHTML = content;           // Insert text
// document.getElementById("demo8__after").appendChild(ele); 
//   //----------------------3--------------------------

// console.log(`Hit last line of "top.js".`);

// // Add suggested array  data1, data2
// // Wire the data into the frontend.
// // store data as JSON
// // use the array of objects

// // ARRAY
// // forEach 1-arg 3-args, filter, every, some,  ISAMEMBEROF
// // splice, toSTRING, reduce, reduceright, indexof, sort, reverse
// // STRING
// // repeat, slice, directlygetchar[], substring

// // bring on the regexing	
