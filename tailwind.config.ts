import type { Config } from 'tailwindcss'

const proofColors = {
	bg: '#0d0d0f',
	surface: '#111113',
	lift: '#161618',
	line: 'rgba(255, 255, 255, 0.06)',
	text: '#e8e8ea',
	sub: '#8a8a94',
	dim: '#46464f',
	gold: '#c9a84c',
	green: '#3ecf8e',
	teal: '#2dd4bf',
	gmb: '#4285f4',
} as const

export default {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: proofColors,
			fontFamily: {
				sans: [
					'var(--font-dm-sans)',
					'ui-sans-serif',
					'system-ui',
					'sans-serif',
				],
				fraunces: [
					'var(--font-display-fraunces)',
					'Georgia',
					'ui-serif',
					'serif',
				],
				mono: ['var(--font-dm-mono)', 'ui-monospace', 'monospace'],
			},
		},
	},
} satisfies Config
