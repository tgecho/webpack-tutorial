var $ = require('./dquery');
var choice = require('./random').choice;

var names = ['World', 'Sarah', 'Justin', 'Ryan', 'Dan', 'Seth', 'Jason',
			 'Joseph', 'Shawn', 'Jeff', 'Patricia', 'Michael', 'Mike',
			 'Alexander', 'Kevin', 'Steve', 'Zoe', 'David', 'Lori',
			 'Chris', 'Daryl', 'Subrata', 'Doug', 'Scott', 'Alex'];

function changeWho() {
	$('#who').innerHTML = choice(names);
}

changeWho();

$('#changer').onclick = changeWho;
