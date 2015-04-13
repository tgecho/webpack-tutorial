import $ from './dquery';
import {choice} from './random';
import names from './names.json';
import './style.css';

function changeWho() {
	$('#who').innerHTML = choice(names);
}

changeWho();

$('#changer').onclick = changeWho;
