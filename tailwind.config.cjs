const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
                quicksand: ['Quicksand']
            },
            colors: {
                github: '#6e5494',
                blurple: '#7289da',
                steam: '#2a475e',
                youtube: '#FF0000'
            }
        }
    },
    plugins: []
};
