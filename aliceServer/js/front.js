console.log(new Date());


function putSomething(){
  document.getElementById('divA').textContent = `Here is the fourth verb: ${verbs.has}`	;
}

let employers = [77, 82, 47, 27, 5, 41, 30, 95];
employers.show =()=> {
	return employers;
} 

let verbs = [
[  "iz",  2699],
[  "are",   1843],
[ "has",   384],
[  "geT",   233],
 [ "see",  204],
[  "need",  193],
[  "know",  181],
[  "would",   176],
[  "find", 166],
 [ "take",  164],
[  "want",  163],
[  "does",  104],
 [ "learn",   102]
];

verbs.randomVerb =()=>{
	let randy = Math.floor(13 * Math.random());
	return `The ${randy}th verb is: ${verbs[randy][0]}`;
}

function putSomething2(){
  document.getElementById('brookfield').textContent = verbs.randomVerb();
}

document.addEventListener( 'DOMContentLoaded', function(){
	console.log(new Date());
});

let c = '<img src="./assets/head-profile-31x47.png"></img>';


var putFace =()=>{
	let a = document.getElementById('appleton');
	a.insertAdjacentHTML("afterend", c);	
}

/*
document.addEventListener( 'DOMContentLoaded', function(){
	var rC = gC = bC = 244;
	//make 300 tiles;
	var divs300 = "";
	var triplets = [ 158, 247, 202, 252, 228, 197, 146, 147, 194, 146, 197, 236]; 
	let tilesPlace = null;
	for ( var i = 0; i < 4; i++ ){
		rC = triplets.shift();
		gC = triplets.shift();
		bC = triplets.shift();
		console.log(`Pixel #${i} is: ${rC}, ${gC}, ${bC}`);
		tilesPlace = document.getElementById('divB');  
		tilesPlace.insertAdjacentHTML('afterend',  
    '<p class="tile" style="background-color: rgb(' + rC + ', '+ gC +',' + bC + '); ">' + rC + ', '+ gC +', '+ bC +   '  </div>');
  }
	document.appendElement(divs300);
	// Expect: wipe out existing, replace w/ divs?
});
eee*/