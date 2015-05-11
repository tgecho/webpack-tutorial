## Installing Webpack

You can install webpack system wide, but you'll also need it in your local project so it can work properly with loaders and other plugins.

```sh
$ npm install webpack --global
$ npm install webpack --save
```

## Minimum Viable Bundle

You can start using webpack without any configuration by simply passing your input and output paths to the CLI. The entry module can require sibling files and other npm modules.

```sh
$ webpack ./src/index.js build/index.js
```

Reference: [Webpack CLI](http://webpack.github.io/docs/cli.html)

## Basic Configuration

To avoid the need to include the path every time you run webpack (and allow more advanced configuration), you'll want to create a `webpack.config.js` file. With the following in place, you can simply run `$ webpack` directly.

```js
module.exports = {
	entry: './src/index.js',
	output: {
		path: './build',
		filename: 'index.js',
	},
};
```

Reference: [Webpack Configuration](http://webpack.github.io/docs/configuration.html)

## Watching and the Dev Server

Running webpack for each change creates a bit of friction, so webpack also includes a watch flag.

```sh
$ webpack --watch
```

You'll need to tell the dev server where to serve up the built files with  `publicPath`.

```js
module.exports = {
	// ...
	output: {
		path: './build',
		publicPath: '/build/',
		filename: 'index.js',
	},
};
```

Reference: [Webpack Dev Server](http://webpack.github.io/docs/webpack-dev-server.html)

## Source Maps

You can add source maps to the output by adding a devtool option. This will allow you to view stack traces and set breakpoints in the context of the original source files.

```js
module.exports = {
	// ...
	devtool: 'source-map',
};
```

## ES6 Compilation

CommonJS (`require('...')`) style imports are perfectly functional, and a huge improvement over no modules at all. However, there is a coming standard syntax for importing javascript modules, as well as a bunch of other stuff coming down the pipe in ES6 and beyond.

There are a few tools for transpiling ES6 to ES5 (the baseline JS supported by most modern browsers). My current favorite is called Babel (formerly 6to5). Plugging it into webpack requires installing babel-loader and a new loaders section in your config.

```sh
$ npm install babel-loader --save
```

```js
module.exports = {
  // ...
	module: {
		loaders: [
			{test: /\.js$/, exclude: /node_modules/, loader: 'babel'},
		]
	}
};
```

You can actually mix and match CommonJS, ES6 and even AMD style modules and Babel/Webpack will pretty much make it all work together.

References: [Using Loaders](http://webpack.github.io/docs/using-loaders.html) | [Babel](https://babeljs.io/)

## Other Loaders

There are many other loaders, including for other file types such as json and css.

```sh
$ npm install json-loader css-loader style-loader --save
```

```js
{test: /\.json$/, loader: 'json'},
{test: /\.css/, loader: ['style', 'css']}
```

This is also the first example of example of chaining multiple loaders. The css loader wraps the css in a thin javascript wrapper to make it work within the webpack module system. The style loader injects the css into a `<style>` tag when a dependant javascript module is loaded.

Reference: [Webpack Stylesheets](http://webpack.github.io/docs/stylesheets.html)

## Advanced CSS loading

Loaders aren't limited to just transforming javascript. There are also loaders for various css preprocessors. My two favorites are sass and autoprefixer. Simply install the loaders and add them to the chain.

```sh
# As of this writing there's a bug in the current version of node-sass, so pin the version to 0.4.2.
$ npm install autoprefixer-loader sass-loader@0.4.2 --save
```

```js
{test: /\.s?css/, loaders: ['style', 'css', 'autoprefixer', 'sass']}
```

If you're not crazy about your css being loaded via javascript at page load time, there is a plugin that can extract all of the css required by the various modules of your application and output it as a standalone compiled file.

This has the added benefit of allowing the addition of source maps for your sass, which is extremely important when you start splitting everything up into granular modules.

```sh
$ npm install extract-text-webpack-plugin --save
```

References: [Autoprefixer](https://github.com/postcss/autoprefixer) | [Sass](http://sass-lang.com/) | [ExtractTextPlugin](https://github.com/webpack/extract-text-webpack-plugin)
