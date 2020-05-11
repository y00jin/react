## Application 번들링하기

1. 프로젝트 생성 및 매니페스트(package.json) 초기화

    1-1. 프로젝트 디렉토리 생성

    1-2. src, public 디렉토리 생성

2. 매니페스트(package.json) 초기화
```
    $ npm init -y
```
3. webpack 설치
```
    $ npm i -D webpack webpack-cli webpack-dev-server
    $ npx webpack -v
```
4. webpack 설정(webpack.config.js)
```
   module.exports = {
      entry: path.resolve('src/index.js'),
      output: {
         path: path.resolve('public'),
         filename: 'bundle.js'
      },
      devServer: {
         contentBase: path.resolve('public'),
         host: '0.0.0.0',
         port: 9999,
         inline: true,
         liveReload: true,
         hot: false,
         compress: true,
         historyApiFallback: true
      }
   }
```
5. npm scripting (package.json, scripts 섹션 수정)
```
   "scripts": {
      "build": "npx webpack",
      "start": "npx webpack-dev-server"
   }
```