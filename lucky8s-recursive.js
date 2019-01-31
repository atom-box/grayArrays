let recur =n=> {

put a broke-off-piece in temp AS 1 OR 0 based on whether it is an 8
	(use shortcut syntax)
put a new truncated number in newNum
if newNum === zero return temp
else return temp + recurs(newNum)




	return null;
}






console.log(recur(80080));

/*************
Given any integer, function returns an integer, the count of how many 8s were in the integer
Example:  
808 returns 2
12345 returns 0
@mistergenest January 31, 2019
*/