/* eslint-disable @typescript-eslint/no-var-requires */
// webpack.config.js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports = {

    resolve: {
        alias: {
            '@/Components': path.resolve(__dirname, 'src/components/'),
            '@/Layout': path.resolve(__dirname, 'src/layout/'),
            '@/Pages': path.resolve(__dirname, 'src/pages/')
        },

        extensions: ['.wasm', '.ts', '.tsx', 'jsx', '.mjs', '.cjs', '.js', '.json']
    },

    // Left is OUTPUT -- Right is INPUT
    entry: {
        'js/App.js': './src/index.tsx'
    },

    output: {
        path: path.join(__dirname, '/dist'),
        filename: '[name]',
        clean: true,
        publicPath: '/'
    },



    devServer: {
        historyApiFallback: true,
        port: 8080,
        static: path.join(__dirname, 'dist'),

        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                pathRewrite: { '^/api': '' },
                router: () => 'http://localhost:5000',
                logLevel: 'debug' /* optional */
            }

        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader']
            },
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },

            {
                test: /\.(png|jpe?g|gif|webp)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'public/images/[name].[ext]'
                        }
                    }
                ]
            },


            {
                test: /\.svg$/,
                use: ['@svgr/webpack']
            },

            {
                test: /\.(s(a|c)ss)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },

            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: '/public/fonts/'
                        }
                    }
                ]
            }


        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html'
        }),

        new CopyWebpackPlugin({
            patterns: [
                {
                    from: 'public',
                    to: '/public',
                    noErrorOnMissing: true
                }

            ]
        })
    ]

}
