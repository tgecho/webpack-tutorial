var $ = require('./dquery');
var choice = require('./random').choice;

var names = ["Sarah", "Nate", "Shawn", "Mike", "Eric", "Ryan",
			 "Jason", "Seth", "Joseph", "Crissy", "Matt", "Ken",
			 "Jeff", "Lori", "Brenna", "Kevin", "Daryl", "Alexander",
			 "Michael", "Glenn", "Venita", "Maddison", "Kristy",
			 "Mike", "Zoe", "David", "Christopher"];

function changeWho() {
	$('#who').innerHTML = choice(names);
}

changeWho();

$('#changer').onclick = changeWho;
