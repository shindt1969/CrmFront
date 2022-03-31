module.exports = {
 
  runtimeCompiler:true,
    publicPath: process.env.NODE_ENV === 'production'?'/':'/',
    assetsDir:"assets",
    indexPath:"index.html",
    configureWebpack: {
      devtool: 'source-map',
  css: {
      loaderOptions: {
        less: {
          lessOptions: {
            modifyVars: {
              'primary-color': '#1DA57A',
              'link-color': '#1DA57A',
              'border-radius-base': '2px',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
      plugins: [
      ],
      devServer: {
        host: '0.0.0.0',
        port: 8082,
        proxy: {
            '/api':{
                target:'http://localhost:8111/api/',
                changeOrigin: true,
                pathRewrite: {
                    '^/api':''
                },
                logLevel:'debug'
            }
        },
      },

    
    },
}
