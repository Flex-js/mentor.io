const path = require('path');

module.exports = {
	plugins: {
	  'postcss-import': {
		  path: path.resolve(__dirname, '../../src')
	  },
	  'postcss-preset-env': {
		browsers: 'last 2 versions',
	  },
	  'cssnano': {},
	},
};