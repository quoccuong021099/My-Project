const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    entry: ['./src/style/main.scss'],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use:[
                    'file-loader'
                ]
            },            
            {
                test: /\.(sa|sc)ss$/,
                use: [
                   {
                      loader: MiniCssExtractPlugin.loader,
                   },
                   {
                      loader: 'css-loader',
                      options: {
                         importLoaders: 2,
                      },
                   },
                   {
                      loader: 'sass-loader',
                   },
                ]    ,
             },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id]".css
        })
    ]
}
