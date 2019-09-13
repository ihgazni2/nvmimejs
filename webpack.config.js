const path = require("path");

module.exports = {
  entry: "./nvmime.js",
  output: {
    filename: "nvmime.js",
    path: path.resolve(__dirname, "dist"),
    library: "NVHEADJS",
    libraryTarget: "umd",
    globalObject: "this"
  },
  mode: "production",
  devtool: "source-map"
};

