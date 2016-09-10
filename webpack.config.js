var path = require('path'),
    plugins = new Array,
    webpack = require('webpack');

if (process.env.NODE_ENV === 'production') {
    plugins.push(new webpack.optimize.UglifyJsPlugin({ compress: true }))
}

module.exports = {
    entry: {
        indegoJS: './src/index.js',
    },
    output: {
        path: './lib/javascripts',
        filename: '[name].js'
    },
    plugins: plugins,
    module: {
        loaders: [
            {
                test: [/\.jsx?$/, /\.js$/],
                exclude: /(node_modules|bower_components|tests)/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react', 'stage-2']
                }
            }
        ]
    }
}
