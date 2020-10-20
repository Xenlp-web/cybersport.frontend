const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const pathResolve = (...args) => path.resolve(process.cwd(), ...args);

module.exports = {
  entry: "./src/index.jsx",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index-bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      },
        {
            test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
            loader: 'file-loader',
            include: [/fonts/]
        },

        {
            test: /\.css$/,
            use: ['file-loader', 'css-loader'],
            include: [/fonts/]
        }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
    alias: {
      '@app': pathResolve('src'),
      '@templates': pathResolve('src/components'),
      '@config': pathResolve('config'),
      '@test': pathResolve('config/jest'),
      '@public': pathResolve('public'),
      styles: pathResolve('src/styles'),
    }
  }
};