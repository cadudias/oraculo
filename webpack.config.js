var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractPlugin = require('extract-text-webpack-plugin');

var plugins = [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractPlugin('styles/app.css'),
    //remove all modules in the js/vendor chunk from the js/app chunk. The app.js will now contain just the app code, without any of its dependencies. These are in vendor.bundle.js.
    /*
    new webpack.optimize.CommonsChunkPlugin({
        name: "js/vendor", 
        filename: "js/vendor.[hash].js"
    }),
    
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    */
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
    })
];

module.exports = {
    devServer: {
        inline: true,
        port: 8888,
        historyApiFallback: true
    },
    entry: {
        'js/app': './app/app.js',
        'js/vendor': [
            'bootstrap-loader',
            'bootstrap-sass',
            'jquery',
            'angular'
        ]
    },
    output: {
	    path: __dirname + '/',
        publicPath: 'http://localhost:8888/', //needed for font paths on main.css
        //filename: '[name].[chunkhash].js'
        filename: '[name].js'
    },
    module: {
        loaders: [
            { 
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.scss$/i,
                exclude: /node_modules/,
                use: ExtractPlugin.extract({
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.css$/i,
                use: ExtractPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                }),
            },
            {
                test: /\.(ico|png|gif|jpe?g)$/i,
                // if the file have ~50kb or less its added to DOM as a data atributte, if not it's compressed as an image
                loader: 'url-loader?limit=30000'  
            },
            {
                test: /\.(otf|eot|svg|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
                loader: 'url-loader'
            }
            /*
            {
                test: /\.html$/,
                loader: 'html-loader'        
            }        
            */    
        ]
    },
    resolve: {
        extensions: ["css", ".js", "scss"]
    },
    node: {
        console: true,
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    },
    plugins: plugins
}