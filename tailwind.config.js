module.exports = {
	mode: "jit",
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				NotoSerif: ["Noto Sans", "ui-sans-serif", "ui-serif"],
			},
			colors: {
				"primary-color": "#1B75BC",
				"secondary-color": "#0F1A42",
				"box-color": "#A8A8A8",
				"box-linear":
					"linear-gradient(142.62deg, #1B75BC 3.85%, rgba(27, 117, 188, 0) 68.07%)",
			},
			backgroundImage: {
				"home-hero": "url('/assets/images/homepic.svg')",
				"about-hero": "url('/assets/images/About.svg')",
				"services-hero": "url('/assets/images/services.svg')",
				"garden-image": "url('/assets/images/gardenimage.png')",
			},
		},
	},
	plugins: [],
};
