var path = require('path');
var webpack = require('webpack');  // 使用webpack自带的依赖方法

var htmlWebpackPlugin = require('html-webpack-plugin'); // 生成HTML

// 抽离css样式，防止将样式打包在js中引起页面样式加载错乱
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

// 代码丑化
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');

var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

// 错误提示
var FriendlyErrorPlugin = require('friendly-errors-webpack-plugin')

module.exports = {
	entry:{
		"app":path.resolve(__dirname,'../client/index.js'),
	},
	output: {
		path:path.resolve(__dirname,'./dist'),
		publicPath:"/",
		filename:"[name].[hash].js",
	},
	module:{
		// style-loader > css-loader > less-loader/sass-loader/stylus-loader
		loaders: [
			{
				test:/\.jsx?$/,
				loader:'babel-loader',
			},
			{
				test:/\.css/,
				loaders:"style-loader!css-loader"
			},
			{
				test:/\.(png|jpe?g|gif)(\?.*)?$/,
				loader:"url-loader",
				options: {
		          limit: 10000,
		          name:"[name].[hash:8].[ext]",
		          outputPath:"static/images/",
		          publicPath:"/"
		        }
			},
			{
		        test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
		        loader: 'url-loader',
		        options: {
		        	limit:10000,
		          name:"whale.icon.[hash:8].[ext]",
		          outputPath:'fonts/',
		          publicPath:'/'
		        }
		    },
		    {
		    	test:/\.less$/,
		    	loader:"style-loader!css-loader!less-loader"
		    }
		]
	},

	// 代码自动补全
	resolve: {
		extensions: ['.js','.jsx'],
	},
	plugins: [
		new webpack.NoEmitOnErrorsPlugin(),

		// 生成html
		new htmlWebpackPlugin({
			template:path.resolve(__dirname,'../client/index.html'),
			inject:true,
		}),

		// 热加载插件
		new webpack.HotModuleReplacementPlugin(),

		// 错误提示
		new FriendlyErrorPlugin(),

		// css单独打包
		new ExtractTextWebpackPlugin ({
			filename:'[name].css'
		})
    ],
    devtool: '#cheap-module-eval-source-map',


	// 开发服务器配置
	devServer:{
		compress:true,
		hot:true,	// 启动webpack热模块替换特想
		inline:true,  // 支持dev-server自动刷新
		open:true,
		port: 3000,	// 当前的端口号
		proxy: {
			"/api":{
                target:"http://localhost:7000/",
                changeOrigin: true,
                pathRewrite:{
                    "/api": ""
                }
            }
		},
		stats:{
			colors:true,
			children:false,
			modules:false,
			performance:true,
		    timings:true,
		    usedExports:false,
		    version:false,
		    warnings:true,
		    hash:false,
		    assets:false,
		}
	},

	watchOptions: {
		ignored:/node_modules/
	},

}
