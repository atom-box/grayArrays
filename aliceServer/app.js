






//  TO DO:  can't believe I lost:  find the syntax, three lines, for inserting HTML elements.  write that into line 19;










document.addEventListener( 'DOMContentLoaded', function(){
	var rC = gC = bC = 244;

	//make 300 tiles;
	var divs300 = "";
	var triplets = [ 158, 247, 202, 252, 228, 197, 146, 147, 194, 146, 197, 236]; 
	for ( var i = 0; i < 4; i++ ){
		rC = triplets.shift();
		gC = triplets.shift();
		bC = triplets.shift();
		console.log(`Pixel #${i} is: ${rC}, ${gC}, ${bC}`);
		divs300 +=
    '<p class="tile" style="background-color: rgb(' + rC + ', '+ gC +',' + bC + '); ">' + rC + ', '+ gC +', '+ bC +   '  </div>';
  }
	$("body").html( divs300 );
}