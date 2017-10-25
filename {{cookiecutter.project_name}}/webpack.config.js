'use strict'

const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const StyleLintPlugin = require('stylelint-webpack-plugin')

const prod = 'production'
const dev = 'development'

// Determine build env
const TARGET_ENV = process.env.NODE_ENV
const isDev = TARGET_ENV === dev
const isProd = TARGET_ENV === prod

// Entry and output path/filename variables
const entryPath = path.join(__dirname, 'src/js/index.js')
const outputPath = path.join(__dirname, 'dist')
const outputFilename = isProd ? '[name]-[hash].js' : '[name].js'

console.log(`Webpack started. Building for ${TARGET_ENV}`)

console.log(path.join(__dirname, 'index.html'))
const commonConfig = {
  output: {
    // Put outputted files into dist folder
    path: outputPath,

    // Calc output file name dynamically,
    filename: `js/${outputFilename}`
  },
  resolve: {
    // Automatically resolves those extensions so they can be omitted when
    // importing a file of those types
    extensions: ['.js'],
    modules: ['node_modules', 'src']
  },
  module: {
    rules: [
      {
        // Transpile ES6
        test: /\.js?$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader' }
        ]
      },
      {
        test: /\.json?$/,
        loader: 'json-loader'
      },
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader'
        }]
      },
      {
        test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        include: [
          path.resolve(__dirname, 'src/fonts')
        ],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'fonts/[name].[ext]',
              outputPath: 'fonts/',
              useRelativePath: isProd
            }
          }
        ]
      },
      {
        test: /\.(svg|gif|jpg|png|jpeg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        include: [
          path.resolve(__dirname, 'src/img')
        ],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'img/',
              useRelativePath: isProd
            }
          }
        ]
      }
    ]
  }, // end module
  plugins: [
    // Generate html5 file, which includes all webpack bundles in the body
    // using script tags
    // Takes a template file as input and outputs it to the dist folder
    new HtmlWebpackPlugin({
      template: 'src/index.tpl.html',
      inject: 'body',
      filename: 'index.html'
      // TODO favicon: 'src/img/favicon.png'
    }),

    // Not 100% what this does, but its use is highly recommended by the
    // official webpack docs, so I obey ;)
    new webpack.optimize.OccurrenceOrderPlugin()
  ]
}

// Additional settings for local dev env
const FlowWebpackPlugin = require('flow-webpack-plugin')
if (isDev) {
  module.exports = merge(commonConfig, {
    entry: [
      'babel-polyfill',

      // Dev-server
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',

      // Entrypoint
      entryPath
    ],
    // Debugging config
    devtool: 'eval-source-map',
    devServer: {
      // contentBase: './src',
      hot: true,
      host: '0.0.0.0',
      disableHostCheck: true,
      stats: {
        colors: true
      }
    },
    module: {
      rules: [
        {
          // Lint with standard
          test: /\.js?$/,
          enforce: 'pre',
          exclude: /node_modules/,
          use: {
            loader: 'standard-loader',
            options: {
              error: false,
              snazzy: true
            }
          }
        },
        {
          // Style loader
          test: /\.scss$/,
          use: [
            {
              loader: 'style-loader' // Creates style nodes from js strings
            },
            {
              loader: 'css-loader', // translates CSS into modules
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'postcss-loader', // used for features like autoprefixer
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader', // compiles Sass to CSS
              options: {
                sourceMap: true
              }
            }
          ]
        },
        {
          test: /\.css/,
          use: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader'
            }
          ]
        }
      ] // end rules
    }, // end module
    plugins: [
      // Refreshes app inside the browser on file save
      new webpack.HotModuleReplacementPlugin(),

      // Prevents webpack CLI from stopping if errors occur
      new webpack.NoEmitOnErrorsPlugin(),

      // better readable module names in the browser on HMR updates
      new webpack.NamedModulesPlugin(),

      // flow type checking
      new FlowWebpackPlugin(),

      // Style linting
      new StyleLintPlugin({
        configfile: '../stylelint.config.js'
      }),

      // Nicer webpack logs in the console
      new FriendlyErrorsWebpackPlugin(),

      // Helps passing variables between webpack and js-files
      // Gives us the ability to e.g. switch between dev and production environment
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development')
      })
    ]
  })
}

// additional production env settings
const ExtractTextPlugin = require('extract-text-webpack-plugin')

if (isProd) {
  const extractSass = new ExtractTextPlugin({
    filename: 'css/[name].[contenthash].css'
  })

  const extractCss = new ExtractTextPlugin({
    filename: 'css/[name].[contenthash].css'
  })

  module.exports = merge(commonConfig, {
    entry: [
      'babel-polyfill',
      entryPath
    ],
    module: {
      rules: [
        {
          test: /\.css$/,
          use: extractCss.extract({
            use: [
              {
                loader: 'css-loader',
                options: {
                  minimize: true
                }
              }
            ],
            fallback: 'style-loader'
          })
        },
        {
          test: /\.scss$/,
          use: extractSass.extract({
            use: [
              {
                loader: 'css-loader',
                options: {
                  minimize: true
                }
              },
              {
                loader: 'postcss-loader'
              },
              {
                loader: 'sass-loader'
              }
            ],
            fallback: 'style-loader'
          })
        }
      ] // end rules
    }, // end module
    plugins: [
      // Split bundle into vendor and manifest files
      // This way clients don't need to reload all
      // vendor assets, whenever the main app changes
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: function (module) {
          return module.context && module.context.indexOf('node_modules') !== -1
        }
      }),

      new webpack.optimize.CommonsChunkPlugin({
        name: 'manifest'
      }),

      // JS uglifying
      new webpack.optimize.UglifyJsPlugin({
        compressor: {
          warnings: false,
          screw_ie8: true
        }
      }),

      // Helps passing variables between webpack and js-files
      // Gives us the ability to e.g. switch between dev and production environment
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
      }),

      extractCss,

      // Extracts Sass
      extractSass
    ] // end plugins
  })
}
