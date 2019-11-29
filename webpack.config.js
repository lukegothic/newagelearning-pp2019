const path = require("path");
const webpack = require("webpack");
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    plugins: [
        new webpack.ProgressPlugin(),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({ template: "./src/index.html" })
    ],
    optimization: {
        minimizer: [
            new TerserJSPlugin({}),
            new OptimizeCSSAssetsPlugin({})
        ],
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            options: {
                presets: ["@babel/preset-env"],
                plugins: ["transform-async-functions"]
            }
        }, {
            test: /\.css$/,
            loader: [MiniCssExtractPlugin.loader, "css-loader"]
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            loader: 'file-loader'
        }]
    },
    stats: {
        colors: true
    },
    devtool: "inline-source-map",
    devServer: {
        contentBase: './dist',
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js"
    },
    entry: {
        app: "./src/index.js"
    }
};