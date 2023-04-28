// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');

const isProduction = process.env.NODE_ENV == 'production';


const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : 'style-loader';



const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        open: true,
        host: 'localhost',
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: 'index.html',
        }),
        new HtmlWebpackPlugin({
            filename: "portfolio.html",
            template: "portfolio.html"
        }),
        new HtmlWebpackPartialsPlugin([{
            path: 'src/partials/index/Hero.html'
        },
        {
            path: 'src/partials/index/section-1.html',
        },
        {
            path: 'src/partials/index/section-2.html',
        },
        {
            path: 'src/partials/index/section-3.html',
        }
    ]),
        new HtmlWebpackPartialsPlugin([{
            path: 'src/partials/index/Hero.html',
            template_filename: "portfolio.html"
        },
        {
            path: 'src/partials/index/section-1.html',
            template_filename: "portfolio.html"
        },
        {
            path: 'src/partials/index/section-2.html',
            template_filename: "portfolio.html"
        },
        {
            path: 'src/partials/index/section-3.html',
            template_filename: "portfolio.html"
        }]),



        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/i,
                use: [stylesHandler, 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
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
