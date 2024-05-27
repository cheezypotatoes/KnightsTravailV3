// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const isProduction = process.env.NODE_ENV == 'production';


const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : 'style-loader';



const config = {
    entry: {
        main: './src/index.js',
        login: './src/login.js',
        about: './src/about.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'), // Use path.resolve to get an absolute path
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'Home.html',
            chunks: ['main'], 
        }),
        new HtmlWebpackPlugin({
            filename: 'Login.html',
            chunks: ['login'],
        }),
        new HtmlWebpackPlugin({
            filename: 'About.html',
            chunks: ['about'],
        }),
    ],
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
         {
           test: /\.(png|svg|jpg|jpeg|gif)$/i,
           type: 'asset/resource',
         },
        ],
      },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
        
        config.plugins.push(new MiniCssExtractPlugin());
        
        
    } else {
        config.mode = 'development';
    }
    return config;
};
