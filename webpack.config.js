let path = require('path');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let BrowserSyncPlugin = require('browser-sync-webpack-plugin');
let CleanWebpackPlugin = require('clean-webpack-plugin');
let CopyWebpackPlugin = require('copy-webpack-plugin');
let ExtractTextPlugin = require("extract-text-webpack-plugin");
let extractCss = new ExtractTextPlugin("css/style.css");
const sassLoaders = [
    'css-loader?minimize',
    'sass-loader?indentedSyntax=sass&includePaths[]='
];

let conf = {
    entry: {
        vendors: path.join(__dirname, 'src', 'vendors'),
        index: path.join(__dirname, 'src', 'index.js')
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].js'
    },

    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules|bower_components/,
                loader: "babel-loader",
                query: {
                    presets: [
                        'react',
                        'es2015',
                        'stage-0'
                    ],
                    plugins: ['react-html-attrs', 'transform-decorators-legacy']
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules|bower_components/,
                loader: 'style-loader!css-loader'

            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader',

            },
            {
                test: /\.(woff|woff2)$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff&name=./fonts/[name].[ext]"
            },
            {
                test: /\.ttf$/,
                loader: "url-loader?limit=10000&mimetype=application/octet-stream&name=./fonts/[name].[ext]"
            },
            {
                test: /\.eot$/,
                loader: "url-loader?limit=10000&mimetype=application/octet-stream&name=./fonts/[name].[ext]"
            },
            {
                test: /\.svg$/,
                loader: "url-loader?limit=10000&mimetype=application/svg+xml&name=./fonts/[name].[ext]"
            }

        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss', '.css']
    },

    devServer: {
        overlay: true,
        contentBase: "./build"
    },

    plugins: [
        // new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html'),
            filename: path.join(__dirname, 'build', 'index.html')
        }),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            server: {
                baseDir: ['build']
            }
        }),
        new CleanWebpackPlugin(['build']),
        new CopyWebpackPlugin([
            {
                from: 'src/img',
                to: 'img'
            }
        ]),
    ]
};

module.exports = (env, options) => {

    let production = options.mode === 'production';

    conf.devtool = production ? false : 'eval-sourcemap';

    return conf;

};
