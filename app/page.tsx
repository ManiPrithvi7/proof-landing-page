import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { GetAccessButton } from '@/components/landing/get-access-button'

const NAV_LINKS = [
	{ href: '#story', label: 'What It Is' },
	{ href: '#google-data', label: 'Google Data' },
	{ href: '#how-it-works', label: 'How It Works' },
	{ href: '#privacy', label: 'Privacy' },
	{ href: '#about', label: 'About' },
] as const

const GOOGLE_DATA_POINTS = [
	{
		icon: '⭐',
		title: 'Star Rating (Aggregate)',
		body:
			'The overall average rating (e.g., 4.8 ★) is displayed on the ' +
			'dashboard. We do not read, store, or display individual review text.',
	},
	{
		icon: '📝',
		title: 'Review Count',
		body:
			'The total number of Google reviews is shown as a social proof ' +
			'metric. No reviewer names, text, or personal data is accessed.',
	},
	{
		icon: '🏢',
		title: 'Business Name & Location',
		body:
			'Used to confirm the correct Google Business Profile is linked to ' +
			'the right merchant account within Proof.',
	},
	{
		icon: '🔄',
		title: 'Periodic Data Refresh',
		body:
			'Data is refreshed at a low frequency (about every 15–30 minutes) ' +
			'to keep your dashboard current without excessive API load.',
	},
] as const

const HOW_IT_WORKS_STEPS = [
	{
		title: 'Create your Proof account',
		body:
			'Sign up with your business email. Your account is scoped to your ' +
			'business — only you can authorize and manage connected data sources.',
	},
	{
		title: 'Authorize Google Business Profile access',
		body:
			'Sign in with Google and grant read-only access via OAuth. No ' +
			'passwords are shared with us. Access can be revoked anytime.',
	},
	{
		title: 'Connect optional integrations',
		body:
			'Optionally link Instagram and your point-of-sale system to view ' +
			'social growth and revenue signals alongside Google metrics.',
	},
	{
		title: 'Your dashboard goes live — and stays in sync',
		body:
			'Proof displays your metrics in a unified web dashboard. Sync runs ' +
			'automatically in the cloud — no ongoing setup required.',
	},
	{
		title: 'Revoke access at any time',
		body:
			'Disconnect integrations from within Proof (or via Google Account ' +
			'settings). Cached metrics are deleted within 24 hours of disconnect.',
	},
] as const

const PRIVACY_CARDS = [
	{
		title: 'Read-only access only',
		body:
			'Proof never writes to your Google Business Profile. We cannot post ' +
			'or respond to reviews, edit listings, or change settings.',
		emoji: '🔒',
	},
	{
		title: 'No individual review data stored',
		body:
			'We store the aggregate star rating and review count — not review ' +
			'text, names, or any personal data of reviewers.',
		emoji: '📊',
	},
	{
		title: 'Merchant-controlled access',
		body:
			'Only the business owner can authorize and revoke access. Proof ' +
			'employees cannot initiate or alter merchant authorizations.',
		emoji: '🏪',
	},
	{
		title: 'Right to deletion',
		body:
			'Upon account cancellation or request, merchant-linked cached metrics ' +
			'are permanently deleted within 24 hours.',
		emoji: '🗑️',
	},
	{
		title: 'Encrypted in transit & at rest',
		body:
			'All traffic uses TLS 1.2+. Stored credentials are encrypted at rest ' +
			'using industry-standard practices.',
		emoji: '🔐',
	},
	{
		title: 'No third-party data sharing',
		body:
			'Proof does not sell, license, or share merchant/customer data with ' +
			'third parties for advertising or profiling.',
		emoji: '🌐',
	},
] as const

