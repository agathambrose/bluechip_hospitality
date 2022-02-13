module.exports = {
	mode: "jit",
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				"NotoSerif": ["Noto Sans", "ui-sans-serif", "ui-serif"],
			},
			colors: {
				"primary-color": "#1B75BC",
				"secondary-color": "#0F1A42",
				"box-color": "#A8A8A8",
			},
		},
	},
	plugins: [],
};
