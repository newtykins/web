const colours = require('tailwindcss/colors');

module.exports = {
	mode: 'jit',
	purge: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		fontFamily: {
			sans: ['Inter'],
		},
		colors: {
			gray: colours.gray,
			silver: '#d1c5ad',
			white: colours.white,
			purple: colours.violet,
		},
	},
};
