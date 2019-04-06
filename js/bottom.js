// Only node.js has this modules stuff?  ES6 whither??
export  {dummy, jr};


console.log("hellow from BOTTOM");
const dummy =()=>{
	return "I come from bottom JS.";
}

let jr = [
{
	"name": "CamEst thou from an OBJECT in TOP?" ,
	"printableCode": "p r i n n a b l e" ,
	"data1": "nihilWordsQuote",
	"verb": "function(a){return this.a}"
},
{
	"name": "Gramps & Fran",
	"printableCode": "null" ,
	"verb": "function(a){return this.a}"
}
];


/*
CORS notes from Mozilla:
"CORS requests may only use the HTTPS URL scheme, but the URL specified by the request is of a different type. This often occurs if the URL specifies a local file, using a file:/// URL."

"To fix this problem, simply make sure you use HTTPS URLs when issuing requests involving CORS."
*/