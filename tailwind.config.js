/** @type {import('tailwindcss').Config} */
//@import 'tailwindcss/base';
//@import 'tailwindcss/components';
//@import 'tailwindcss/utilities';

export default {
	content: [
		'./resources/**/*.{html,js,ts,php,scss,vue}',
		'./public/**/*.{html,js,ts,php,scss}',
		"./node_modules/flowbite/**/*.js"
	],
	theme: {
		extend: {},
	},
	plugins: [
		require('flowbite/plugin')
	],
}

// compiilar archivos css
// npx tailwindcss build -o ruta/del/archivo.css
