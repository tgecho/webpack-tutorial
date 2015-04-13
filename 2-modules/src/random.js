function choice(items) {
	var index = Math.floor(Math.random() * items.length);
	return items[index];
}

module.exports = {choice: choice};
