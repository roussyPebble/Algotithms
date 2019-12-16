var extend = require('extend'); 
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

let mod={
    mode: "production",
    entry: "./hard/sudoku",
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    },
    module: {
        rules: [
            {
                exclude:[
                    path.resolve(__dirname, "unittest.js")
                ],
            }
        ]
    },
    // resolve:{
    //     extensions: ['', '.js'],
    //     alias: {'utils': path.resolve(__dirname, './hard/sudoku/sudoku.js') }
    // },
    // plugins: [
    //     new webpack.ProvidePlugin({
    //         'utils': 'utils'
    //       })
    // ],
    devServer: {
         contentBase: './public/sudoku'
    },
    target: "node"
};
let dist=extend(mod,{output:{
    path: path.resolve(__dirname, "dist"),
    filename: "sudoku.js"
}});
let web=extend(mod,{output:{
    path: path.resolve(__dirname, "public/sudoku"),
    filename: "sudoku.js",
    publicPath: '/',
    library: 'myLibrary',
    libraryTarget: 'var'
}});
module.exports = [
    web
];
