module.exports = {
	purge: [ './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}' ],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				"main": [ "Antapani-ExtraBold", "sans-serif" ],
				"primary": [ "Poppins", "sans-serif" ],
				"secondary": [ "Inter", "sans-serif" ],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
