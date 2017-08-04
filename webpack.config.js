const webpack = require('webpack')
require('dotenv').config()

module.exports = {
    entry: ['babel-polyfill', './public/js/index.js'],
    output: {
        filename: './public/js/bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    'env', {
                                        modules: false
                                    }
                                ],
                                'stage-0'
                            ]
                        }
                    }
                ]
            }
        ]
    },
    devServer: {

    }
}
