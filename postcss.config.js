const tailwindcss = require('tailwindcss');

module.exports = {
    plugins: [
        tailwindcss('./tailwindcss.confing.js'),
        require('autoprefixer')
    ]
}