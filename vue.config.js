module.exports = {
 
  runtimeCompiler:true,
    publicPath: process.env.NODE_ENV === 'production'?'/':'/',
    assetsDir:"assets",
    indexPath:"index.html",
    css: {
          loaderOptions: {
            less: {
              lessOptions: {
                modifyVars: {
                  'primary-color': '#1DA57A',
                  'link-color': '#1DA57A',
                  // 'border-radius-base': '2px',
                  'font-size-base': '14px',
                  'highlight-color':'#1DA57A',
                  'error-color':'#ed3211',
                },
                javascriptEnabled: true,
              },
            },
          },
        },
    configureWebpack: {
      devtool: 'source-map',
      plugins: [
      ],
      devServer: {
        host: '0.0.0.0',
        port: 8082,
        proxy: {
            '/api':{
                target:'http://localhost:8080/api/',
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
