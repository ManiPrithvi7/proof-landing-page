import type { Metadata } from 'next'
import { DM_Sans, DM_Mono, Fraunces } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({
	variable: '--font-dm-sans',
	subsets: ['latin'],
	weight: ['300', '400', '500', '600'],
	display: 'swap',
})

const fraunces = Fraunces({
	variable: '--font-display-fraunces',
	subsets: ['latin'],
	weight: ['200', '300', '700'],
	style: ['normal', 'italic'],
	display: 'swap',
})

const dmMono = DM_Mono({
	variable: '--font-dm-mono',
	subsets: ['latin'],
	weight: ['400', '500'],
	display: 'swap',
})

export const metadata: Metadata = {
	title: 'Proof — Your business trust, one dashboard',
	description:
		'Proof connects to your Google Business Profile, Instagram, and point-of-sale — unified analytics for ratings, reviews, social growth, and revenue signals.',
	metadataBase: new URL(
		process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.withproof.io'
	),
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" suppressHydrationWarning>

<meta name="google-site-verification" content="Fb-95YJ6Z2mySzoEpuCN2X3Ux2kZz8GjDXBzZ3og6iA" />
			<body
				className={`${dmSans.variable} ${fraunces.variable} ${dmMono.variable} font-sans antialiased`}
			>
				{children}
			</body>
		</html>
	)
}
