const vue = require('rollup-plugin-vue');

module.exports = exports = [
    {
        input: './src/index.js',
        output: {
            file: './dist/popup.esm.js',
            format: 'es',
        },
        plugins: [
            vue({
                css: './dist/popup.css',
            }),
        ],
    },
    {
        input: './src/index.js',
        output: {
            file: './dist/popup.cjs.js',
            format: 'cjs',
        },
        plugins: [
            vue({
                css: './dist/popup.css',
            }),
        ],
    },
];