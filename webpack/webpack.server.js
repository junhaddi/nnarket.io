const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    target: "node",
    node: {
        __dirname: false
    },
    entry: "./src/authoritative_server/index.js",
    output: {
        path: path.resolve(__dirname, "../dist/authoritative_server"),
        filename: "server.js"
    },
    externals: [nodeExternals()]
};
