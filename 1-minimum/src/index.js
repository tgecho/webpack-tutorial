var names = ['World', 'Sarah', 'Justin', 'Ryan', 'Dan', 'Seth', 'Jason',
			 'Joseph', 'Shawn', 'Jeff', 'Patricia', 'Michael', 'Mike',
			 'Alexander', 'Kevin', 'Steve', 'Zoe', 'David', 'Lori',
			 'Chris', 'Daryl', 'Subrata', 'Doug', 'Scott', 'Alex'];

function choice(items) {
	var index = Math.floor(Math.random() * items.length);
	return items[index];
}

function $(selector) {
	return document.querySelector(selector);
}

$('#changer').onclick = function changeWho() {
	$('#who').innerHTML = choice(names);
};
