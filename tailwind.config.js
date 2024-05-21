/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
				cream: '#D87D4A',
				'cream-light': '#FBAF85',
				stone: '#101010',
				'gray-light': '#F1F1F1',
				'gray-very-light': '#FAFAFA',
			},
      backgroundImage: {
				'lg-hero-pattern': "url('/assets/home/desktop/image-hero.jpg')",
				circles: "url('/assets/home/desktop/pattern-circles.svg')",
				'lg-ZX7': "url('/assets/home/mobile/image-speaker-zx7.jpg')",
				'lg-YX1': "url('/assets/home/desktop/image-earphones-yx1.jpg')",
			},
    },
  },
  plugins: [
    require('daisyui'),
  ],
}