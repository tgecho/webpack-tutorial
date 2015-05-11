import $ from './dquery';
import {choice} from './random';

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
