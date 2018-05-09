var path = require("path");
var webpack = require("webpack");

// 生成html
var HtmlWebpackPlugin = require('html-webpack-plugin');

// css单独打包
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

// 代码丑化
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	entry:{
		"app": path.resolve(__dirname, '../client/index.js'),
		"vendor":["react","react-dom","react-router","antd"]
	},
	output:{
		path:path.resolve(__dirname,'../dist'),
		filename:"js/[name].[hash:8].js",
	},
	module:{
		loaders: [
			{
				test:/\.jsx?$/,
				loader:"babel-loader",
				exclude:/node_modules/,
				query:{
					presets:["es-2015","react"]
				}
			},
			{
				test:/\.less/,
				use:ExtractTextWebpackPlugin.extract({
					fallback:"style-loader",
					use:["css-loader","less-loader"]
				})
			},
			{
				test:/\.css/,
				use:ExtractTextWebpackPlugin.extract({
					fallback:"style-loader",
					use:["css-loader"]
				})
			},
			{
				test:/\.(png|jpe?g|gif)(\?.*)?$/,
				loader:"url-loader",
				options:{
					limit:10000,
					outputPath:"/static/images",
					publicPath:'/'
				}
			},
		    {
		        test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
		        loader: 'url-loader',
		        options: {
					limit:10000,
          			name:"card-icon.[hash:8].[ext]",
					outputPath:'fonts/',
					publicPath:'/'
	        	}
	        }
		]
	},
	plugins:[
		// 单独打包css
		// new EctractTextWebpackPlugin('css/cloudCard.[chunkHash].css'),

		// 生成html
		new HtmlWebpackPlugin({
			template:path.resolve(__dirname,'../src/index.html'),
			inject:true,
			minify:{
				removeComments:true,
				collapseWhitespace: true
			}
		}),

		// 压缩丑化js
		new UglifyJSPlugin(),

		// 压缩css
		// new OptimizeCssAssetsPlugin(),

		// 将entry中的vender单独分离出来
		// new webpack.optimize.CommonChunkPlugin({
		// 	names:['vender']
		// })

	],
	stats: {
		colors:true,
		children:false,
	    modules:false,
	    performance:true,
	    timings:true,
	    version:false,
	    warnings:true,
	    hash:false,	
	},

	// 代码自动补全
	resolve:{
		alias:{
			"@style": path.resolve(__dirname,'../src/style'),
		}
	}
}