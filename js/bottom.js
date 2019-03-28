// Only node.js has this modules stuff?  ES6 whither??
export default dummy;


console.log("hellow from BOTTOM");
const dummy =()=>{
	return "I come from bottom JS.";
}



/*
CORS notes from Mozilla:
"CORS requests may only use the HTTPS URL scheme, but the URL specified by the request is of a different type. This often occurs if the URL specifies a local file, using a file:/// URL."

"To fix this problem, simply make sure you use HTTPS URLs when issuing requests involving CORS."
*/