const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    context: path.resolve(__dirname,'source'),
    entry: {
        'index': './pages/index/index.js',
        'colors-and-type': './pages/colors-and-type/colors-and-type.js',
        'headers-and-footers': './pages/headers-and-footers/headers-and-footers.js',
        'form-elements': './pages/form-elements/form-elements.js'
    },
    resolve: {
        alias:{
            assets: path.resolve(__dirname,'source/assets')
        }
    },
    output: {
        filename: '[name]/[name].js',
        path: path.resolve(__dirname,'build')
    },
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        compress: true,
        open: true,
        port: 9000
    },
    plugins: [
        new HTMLWebpackPlugin({
            filename: 'index/index.html',
            chunks: 'index',
            template: './pages/index/index.pug'           
        }),
        new HTMLWebpackPlugin({
            filename: 'colors-and-type/colors-and-type.html',
            chunks: 'colors-and-type',
            template: './pages/colors-and-type/colors-and-type.pug'           
        }),
        new HTMLWebpackPlugin({
            filename: 'headers-and-footers/headers-and-footers.html',
            chunks: 'headers-and-footers',
            template: './pages/headers-and-footers/headers-and-footers.pug'
        }),
        new HTMLWebpackPlugin({
            filename: 'form-elements/form-elements.html',
            chunks: 'form-elements',
            template: './pages/form-elements/form-elements.pug'
        }),
        new CleanWebpackPlugin(),
        new MiniCSSExtractPlugin({
            filename: '[name]/[name].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.pug$/,
                use: ['pug-loader']
            },
            {
                test: /\.scss$/,
                use: [MiniCSSExtractPlugin.loader,{loader: 'css-loader', options: { url: false, sourceMap: true }},'sass-loader'
                ]},
            {
                test: /\.(svg|jpg|png)$/,
                type: 'asset/resource'            
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: 'file-loader',
                options: {
                    outputPath: path.resolve(__dirname,'assets/[name][ext]')
                }                       
            }
        ]
             
    }
}