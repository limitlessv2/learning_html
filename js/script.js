/*
Functions 
*/

function doTheThing(){
	alert('this is the thing!');
}

/*
Variables
*/

var elem = document.getElementById("about");

/*
Event listener
*/

elem.addEventListener("click",doTheThing, false);