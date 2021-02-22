const path = require('path'); //usado para movernos en las carpetas del proyecto
const HtmlWebpackPlugin = require('html-webpack-plugin'); //Para el uso del html desde webpack

//modulo de configuracion
module.exports = {
  entry: './src/index.js', //objeto de donde va venir la informacion final
  //configuracion de donde y como se llamara el archivo de salida
  output: {
    path: path.resolve(__dirname, 'dist'), //carpeta de salida
    filename: 'main.js', //nombre del archivo de salida
  },
  // extenciones de los archivos a usar e interpretar webpack
  resolve: {
    extensions: ['.js'],
  },
  // generar las reglas para trabajar
  module: {
    rules: [
      //para babel
      {
        test: /\.js?$/, //-> rejex para tomar en cuenta los archivos .js
        exclude: /node_modules/, //-> excluir los nodemodles de babel
        use: {
          loader: 'babel-loader', //-> usasndo el loader de babel para esta regla
        },
      },
    ],
  },
  //configurar plugins a usar
  plugins: [
    //creandolos
    new HtmlWebpackPlugin([
      {
        inject: true, //->permitir injectar o poner codigo en un archivo
        template: './public/index.html', //-> archivo que permitira la inyeccion
        filename: './index.html', //-> archivo de salida del plugin
      },
    ]),
  ],
};
