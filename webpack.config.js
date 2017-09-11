const path = require('path');
const srcPath = path.resolve(__dirname, 'src');
const distPath = path.resolve(__dirname, 'dist');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
	context: srcPath,
	target: 'web',

entry: ['./index.js', './scss/styles.scss'],
	output: {
		path: distPath,
		filename: 'client.js',
		publicPath: '/'
	},

	module: {
		rules: [
			{ 
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
            { 
            	test: /\.jsx$/,
            	loader: 'babel-loader',
            	exclude: /node_modules/
            },
            {
		        test: /\.scss$/,
		        use: ExtractTextPlugin.extract({
		        	//resolve-url-loader may be chained before sass-loader if necessary
			        use: [{
	                    loader: "css-loader"
	                }, {
	                    loader: "sass-loader"
	                }],
	                fallback: 'style-loader',
			    })
		    }
		],
	},

	devServer: {
		contentBase: path.join(__dirname, "dist"),
		port: 8080,
    	host: 'localhost',
	},

	plugins: [new ExtractTextPlugin("/css/styles.css")]

};

//search up what context, target, publicPath are