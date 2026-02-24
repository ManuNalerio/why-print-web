/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'cyber-bg': '#0A0A0B',
				'cyber-card': '#16161A',
				'cyber-accent': '#C026D3',
				'cyber-purple': '#7000FF',
				'cyber-text': '#e7e2e2',
                
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				mono: ['JetBrains Mono', 'monospace'],
				display: ['Space Grotesk', 'sans-serif'],
			},
		},
	},
	plugins: [],
}