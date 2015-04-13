var ExtractText = require('extract-text-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: __dirname + '/build',
		publicPath: '/build/',
		filename: 'index.js',
	},
	devtool: 'source-map',
	module: {
		loaders: [
			{test: /\.js$/, exclude: /node_modules/, loader: 'babel'},
			{test: /\.json$/, loader: 'json'},
			{
				test: /\.s?css/,
				loader: ExtractText.extract([
					'css?sourceMap',
					'autoprefixer',
					'sass?sourceMap&sourceMapContents=true',
				])
			}
		]
	},
    plugins: [
        new ExtractText('index.css'),
    ],
};
