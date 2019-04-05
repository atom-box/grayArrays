/*
without Express.
use most popular string methods
April 4, 2019
*/


const http = require('http');
const PORT = 4444;

let logic =(req, res)=>{
console.log('Geo. Mallory!');

// makes multiline string to output
// a Array Of strings
function billboarditize(a){ 
	let billboard = "";
	while (a.length > 0){
		billboard += a.shift().toString() + '\n';
	}
	return billboard;
}



// line accumulator, for output
let lines = [];

// example strings
const tiger = '  Nick-Castellanos  ';
const numb = `There is no pain
You are receding:
A distant ship's smoke
On the horizon.
You are only coming through    in waves    


`;


let 
pre = '', 
post = '';
// CAPITALIZE THE STRING
pre = `When you give [${tiger}] to UPPERCASE, out comes`;
post = tiger.toUpperCase();
lines.push([pre, post]);
// push on a 2 member array with (1) method NAME+var-before-the-method and (2) the results

// SUBSTR
pre = `When you give [${tiger}] to SUBSTR(3,4) out comes`;
post = '[' + tiger.substr(3,4) + ']';
lines.push([pre, post]);

// SUBSTRING
pre = `When you give [${tiger}] to SUBSTRING(3,4) out comes`;
post = '[' + tiger.substring(3,4) + ']';
lines.push([pre, post]);

// PRINT FOO IN THE MIDDLE
pre = `When you give [${tiger}] to TRIM, out comes`;
post = '[' + tiger.trim() + ']';
lines.push([pre, post]);

const message = billboarditize(lines);



	res.end(message);
}

const server = http.createServer(logic);

server.listen(PORT);
console.log(`listening on port ${PORT}`);
