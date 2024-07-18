//const path = require('path');

// //forma de modificar o webpack com o arquivo de configuração, foi criado na mão, utilizando esse nome "webpack.config.js" 
// module.exports = {
//   entry: {
//     //primeiro-> nome do arquivo que vc quer no arquivo de saída e depois o caminho que se encontra o arquivo original 
//     main: './src/index.js',
//     hello: './src/hello.js'
//   },
//   //com essa opção é possível mudar a opção do webpack se é de desenvolvimento se é o de produção 'production'
//   mode: 'development',
//   //podemos modificar o caminho aonde o arquivo final vai ficar
//   output: {
//     //alterando o caminho do output do arquivo e criando uma pasta public para colocar
//     path: path.resolve(__dirname, 'public'), 
//     //atribuindo um outro nome ao arquivo de saída
//     filename: "[name]_bundle.js" //quando temos mais de um arquivo de entrada, colocamos o [name] para diferenciar as saídas do arquivo
//   }
// }

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    index: './src/index.js'
  }, 
  mode: 'development',
  //module para incluir o compactador de css, mostrando qual o tipo de extensão
  module:{
    rules: [{
      test: /\.css$/,
      //se for caso não for usar o plugin MiniCSS usa-se 'style-loader' em fez do Mini-CSS
      use: [MiniCssExtractPlugin.loader, 'css-loader']
    }]
  }, 
  plugins:[
    new MiniCssExtractPlugin()
  ]
}