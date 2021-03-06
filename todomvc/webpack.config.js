module.exports = {
    entry: './src/index.ts',
    output: {
        filename: './dist/bundle.js'
    },
    resolve: {
      extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts?$/, loader: 'ts-loader'
            }
        ]
    }
};