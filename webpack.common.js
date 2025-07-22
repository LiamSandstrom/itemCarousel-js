const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "item-carousel.js",
    library: {
      name: "itemCarousel",
      type: "umd",
      export: "default",
    },
    globalObject: "this",
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
