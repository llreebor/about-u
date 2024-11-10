/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js}'],
	darkMode: 'class',
	theme: {
		container: {
			center: true,
			padding: '16px',
		},
		extend: {
			backgroundImage: {
				body: 'url(../img/global/bg.png)',
				footer: 'url(../img/global/footer-bg.png)',
			},
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
			},
			colors: {
				primary: '#130E1D',
				secondary: '#F9F9F9',
			},
			keyframes: {
				'fade-in': {
					from: {
						opacity: 0,
					},
					to: {
						opacity: 1,
					},
				},
			},
			animation: {
				fadeIn: 'fade-in .3s ease',
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
}
