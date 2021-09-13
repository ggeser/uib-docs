const mix = require('laravel-mix')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
  .js('resources/js/app.js', 'public/js')
  .webpackConfig({
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'frontend/src/'),
        '@themeConfig': path.resolve(__dirname, 'frontend/themeConfig.js'),
        '@core': path.resolve(__dirname, 'frontend/src/@core'),
        '@validations': path.resolve(__dirname, 'frontend/src/@core/utils/validations/validations.js'),
        '@axios': path.resolve(__dirname, 'frontend/src/libs/axios')
      }
    },
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            {
              loader: 'sass-loader',
              options: {
                sassOptions: {
                  includePaths: ['frontend/node_modules', 'frontend/src/assets']
                }
              }
            }
          ]
        },
        {
          test: /(\.(png|jpe?g|gif|webp)$|^((?!font).)*\.svg$)/,
          loaders: {
            loader: 'file-loader',
            options: {
              name: 'images/[path][name].[ext]',
              context: '../vuexy-vuejs-bootstrap-vue-template/src/assets/images'
              //   context: 'frontend/src/assets/images'
            }
          }
        }
      ]
    }
  })
  .sass('resources/sass/app.scss', 'public/css')
    .sourceMaps()
    .webpackConfig({devtool: 'source-map'})
  .options({
    postCss: [require('autoprefixer'), require('postcss-rtl')]
  })

// ------------------------------------------------
// If you are deploying on subdomain/subfolder. Uncomment below code before running 'yarn prod' or 'npm run production' command.
// Please Change below 'publicPath' and 'setResourceRoot' options as per your sub-directory path. We have kept our current live demo options which is deployed in sub-folder.
// ------------------------------------------------

/*
 if (mix.inProduction()) {
   mix.version()
   mix.webpackConfig({
     output: {
       publicPath: '/demo/vuexy-vuejs-laravel-admin-template/demo-1/',
       chunkFilename: 'js/chunks/[name].[chunkhash].js'
     }
   })
   mix.setResourceRoot('/demo/vuexy-vuejs-laravel-admin-template/demo-1/')
 }
 */

// ------------------------------------------------
// If you are deploying on subdomain/subfolder then comment out below code before running 'yarn prod' or 'npm run production' command.
// ------------------------------------------------

mix.webpackConfig({
  output: {
    chunkFilename: 'js/chunks/[name].[chunkhash].js'
  }
})
