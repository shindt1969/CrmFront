module.exports = {
 
  runtimeCompiler:true,
    publicPath: process.env.NODE_ENV === 'production'?'/':'/',
    assetsDir:"assets",
    indexPath:"index.html",
    configureWebpack: {
      devtool: 'source-map',
      plugins: [
      ],
      devServer: {
        host: '0.0.0.0',
        port: 8082,
        proxy: {
            '/api':{
                target:'http://localhost:7000/api/',
                changeOrigin: true,
                pathRewrite: {
                    '^/api':''
                },
                logLevel:'debug'
            }
        },
      }
    },
}
