export const PROOF_LOGOS = {
	horizontalOnLight: '/logos/horizontal-on-light.png',
	horizontalOnDark: '/logos/horizontal-on-dark.png',
} as const

export type ProofLogoBackground = 'light' | 'dark'

export const getHorizontalLogoSrc = (
	background: ProofLogoBackground
): string =>
	background === 'dark'
		? PROOF_LOGOS.horizontalOnLight
		: PROOF_LOGOS.horizontalOnDark
