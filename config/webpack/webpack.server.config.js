var path = require('path');
const devConf = require('./webpack.dev.config.js');

module.exports = {
	...devConf,
	devServer: {
		contentBase: path.join(__dirname, '../../dist'),
		port: 9000,
		hot: true,
		historyApiFallback: true,
	}
};