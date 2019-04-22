const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const webpack = require('webpack');
const PATH = {
    source: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'dist')
}

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
module: {
    rules: [{
        test: /\.styl$/,
        use: [{
            loader: MiniCssExtractPlugin.loader
        },
            'css-loader',
            'stylus-loader'
        ],
    },
    {
        test: /\.pug$/,
        loader:'pug-loader',
        options: {
            pretty: true
        }
    },
    {
        test: /\.(eot|ttf|svg|woff|woff2|otf)$/,
        exclude: /img/,
        use: [
            {
                loader: 'file-loader',
                options:
                {
                    name: './fonts/[name].[ext]'
                }
            }
        ]
    },
    // outputPath: './',
                        // useRelativePath: true
    {
            test: /\.(png|jpg|svg|gif)$/,
            exclude: /fonts|node_modules/,
            use: [
                {
                    loader: 'file-loader',
                    options: 
                    {
                        name: './img/[name].[ext]',
                        
                    },
                },
                {
                loader: 'image-webpack-loader',
                    options: {
                        mozjpeg: {
                            progressive: true,
                            quality: 70
                        },
                        // optipng.enabled: false will disable optipng
                        optipng: {
                            enabled: false,
                        },
                        pngquant: {
                            quality: '65-90',
                            speed: 4
                        },
                        gifsicle: {
                            interlaced: false,
                        },
                        // the webp option will enable WEBP
                        webp: {
                            quality: 75
                        }
                    }
                }
            ],
        },
    ]
},

    plugins: [
        new HtmlWebpackPlugin({
            // inject: false,
            // hash: true,
            template: PATH.source + '/index.pug'
        }),
        new MiniCssExtractPlugin({
            filename: "style.css",
        }),
        // new CopyWebpackPlugin([
        //     {from: PATH.source + '/img',to: `./img`},
        //     // {from: PATH.src + '/static'},
        // ]),
        new CleanWebpackPlugin({
            verbose: true
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
                    preset: ['default', {
                        discardComments: {
                            removeAll: true
                        }
                    }],
                },
                canPrint: true
            })
    ]
}
