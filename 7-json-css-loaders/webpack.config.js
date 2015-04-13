module.exports = {
	entry: './src/index.js',
	output: {
		path: './build',
		publicPath: '/build/',
		filename: 'index.js',
	},
	devtool: 'source-map',
	module: {
		loaders: [
			{test: /\.js$/, exclude: /node_modules/, loader: 'babel'},
			{test: /\.json$/, loader: 'json'},
			{test: /\.css/, loaders: ['style', 'css']}
		]
	}
};
