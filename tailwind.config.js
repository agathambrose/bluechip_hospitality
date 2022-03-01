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
				"home-hero": "url('/assets/images/home-sm.png')",
				"home-hero-md": "url('/assets/images/home-md.png')",
				"home-hero-lg": "url('/assets/images/homepic.png')",
				"about-hero": "url('/assets/images/about-sm.png')",
				"about-hero-md": "url('/assets/images/about-md.png')",
				"about-hero-lg": "url('/assets/images/about.png')",
				"services-hero-lg": "url('/assets/images/services.png')",
				"services-hero-md": "url('/assets/images/services-md.png')",
				"services-hero": "url('/assets/images/services-sm.png')",
				"portfolio-hero": "url('/assets/images/portfolio-sm.png')",
				"portfolio-hero-md": "url('/assets/images/portfolio-md.png')",
				"portfolio-hero-lg": "url('/assets/images/portfolio.png')",
				"contact-hero-lg": "url('/assets/images/contact.png')",
				"contact-hero": "url('/assets/images/phonesm.png')",
				"contact-hero-md": "url('/assets/images/phonemd.png')",
				"team-hero-lg": "url('/assets/images/teammd.png')",
				"team-hero-md": "url('/assets/images/teammd.png')",
				"team-hero": "url('/assets/images/teamsm.png')",
				"garden-image": "url('/assets/images/gardenimage.png')",
			},
		},
	},
	plugins: [],
};
