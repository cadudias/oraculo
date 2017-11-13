var path = require("path");
var ExtractPlugin = require('extract-text-webpack-plugin');

var plugins = [    
    new ExtractPlugin('./styles/app.css')
];

module.exports = {
    entry: "./app/app.js",
    output: {
        path: __dirname,
        filename: "./js/bundle.js"
    },
    devServer: {
        inline:true,
        port: 8888
    },
    module: {
        loaders: [            
            { 
                test: /\.js$/,
                exclude: [path.resolve(__dirname, 'node_modules')],
                loader: 'babel-loader',
                query: {
                  presets: 'es2015',
                }
            },
            {
                //extract the css from app.js to main.css file
                test: /\.scss$/,
                loader: ExtractPlugin.extract('style-loader', 'css-loader!sass-loader')
            },
            {
                test: /\.css$/,
                loader: ExtractPlugin.extract('style', 'css')
            }
        ]
    },
    plugins: plugins
};