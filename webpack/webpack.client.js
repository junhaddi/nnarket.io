const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/public/index.js",
    output: {
        publicPath: "static/public",
        path: path.resolve(__dirname, "../dist/public"),
        filename: "bundle.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/public/index.html"
        }),
        new CopyWebpackPlugin([{ from: "src/public/assets", to: "assets" }])
    ]
};
