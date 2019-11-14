const devConf = require('./webpack.dev.config.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const chunkName = '[name][hash].min';

module.exports = {
	...devConf,
	mode: 'production',
	plugins: [
		...devConf.plugins,
		new MiniCssExtractPlugin({
			filename: `${chunkName}.css`,
			chunkFilename: `${chunkName}.css`,
			ignoreOrder: false,
		}),
	]
};