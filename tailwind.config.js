
module.exports = {
	content: [
	  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
	  "./components/**/*.{js,ts,jsx,tsx,mdx}",
	  "./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
	  extend: {
		colors: {
		  main: {
			50: "#DAFBE9",
			100: "#BAF7D6",
			200: "#76EFAC",
			300: "#31E783",
			400: "#15B75E",
			500: "#0D713A",
			600: "#0B5B2F",
			700: "#084523",
			800: "#052E17",
			900: "#03170C",
			950: "#010905",
		  },
		},
		animation: {
		  "fade-in-up": "fadeInUp 1s ease-out forwards",
		  float: "float 6s ease-in-out infinite",
		  "float-reverse": "float 8s ease-in-out infinite reverse",
		  drive: "drive 15s linear infinite",
		},
		keyframes: {
		  fadeInUp: {
			"0%": { opacity: "0", transform: "translateY(20px)" },
			"100%": { opacity: "1", transform: "translateY(0)" },
		  },
		  float: {
			"0%, 100%": { transform: "translateY(0)" },
			"50%": { transform: "translateY(-20px)" },
		  },
		  drive: {
			"0%": { transform: "translateX(-150%)" },
			"100%": { transform: "translateX(150%)" },
		  },
		},
	  },
	},
	plugins: [],
  };