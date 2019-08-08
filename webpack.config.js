const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const ROOT = path.resolve(__dirname, 'src');
const DESTINATION = path.resolve(__dirname, 'dist');
const MODE = 'production'; // 'development'

module.exports = {
    entry: './src/app.ts',
    mode: MODE,
    output: {
        path: DESTINATION,
        filename: '[name].bundle.js'
    },
    resolve: {
        modules: [
            ROOT,
            'node_modules'
        ],
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.ts$/, loaders: "ts-loader", exclude: [ /node_modules/ ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./app/template.html",
            filename: "index.html"
        })
    ]
};