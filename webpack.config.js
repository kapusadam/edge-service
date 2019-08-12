const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const ROOT = path.resolve(__dirname, 'src');
console.log(ROOT);
const DESTINATION = path.resolve(__dirname, 'dist');
const MODE = 'production'; // 'development'

let w = {

    //entry: './src/app.ts',
    entry: __dirname + '/dist/app' + '/src/m2ga/index.js',
    mode: MODE,
    devtool: 'inline-source-map',
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
            filename: "index.html",
            inject: 'head'
        })
    ]
};

if (process.env.NODE_ENV === 'development') {
    w.debug = true;
    w.devtool = 'sourcemap';
    w.output.pathinfo = true;
}

if (process.env.NODE_ENV === 'production') {
    w.plugins.push(new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
    }));
    w.plugins.push(new webpack.optimize.UglifyJsPlugin());
    w.plugins.push(new webpack.optimize.OccurenceOrderPlugin());
}


module.exports = w;