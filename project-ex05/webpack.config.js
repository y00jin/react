const path = require('path');

module.exports = {
    entry: path.resolve('src/index.js'),
    output: {
        path: pathresolve('public'),
        filename: 'bundle.js'
    }
}