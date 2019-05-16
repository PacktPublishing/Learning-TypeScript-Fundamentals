module.exports = {
    entry: './test/index.ts',
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