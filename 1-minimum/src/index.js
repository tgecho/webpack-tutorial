var names = ["Sarah", "Nate", "Shawn", "Mike", "Eric", "Ryan",
			 "Jason", "Seth", "Joseph", "Crissy", "Matt", "Ken",
			 "Jeff", "Lori", "Brenna", "Kevin", "Daryl", "Alexander",
			 "Michael", "Glenn", "Venita", "Maddison", "Kristy",
			 "Mike", "Zoe", "David", "Christopher"];

function choice(items) {
	var index = Math.floor(Math.random() * items.length);
	return items[index];
}

function $(selector) {
	return document.querySelector(selector);
}

function changeWho() {
	$('#who').innerHTML = choice(names);
}

changeWho();

$('#changer').onclick = changeWho;
