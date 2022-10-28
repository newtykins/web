const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    darkMode: 'class',
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Roboto Mono', ...defaultTheme.fontFamily.sans],
                quicksand: ['Quicksand']
            },
            colors: {
                nord: {
                    0: '#2E3440',
                    1: '#3B4252',
                    2: '#434C5E',
                    3: '#4C566A',
                    4: '#D8DEE9',
                    5: '#E5E9F0',
                    6: '#ECEFF4',
                    7: '#8FBCBB',
                    8: '#88C0D0',
                    9: '#81A1C1',
                    10: '#5E81AC',
                    11: '#BF616A',
                    12: '#D08770',
                    13: '#EBCB8B',
                    14: '#A3BE8C',
                    15: '#B48EAD'
                },
                blurple: '#7289da',
                twitch: colors.violet[500],
                steam: '#66c0f4',
                spotify: colors.green[500],
                github: colors.gray[400]
            }
        }
    }
};
