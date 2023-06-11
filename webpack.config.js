const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ZipPlugin = require('zip-webpack-plugin');
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");
const TerserWebpackPlugin = require('terser-webpack-plugin');
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

let filename = (ext) => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;

const optimization = () => {
    const configObj = {
        splitChunks: {
            chunks: 'all'
        }
    };

    if (isProd) {
        configObj.minimizer = [
            new CssMinimizerWebpackPlugin(),
            new TerserWebpackPlugin()
        ];
    }

    return configObj;
};

const plugins = () => {
    const basePlugins = [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'pages/index.html'),
            filename: 'index.html',
            insert: 'body',
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new MiniCssExtractPlugin({
            filename: `./css/${filename('css')}`,
        }),
    ];

    if (isProd) {
        basePlugins.push(
            new ImageMinimizerPlugin({
                minimizer: {
                    implementation: ImageMinimizerPlugin.imageminMinify,
                    options: {
                        plugins: [
                            ["gifsicle", { interlaced: true }],
                            ["mozjpeg", { progressive: true }],
                            ["pngquant", { optimizationLevel: 5 }],
                            [
                                "svgo",
                                {
                                    plugins: [
                                        {
                                            name: "preset-default",
                                            params: {
                                                overrides: {
                                                    removeViewBox: false,
                                                    addAttributesToSVGElement: {
                                                        params: {
                                                            attributes: [
                                                                { xmlns: "http://www.w3.org/2000/svg" },
                                                            ],
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    ],
                                },
                            ],
                        ],
                    },
                },
            }),
            new ZipPlugin({
                path: path.resolve(__dirname, 'dist'),
                filename: 'bundle.zip',
                fileOptions: {
                    compress: true,
                },
                zipOptions: {
                    forceZip64Format: false,
                },
            }),
        );
    }

    return basePlugins;
};

module.exports = {
    context: path.resolve(__dirname, 'pages'),
    mode: 'development',
    entry: './main.js',
    output: {
        filename: `./js/${filename('js')}`,
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        publicPath: '',

    },
    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        compress: true,
        open: true,
        hot: true,
        port: 9000,
    },
    optimization: optimization(),
    plugins: plugins(),
    devtool: isProd ? false : 'source-map',
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../'
                        }
                    },
                    "css-loader",
                    'sass-loader'
                ],
            },
            {
                test: /\.(?:js|mjs|cjs)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: "defaults" }]
                        ]
                    }
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'img/[name][ext]'
                }
            },
            {
                test: /\.(woff|woff2)$/i,
                type: 'asset/resource',
                generator: {
                    filename: `fonts/[name][ext]`
                },
            },
        ],
    },
};
