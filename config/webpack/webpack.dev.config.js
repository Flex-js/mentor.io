const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDEV = process.env.NODE_ENV !== 'production';

const getEntityFromRoot = (entity) => path.resolve(__dirname, `../../${entity}`);
const chunkName = '[name][hash].min';

module.exports = {
	mode: 'development',
	entry: './src/index.tsx',
	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
		modules: [getEntityFromRoot('src'), "node_modules"],
	},
	devtool: 'inline-source-map',
	output: {
		path: getEntityFromRoot('dist'),
		filename: `${chunkName}.js`,
		chunkFilename: `${chunkName}.js`,
		publicPath: '/',
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
							publicPath: getEntityFromRoot('dist'),
							hmr: process.env.NODE_ENV === 'development',
						}
					},
				{
					loader: 'css-loader',
					options: {
						modules: true,
					},
				},
				{
					loader: 'postcss-loader',
					options: {
						config: {
							path: getEntityFromRoot('config/postcss/')
						},
					}
				}
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