const DASHBOARD_CHART_BARS = [
	{ heightClass: 'h-[30%]', height: 30 },
	{ heightClass: 'h-[40%]', height: 40 },
	{ heightClass: 'h-[55%]', height: 55 },
	{ heightClass: 'h-[45%]', height: 45 },
	{ heightClass: 'h-[60%]', height: 60 },
	{ heightClass: 'h-[50%]', height: 50 },
	{ heightClass: 'h-[85%]', height: 85 },
	{ heightClass: 'h-[65%]', height: 65 },
	{ heightClass: 'h-[55%]', height: 55 },
	{ heightClass: 'h-[48%]', height: 48 },
	{ heightClass: 'h-[62%]', height: 62 },
	{ heightClass: 'h-[78%]', height: 78 },
	{ heightClass: 'h-[58%]', height: 58 },
	{ heightClass: 'h-[70%]', height: 70 },
	{ heightClass: 'h-[90%]', height: 90 },
	{ heightClass: 'h-[68%]', height: 68 },
	{ heightClass: 'h-[55%]', height: 55 },
	{ heightClass: 'h-[45%]', height: 45 },
	{ heightClass: 'h-[65%]', height: 65 },
	{ heightClass: 'h-[80%]', height: 80 },
] as const

export default async function HomePage() {
	return (
		<div
			className="min-h-screen bg-background text-foreground"
		>
			<nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
				<div className="mx-auto flex h-[60px] max-w-[900px] items-center justify-between px-6">
					<Link
						href="/"
						className="font-serif text-xl tracking-tight"
						aria-label="Proof home"
						tabIndex={0}
					>
						Proof
					</Link>

					<ul className="hidden items-center gap-8 md:flex">
						{NAV_LINKS.map((link) => (
							<li key={link.href}>
								<a
									href={link.href}
									className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
									aria-label={link.label}
									tabIndex={0}
								>
									{link.label}
								</a>
							</li>
						))}
						<li>
							<GetAccessButton variant="secondary" size="sm" />
						</li>
					</ul>
				</div>
			</nav>

			<section
				id="hero"
				className="relative overflow-hidden bg-foreground text-background"
			>
				<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_72%_28%,hsl(var(--warning)/0.24)_0%,transparent_60%)]" />
				<div className="mx-auto max-w-[900px] px-6 pb-16 pt-28">
					<Badge
						variant="outline"
						className="mb-7 inline-flex items-center gap-2 border-warning/40 bg-warning/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-warning"
					>
						<span
							className="h-1.5 w-1.5 rounded-full bg-emerald-400"
							aria-hidden="true"
						/>
						Business Trust Analytics — withproof.io
					</Badge>

					<h1 className="max-w-[680px] font-serif text-4xl leading-[1.05] tracking-[-0.03em] sm:text-6xl">
						Your business trust,
						<br />
						<em className="text-warning">one dashboard.</em>
					</h1>

					<p className="mt-6 max-w-[560px] text-base font-light leading-8 text-background/65 sm:text-lg">
						Proof connects to your Google Business Profile, Instagram, and
						point-of-sale — and gives you a unified analytics hub to track
						ratings, reviews, social growth, and real-time revenue signals.
					</p>

					<div className="mt-10 flex flex-wrap items-center gap-4">
						<Button asChild variant="hero" size="lg">
							<Link href="#story" aria-label="See how it works" tabIndex={0}>
								See how it works ↓
							</Link>
						</Button>
						<Link
							href="#google-data"
							className="text-sm text-background/45 transition-colors hover:text-background/80"
							aria-label="How we use Google data"
							tabIndex={0}
						>
							How we use Google data →
						</Link>
					</div>

					<div className="mt-16">
						<div className="overflow-hidden rounded-xl border border-background/10 bg-background/5 shadow-[0_32px_80px_rgba(0,0,0,0.5)]">
							<div className="flex items-center gap-2 border-b border-background/10 bg-background/10 px-4 py-3">
								<span
									className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]"
									aria-hidden="true"
								/>
								<span
									className="h-2.5 w-2.5 rounded-full bg-[#febc2e]"
									aria-hidden="true"
								/>
								<span
									className="h-2.5 w-2.5 rounded-full bg-[#28c840]"
									aria-hidden="true"
								/>
								<div className="ml-3 rounded-md bg-background/10 px-3 py-1 text-xs tracking-tight text-background/35">
									dashboard.withproof.io
								</div>
							</div>

							<div className="grid grid-cols-1 bg-black/60 md:grid-cols-[220px_1fr]">
								<div className="hidden border-r border-background/10 bg-black/40 p-5 md:block">
									<p className="px-2 pb-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-background/25">
										Menu
									</p>
									<div className="space-y-1 text-sm">
										<div className="rounded-md bg-warning/15 px-2 py-2 text-warning">
											📊 Dashboard
										</div>
										<div className="rounded-md px-2 py-2 text-background/35">
											📍 Google My Business
										</div>
										<div className="rounded-md px-2 py-2 text-background/35">
											📱 Instagram
										</div>
										<div className="rounded-md px-2 py-2 text-background/35">
											🛒 POS
										</div>
									</div>
									<p className="mt-5 px-2 pb-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-background/25">
										Account
									</p>
									<div className="space-y-1 text-sm">
										<div className="rounded-md px-2 py-2 text-background/35">
											⚙️ Preferences
										</div>
										<div className="rounded-md px-2 py-2 text-background/35">
											🔒 Privacy
										</div>
									</div>
								</div>

								<div className="p-6">
									<p className="mb-4 text-sm text-background/50">
										Your trust snapshot — updated just now
									</p>

									<div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
										<div className="rounded-lg border border-background/10 bg-background/5 p-4">
											<p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-background/35">
												Google Rating
											</p>
											<p className="mt-1 text-2xl font-light tracking-tight text-background">
												4.8 ★
											</p>
											<p className="mt-1 text-xs text-emerald-400">
												↑ stable this week
											</p>
										</div>
										<div className="rounded-lg border border-background/10 bg-background/5 p-4">
											<p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-background/35">
												Total Reviews
											</p>
											<p className="mt-1 text-2xl font-light tracking-tight text-background">
												1,243
											</p>
											<p className="mt-1 text-xs text-emerald-400">
												↑ +8 this month
											</p>
										</div>
										<div className="rounded-lg border border-background/10 bg-background/5 p-4">
											<p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-background/35">
												Trust Score
											</p>
											<p className="mt-1 text-2xl font-light tracking-tight text-background">
												91
											</p>
											<p className="mt-1 text-xs text-emerald-400">
												↑ +5 this week
											</p>
										</div>
									</div>

									<div className="mt-4 flex h-24 items-end gap-1 rounded-lg border border-background/10 bg-background/5 p-4">
										{DASHBOARD_CHART_BARS.map((bar, index) => {
											const isHigh = bar.height >= 78
											const isMedium = bar.height >= 60 && bar.height < 78

											return (
												<div
													key={`${bar.height}-${index}`}
													className={[
														'flex-1 rounded-sm',
														isHigh
															? 'bg-emerald-400/70'
															: isMedium
															? 'bg-emerald-400/45'
															: 'bg-emerald-400/20',
														bar.heightClass,
													].join(' ')}
													aria-hidden="true"
												/>
											)
										})}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id="story" className="bg-background">
				<div className="mx-auto max-w-[900px] px-6 py-20">
					<p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-warning">
						The Problem
					</p>
					<p className="max-w-[780px] font-serif text-2xl leading-tight tracking-tight sm:text-4xl">
						Your business earns trust every day. But it&apos;s scattered across
						three different platforms.
					</p>

					<div className="mt-6 space-y-4 text-base leading-8 text-muted-foreground sm:text-lg">
						<p>
							Google reviews, Instagram followers, and daily sales data all tell
							the story of a healthy, trusted business — but they live in separate
							apps, separate logins, and separate dashboards.
						</p>
						<p>
							Proof brings all of it into one place. It&apos;s a web-based analytics
							platform built for small brick-and-mortar businesses that want to
							understand their trust signals and act on them from a single, clean
							dashboard.
						</p>
					</div>

					<div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
						<Card className="bg-muted/60">
							<CardHeader>
								<p className="text-2xl" aria-hidden="true">
									📍
								</p>
								<CardTitle className="font-serif text-lg">
									Google Business Analytics
								</CardTitle>
							</CardHeader>
							<CardContent className="pt-0 text-sm leading-7 text-muted-foreground">
								Track your star rating, review count, and profile interaction
								trends — synced from your Google Business Profile.
							</CardContent>
						</Card>

						<Card className="bg-muted/60">
							<CardHeader>
								<p className="text-2xl" aria-hidden="true">
									📱
								</p>
								<CardTitle className="font-serif text-lg">
									Social Growth Tracking
								</CardTitle>
							</CardHeader>
							<CardContent className="pt-0 text-sm leading-7 text-muted-foreground">
								Monitor Instagram follower growth, reach, and engagement trends
								alongside Google data — no tab switching.
							</CardContent>
						</Card>

						<Card className="bg-muted/60">
							<CardHeader>
								<p className="text-2xl" aria-hidden="true">
									💰
								</p>
								<CardTitle className="font-serif text-lg">
									Revenue Impact Signals
								</CardTitle>
							</CardHeader>
							<CardContent className="pt-0 text-sm leading-7 text-muted-foreground">
								Connect your point-of-sale to see how promotions and engagement
								translate into observed revenue — with a weekly Trust Score.
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			<section id="google-data" className="bg-muted/60">
				<div className="mx-auto max-w-[900px] px-6 py-20">
					<p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-warning">
						Google Business Integration
					</p>
					<h2 className="font-serif text-2xl leading-tight tracking-tight sm:text-4xl">
						How Proof uses your Google Business Profile data
					</h2>
					<p className="mt-4 max-w-[780px] text-base leading-8 text-muted-foreground sm:text-lg">
						Proof connects to the Google Business Profile API only after you
						explicitly authorize access via Google OAuth. We request the minimum
						data needed to power your dashboard.
					</p>
					<p className="mt-3 max-w-[780px] text-base leading-8 text-muted-foreground sm:text-lg">
						Here is exactly what we read, and why:
					</p>

					<div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
						{GOOGLE_DATA_POINTS.map((point) => (
							<Card key={point.title} className="bg-background">
								<CardHeader>
									<p className="text-2xl" aria-hidden="true">
										{point.icon}
									</p>
									<CardTitle className="text-base">{point.title}</CardTitle>
								</CardHeader>
								<CardContent className="pt-0 text-sm leading-7 text-muted-foreground">
									{point.body}
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			<section id="how-it-works" className="bg-background">
				<div className="mx-auto max-w-[900px] px-6 py-20">
					<p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-warning">
						Setup & Operation
					</p>
					<h2 className="font-serif text-2xl leading-tight tracking-tight sm:text-4xl">
						Up and running in under five minutes.
					</h2>
					<p className="mt-4 max-w-[780px] text-base leading-8 text-muted-foreground sm:text-lg">
						Proof is built for business owners, not IT teams. No code. No
						configuration. Connect and go.
					</p>

					<div className="mt-10 space-y-8">
						{HOW_IT_WORKS_STEPS.map((step, index) => (
							<div
								key={step.title}
								className="relative grid grid-cols-[2.5rem_1fr] gap-6 pb-8"
							>
								{index !== HOW_IT_WORKS_STEPS.length - 1 && (
									<div
										className="absolute left-5 top-10 h-[calc(100%-2.5rem)] w-px bg-border"
										aria-hidden="true"
									/>
								)}
								<div className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-sm font-semibold text-background">
									{index + 1}
								</div>
								<div>
									<h3 className="pt-2 text-base font-semibold">{step.title}</h3>
									<p className="mt-2 text-sm leading-7 text-muted-foreground sm:text-base">
										{step.body}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<section id="privacy" className="bg-muted/60">
				<div className="mx-auto max-w-[900px] px-6 py-20">
					<p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-warning">
						Data & Privacy
					</p>
					<h2 className="font-serif text-2xl leading-tight tracking-tight sm:text-4xl">
						Minimal data. Maximum transparency.
					</h2>
					<p className="mt-4 max-w-[780px] text-base leading-8 text-muted-foreground sm:text-lg">
						Proof is designed to request only what is necessary, store as little
						as possible, and keep merchants in control at all times.
					</p>

					<div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
						{PRIVACY_CARDS.map((card) => (
							<Card key={card.title} className="bg-background">
								<CardHeader>
									<CardTitle className="text-base">
										<span className="mr-2" aria-hidden="true">
											{card.emoji}
										</span>
										{card.title}
									</CardTitle>
								</CardHeader>
								<CardContent className="pt-0 text-sm leading-7 text-muted-foreground">
									{card.body}
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			<section id="about" className="bg-background">
				<div className="mx-auto max-w-[900px] px-6 py-20">
					<p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-warning">
						About
					</p>
					<h2 className="font-serif text-2xl leading-tight tracking-tight sm:text-4xl">
						Built for the businesses that earned it.
					</h2>

					<div className="mt-6 space-y-4 text-base leading-8 text-muted-foreground sm:text-lg">
						<p>
							Proof is a SaaS analytics platform that helps small brick-and-mortar
							businesses understand and act on their digital trust signals. We&apos;re
							built and operated by Statsnapp Technologies, headquartered in
							Coimbatore, Tamil Nadu, India.
						</p>
						<p>
							We believe independent businesses have already earned the trust of
							their customers. Proof gives them a unified way to see that trust,
							track it over time, and grow it intentionally.
						</p>
						<p>
							Our platform integrates Google Business Profile, Instagram, and
							point-of-sale data into a single web dashboard built for owners who
							want insights in seconds.
						</p>
					</div>

					<div className="mt-10 grid grid-cols-1 gap-5 rounded-lg border border-border bg-muted/60 p-6 text-center sm:grid-cols-3">
						<div>
							<p className="font-serif text-3xl tracking-tight">
								3
							</p>
							<p className="mt-1 text-sm text-muted-foreground">
								Live data integrations
							</p>
						</div>
						<div>
							<p className="font-serif text-3xl tracking-tight">
								Real-time
							</p>
							<p className="mt-1 text-sm text-muted-foreground">Dashboard sync</p>
						</div>
						<div>
							<p className="font-serif text-3xl tracking-tight">
								&lt; 5 min
							</p>
							<p className="mt-1 text-sm text-muted-foreground">
								Average setup time
							</p>
						</div>
					</div>
				</div>
			</section>

			<section id="contact" className="bg-foreground text-background">
				<div className="mx-auto max-w-[900px] px-6 py-20 text-center">
					<p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-warning">
						Get in touch
					</p>
					<h2 className="font-serif text-2xl leading-tight tracking-tight sm:text-4xl">
						Questions about Proof or our data practices?
					</h2>
					<p className="mt-4 text-base leading-8 text-background/60 sm:text-lg">
						We&apos;re happy to speak with API review teams, merchants, or press.
						Reach us directly any time.
					</p>

					<div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-6">
						<a
							href="mailto:hello@withproof.io"
							className="text-warning underline underline-offset-4 decoration-warning/40 transition-colors hover:decoration-warning"
							aria-label="Email hello at withproof.io"
							tabIndex={0}
						>
							hello@withproof.io
						</a>
						<span className="hidden text-background/40 sm:inline" aria-hidden="true">
							·
						</span>
						<a
							href="mailto:privacy@withproof.io"
							className="text-warning underline underline-offset-4 decoration-warning/40 transition-colors hover:decoration-warning"
							aria-label="Email privacy at withproof.io"
							tabIndex={0}
						>
							privacy@withproof.io
						</a>
					</div>

					<div className="mt-10">
						<GetAccessButton variant="swiss-outline" size="lg" />
					</div>
				</div>
			</section>

			<footer className="bg-black py-7 text-center text-xs tracking-wide text-white/35">
				<div className="mx-auto max-w-[900px] px-6">
					<p>
						© 2026 Proof · A product by{' '}
						<a
							href="https://statsnapp.com"
							className="text-white/40 transition-colors hover:text-white/60"
							aria-label="Statsnapp Technologies website"
							tabIndex={0}
						>
							Statsnapp Technologies
						</a>{' '}
						· Coimbatore, Tamil Nadu, India
					</p>
					<p className="mt-2">
						<Link
							href="/privacy"
							className="text-white/40 transition-colors hover:text-white/60"
							aria-label="Privacy Policy"
							tabIndex={0}
						>
							Privacy Policy
						</Link>{' '}
						·{' '}
						<Link
							href="/terms"
							className="text-white/40 transition-colors hover:text-white/60"
							aria-label="Terms of Service"
							tabIndex={0}
						>
							Terms of Service
						</Link>{' '}
						·{' '}
						<a
							href="mailto:hello@withproof.io"
							className="text-white/40 transition-colors hover:text-white/60"
							aria-label="Contact Proof"
							tabIndex={0}
						>
							Contact
						</a>
					</p>
				</div>
			</footer>
		</div>
	)
}
