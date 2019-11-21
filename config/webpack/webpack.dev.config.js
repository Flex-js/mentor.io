const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDEV = process.env.NODE_ENV !== 'production';

const getEntityFromRoot = (entity) => path.resolve(__dirname, `../../${entity}`);
const chunkName = '[name][hash].min';
console.log(getEntityFromRoot('src'))

module.exports = {
	mode: 'development',
	entry: './src/index.tsx',
	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
		modules: ["node_modules", getEntityFromRoot('src')],
	},
	devtool: 'inline-source-map',
	output: {
		path: getEntityFromRoot('dist'),
		filename: `${chunkName}.js`,
		chunkFilename: `${chunkName}.js`,
	},
	module: {
		rules: [{
			test: /\.ts(x?)$/,
			exclude: /node_modules/,
			use: [{
				loader: "ts-loader"
			}],
		}, {
			test: /\.css$/i,
			use: [isDEV
					? 'style-loader'
					: {
						loader: MiniCssExtractPlugin.loader,
						options: {
							publicPath: '../../dist',
							hmr: process.env.NODE_ENV === 'development',
						}
					},
				{
					loader: 'css-loader',
					options: {
						modules: true,
					},
				},
			],
		}, {
			test: /\.(png|ttf|svg|jpe?g|gif|woff|eot|woff2)$/i,
			use: [
				{
				  loader: 'file-loader',
				  options: {
					outputPath: 'assets/fonts/',
				  },
				},
			],
		}]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: getEntityFromRoot('src/index.html'),
			minify: !isDEV,
		}),
		new webpack.HotModuleReplacementPlugin({}),
	],
}