import type { Metadata } from 'next'
import Link from 'next/link'
import type { ReactNode } from 'react'
import { PrivacyToc } from './privacy-toc'

export const metadata: Metadata = {
	title: 'Privacy Policy — Proof',
	description:
		'Privacy Policy for Proof by Statsnapp Technologies — what data we access and how it is handled.',
}

export default function PrivacyPage() {
	return (
		<div className="min-h-screen bg-bg text-text antialiased">
			<header className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur-[14px]">
				<div className="mx-auto flex h-14 max-w-[960px] items-center justify-between px-5 sm:px-10">
					<Link
						href="/"
						className="font-fraunces text-[18px] font-bold tracking-[-0.01em] text-text"
					>
						Proof<span className="text-gold not-italic">.</span>
					</Link>
					<Link
						href="/"
						className="inline-flex items-center gap-1.5 text-[12px] text-sub transition-colors hover:text-text"
					>
						<svg
							width="14"
							height="14"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="1.8"
							strokeLinecap="round"
							className="opacity-50"
							aria-hidden
						>
							<path d="M19 12H5M12 5l-7 7 7 7" />
						</svg>
						Back to Proof
					</Link>
				</div>
			</header>

			<div className="mx-auto max-w-[960px] border-b border-line px-5 pb-12 pt-14 sm:px-10 sm:pb-12 sm:pt-[72px]">
				<p className="mb-6 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.1em] text-dim before:block before:h-px before:w-4 before:bg-dim">
					Legal
				</p>
				<h1 className="font-fraunces text-[34px] font-bold leading-[1.1] tracking-[-0.03em] sm:text-[48px]">
					Privacy<br />
					<span className="font-light italic text-sub">Policy</span>
				</h1>
				<p className="mt-4 font-mono text-[13px] text-dim">
					Last updated: March 2026 · Statsnapp Technologies
				</p>
				<p className="mt-7 max-w-[580px] text-[15px] leading-[1.75] text-sub">
					Proof is built on a simple principle — we request only what we need,
					store as little as possible, and keep you in control at all times.
					This policy explains exactly what data we collect from each
					integration, how we use it, and your rights over it.
				</p>
			</div>

			<div className="mx-auto grid max-w-[960px] grid-cols-1 gap-0 px-5 pb-24 sm:px-10 lg:grid-cols-[minmax(0,1fr)_200px] lg:gap-14 lg:px-10">
				<main className="min-w-0 pt-10 lg:pt-12">
					<section id="p01" className="mb-14 scroll-mt-28">
						<SectionHeading k="01" title="Who We Are" />
						<div className="text-[14px] leading-[1.8] text-sub [&_p]:mb-3 [&_p:last-child]:mb-0">
							<p>
								<strong className="font-semibold text-text">
									Statsnapp Technologies
								</strong>{' '}
								operates the Proof analytics platform at withproof.io. We are
								headquartered in Coimbatore, Tamil Nadu, India.
							</p>
							<p>
								For any privacy-related questions or data requests, contact us
								directly at{' '}
								<a
									href="mailto:Founder@withproof.io"
									className="text-gold underline underline-offset-2 hover:text-gold/90"
								>
									Founder@withproof.io
								</a>
								. We respond to all enquiries including those from Google&apos;s,
								Meta&apos;s, and Shopify&apos;s review and compliance teams.
							</p>
						</div>
					</section>

					<div className="mb-14 h-px bg-line" role="separator" />

					<section id="p02" className="mb-14 scroll-mt-28">
						<SectionHeading k="02" title="What Data We Collect" />
						<p className="mb-6 text-[14px] leading-[1.8] text-sub">
							Data is only collected when you explicitly authorise a connection
							via that platform&apos;s OAuth flow. We collect three categories of
							data across our integrations.
						</p>

						<p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.06em] text-dim">
							Account Data (all users)
						</p>
						<DataTable
							rows={[
								{
									data: 'Business email address',
									why: 'Used to identify your Proof account and send service notifications',
								},
								{
									data: 'Business name',
									why: 'Used to label your dashboard and confirm the correct profiles are linked',
								},
								{
									data: 'OAuth access tokens',
									why: 'Stored encrypted — used solely to authenticate API requests on your behalf',
								},
							]}
						/>

						<PlatformLabel
							accentClassName="text-gmb"
							iconClassName="bg-gmb/10"
							scope="business.manage · read-only"
							name="Google Business Profile"
							icon={
								<svg
									width="12"
									height="12"
									viewBox="0 0 24 24"
									fill="currentColor"
									className="text-gmb"
									aria-hidden
								>
									<path d="M12 2C8.13 2 5 5.13 5 9c0 3.75 5 9 5 9s5-5.25 5-9c0-2.76-2.24-5-5-5zm0 6.5c-.83 0-1.5-.67-1.5-1.5S11.17 5.5 12 5.5s1.5.67 1.5 1.5S12.83 8.5 12 8.5z" />
								</svg>
							}
						/>
						<DataTable
							rows={[
								{
									data: 'Aggregate star rating',
									why: 'Displayed as your primary trust metric on the dashboard',
								},
								{
									data: 'Total review count',
									why: 'Used to track review milestones and power the celebration tracker',
								},
								{
									data: 'Latest review text',
									why: 'Displayed on your dashboard — shown in real time, not stored after session ends',
								},
								{
									data: 'Reviewer display name',
									why: 'Shown alongside review text for context — not stored after session ends',
								},
								{
									data: 'New review event (via Cloud Pub/Sub)',
									why: 'Google publishes a notification to our Cloud Pub/Sub topic when a new review is posted — we then fetch only that review. We do not poll the API continuously.',
								},
							]}
						/>
						<Callout variant="pubsub">
							<strong className="text-pubsub">How Cloud Pub/Sub works:</strong>{' '}
							When a customer leaves a new Google review, Google publishes a
							message to our registered Cloud Pub/Sub topic (hosted in Google
							Cloud). Our server receives this event and makes a single API call
							to fetch the new review. No data is held in Pub/Sub beyond
							Google&apos;s own transit — we do not store events in the message
							queue.
						</Callout>

						<PlatformLabel
							accentClassName="text-[#c13584]"
							iconClassName="bg-[#c13584]/10"
							scope="Basic Display API · read-only"
							name="Instagram"
							icon={
								<svg
									width="12"
									height="12"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									className="text-[#c13584]"
									aria-hidden
								>
									<rect x="2" y="2" width="20" height="20" rx="5" />
									<circle cx="12" cy="12" r="5" />
									<circle
										cx="17.5"
										cy="6.5"
										r="1"
										fill="currentColor"
										stroke="none"
									/>
								</svg>
							}
						/>
						<DataTable
							rows={[
								{
									data: 'Follower count',
									why: 'Displayed as a social growth metric on the dashboard',
								},
								{
									data: 'Reach (aggregate)',
									why: 'Used to power reach trend charts over 30 / 90 day windows',
								},
								{
									data: 'Impressions (aggregate)',
									why: 'Shown alongside reach to indicate content visibility',
								},
								{
									data: 'Profile visit count',
									why: 'Displayed as an engagement signal',
								},
							]}
						/>

						<PlatformLabel
							accentClassName="text-[#96bf48]"
							iconClassName="bg-[#96bf48]/10"
							scope="Admin API · read-only"
							name="Shopify"
							icon={
								<svg
									width="12"
									height="12"
									viewBox="0 0 24 24"
									fill="currentColor"
									className="text-[#96bf48]"
									aria-hidden
								>
									<path d="M15.5 2.1l-.4 2.8c-.7-.4-1.6-.7-2.6-.7-2.2 0-4 1.8-4 4 0 1.7 1 3.1 2.5 3.8l-.5 3.2c-2.9-1.2-5-4-5-7.3 0-4.4 3.6-8 8-8 .9 0 1.7.1 2.5.4l-.5 1.8z" />
								</svg>
							}
						/>
						<DataTable
							rows={[
								{
									data: 'Daily order count',
									why: 'Used to surface revenue trend signals on the dashboard',
								},
								{
									data: 'Aggregate revenue total',
									why: 'Shown to correlate trust metrics (reviews, followers) with sales trends',
								},
								{
									data: 'Product count',
									why: 'Used to contextualise store activity',
								},
								{
									data: 'Store name & currency',
									why: 'Used to label revenue data correctly on your dashboard',
								},
							]}
						/>
					</section>

					<div className="mb-14 h-px bg-line" role="separator" />

					<section id="p03" className="mb-14 scroll-mt-28">
						<SectionHeading k="03" title="How We Use Your Data" />
						<ul className="list-none">
							<TermsLi>
								To display your trust metrics, review activity, social growth,
								and revenue signals on your Proof dashboard — the sole purpose
								of every data point we collect.
							</TermsLi>
							<TermsLi>
								To send you service notifications (e.g. new review alerts, sync
								errors) via email where you&apos;ve opted in.
							</TermsLi>
							<TermsLi>
								To maintain your account and authenticate your platform
								connections via stored OAuth tokens.
							</TermsLi>
							<TermsLi>
								We do not use your data for advertising, profiling, or any
								purpose beyond operating the dashboard you&apos;ve authorised.
							</TermsLi>
							<TermsLi>
								We do not sell, license, or share your data with any third party
								for their own purposes.
							</TermsLi>
						</ul>
					</section>

					<div className="mb-14 h-px bg-line" role="separator" />

					<section id="p04" className="mb-14 scroll-mt-28">
						<SectionHeading k="04" title="Data Retention" />
						<p className="mb-5 text-[14px] leading-[1.8] text-sub">
							We apply different retention rules depending on the sensitivity of
							the data and how it&apos;s used.
						</p>
						<div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
							<RetCard
								label="Review text & reviewer name"
								value={
									<>
										<strong className="font-medium text-text">
											Not persisted.
										</strong>{' '}
										Displayed in your dashboard session only. Cleared when session
										ends or data refreshes.
									</>
								}
							/>
							<RetCard
								label="Star rating & review count"
								value={
									<>
										<strong className="font-medium text-text">
											Retained while account is active.
										</strong>{' '}
										Deleted within 24 hours of account closure.
									</>
								}
							/>
							<RetCard
								label="Instagram & Shopify aggregates"
								value={
									<>
										<strong className="font-medium text-text">
											Retained to power trend charts.
										</strong>{' '}
										No individual post, order, or customer data stored.
									</>
								}
							/>
							<RetCard
								label="OAuth tokens"
								value={
									<>
										<strong className="font-medium text-text">
											Retained while connected.
										</strong>{' '}
										Deleted immediately upon disconnection or account closure.
									</>
								}
							/>
							<RetCard
								label="Cloud Pub/Sub events (GMB)"
								value={
									<>
										<strong className="font-medium text-text">
											Not stored by Proof.
										</strong>{' '}
										Events are consumed in transit — we fetch the review from the
										API and immediately discard the Pub/Sub message.
									</>
								}
							/>
							<RetCard
								label="Account deletion"
								value={
									<>
										<strong className="font-medium text-text">
											All data deleted within 24 hours
										</strong>{' '}
										of account cancellation or written request.
									</>
								}
							/>
						</div>
					</section>

					<div className="mb-14 h-px bg-line" role="separator" />

					<section id="p05" className="mb-14 scroll-mt-28">
						<SectionHeading k="05" title="How We Collect It" />
						<p className="mb-5 text-[14px] leading-[1.8] text-sub">
							All platform data is collected exclusively via official,
							merchant-authorised OAuth 2.0 flows. Proof employees cannot
							initiate or alter any merchant&apos;s platform authorisation.
						</p>
						<ul className="list-none">
							<TermsLi>
								<strong className="text-gmb font-semibold">
									Google Business Profile
								</strong>{' '}
								— via Google OAuth 2.0 ({' '}
								<code className="rounded bg-surface px-1.5 py-0.5 font-mono text-[11px] text-gold">
									business.manage
								</code>{' '}
								scope, read-only). New review events are received via Google
								Cloud Pub/Sub (My Business Notifications API) — not by polling.
							</TermsLi>
							<TermsLi>
								<strong className="font-semibold text-[#c13584]">
									Instagram
								</strong>{' '}
								— via Meta&apos;s Instagram Basic Display API OAuth flow. Business
								account required.
							</TermsLi>
							<TermsLi>
								<strong className="font-semibold text-[#96bf48]">
									Shopify
								</strong>{' '}
								— via Shopify&apos;s OAuth app install flow using the Admin API with
								read-only orders and products scopes.
							</TermsLi>
						</ul>
					</section>

					<div className="mb-14 h-px bg-line" role="separator" />

					<section id="p06" className="mb-14 scroll-mt-28">
						<SectionHeading k="06" title="What We Never Do" />
						<ul className="list-none">
							<TermsLi>
								Write to, edit, or modify your Google Business Profile,
								Instagram account, or Shopify store in any way.
							</TermsLi>
							<TermsLi>Post, respond to, or flag reviews on your behalf.</TermsLi>
							<TermsLi>
								Access individual customer names, addresses, payment details, or
								any personally identifiable information from Shopify orders.
							</TermsLi>
							<TermsLi>
								Read private Instagram messages, story content, or follower
								identities.
							</TermsLi>
							<TermsLi>
								Store raw review text or reviewer names beyond the active
								dashboard session.
							</TermsLi>
							<TermsLi>
								Share any platform data with third parties for advertising,
								analytics resale, or profiling purposes.
							</TermsLi>
						</ul>
					</section>

					<div className="mb-14 h-px bg-line" role="separator" />

					<section id="p07" className="mb-14 scroll-mt-28">
						<SectionHeading k="07" title="Security" />
						<ul className="list-none">
							<TermsLi>
								All traffic between your browser, our servers, and connected
								platform APIs uses{' '}
								<strong className="font-semibold text-text">
									TLS 1.2 or higher
								</strong>
								.
							</TermsLi>
							<TermsLi>
								OAuth tokens and credentials are{' '}
								<strong className="font-semibold text-text">
									encrypted at rest
								</strong>{' '}
								using industry-standard practices.
							</TermsLi>
							<TermsLi>
								Cloud Pub/Sub communication with Google is secured via
								Google&apos;s own IAM permission system — only our service account (
								<code className="rounded bg-surface px-1.5 py-0.5 font-mono text-[11px] text-gold">
									mybusiness-api-pubsub@system.gserviceaccount.com
								</code>{' '}
								publisher permission) can publish to our topic.
							</TermsLi>
							<TermsLi>
								Access to production systems is restricted to authorised
								Statsnapp Technologies personnel only.
							</TermsLi>
						</ul>
					</section>

					<div className="mb-14 h-px bg-line" role="separator" />

					<section id="p08" className="mb-14 scroll-mt-28">
						<SectionHeading k="08" title="Your Rights" />
						<ul className="list-none">
							<TermsLi>
								<strong className="font-semibold text-text">
									Revoke access anytime.
								</strong>{' '}
								Disconnect any integration from your Proof dashboard, or
								directly via each platform&apos;s settings (Google Account → Security,
								Instagram → Apps and Websites, Shopify Admin → Apps).
							</TermsLi>
							<TermsLi>
								<strong className="font-semibold text-text">
									Request data deletion.
								</strong>{' '}
								Email Founder@withproof.io — all linked data is permanently
								deleted within 24 hours of confirmation.
							</TermsLi>
							<TermsLi>
								<strong className="font-semibold text-text">
									Access your data.
								</strong>{' '}
								Request a summary of what data Proof holds for your account at
								any time.
							</TermsLi>
							<TermsLi>
								<strong className="font-semibold text-text">
									DPDP Act (India).
								</strong>{' '}
								As an Indian-based company, we operate in compliance with
								India&apos;s Digital Personal Data Protection Act, 2023. You have the
								right to access, correct, and erase your personal data.
							</TermsLi>
						</ul>
					</section>

					<div className="mb-14 h-px bg-line" role="separator" />

					<section id="p09" className="mb-14 scroll-mt-28">
						<SectionHeading k="09" title="Third-Party Services" />
						<p className="mb-4 text-[14px] leading-[1.8] text-sub">
							Proof connects to the following third-party platforms. Their own
							privacy policies govern how they handle data on their side:
						</p>
						<ul className="list-none">
							<TermsLi>
								<span className="text-gmb">Google Business Profile API</span> —{' '}
								<a
									href="https://policies.google.com/privacy"
									target="_blank"
									rel="noopener noreferrer"
									className="text-gmb underline underline-offset-[3px] hover:opacity-90"
								>
									Google Privacy Policy
								</a>{' '}
								·{' '}
								<a
									href="https://developers.google.com/my-business/content/terms"
									target="_blank"
									rel="noopener noreferrer"
									className="text-gmb underline underline-offset-[3px] hover:opacity-90"
								>
									GBP API Terms
								</a>
							</TermsLi>
							<TermsLi>
								<span className="text-gmb">Google Cloud Pub/Sub</span> — used
								exclusively for receiving new review event notifications from
								Google&apos;s My Business Notifications API. Governed by{' '}
								<a
									href="https://cloud.google.com/terms/data-processing-terms"
									target="_blank"
									rel="noopener noreferrer"
									className="text-gmb underline underline-offset-[3px] hover:opacity-90"
								>
									Google Cloud Data Processing Terms
								</a>
								.
							</TermsLi>
							<TermsLi>
								<span className="text-[#c13584]">
									Instagram Basic Display API
								</span>{' '}
								—{' '}
								<a
									href="https://privacycenter.instagram.com/policy"
									target="_blank"
									rel="noopener noreferrer"
									className="text-[#c13584] underline underline-offset-[3px] hover:opacity-90"
								>
									Meta Privacy Policy
								</a>
							</TermsLi>
							<TermsLi>
								<span className="text-[#96bf48]">Shopify Admin API</span> —{' '}
								<a
									href="https://www.shopify.com/legal/privacy"
									target="_blank"
									rel="noopener noreferrer"
									className="text-[#96bf48] underline underline-offset-[3px] hover:opacity-90"
								>
									Shopify Privacy Policy
								</a>
							</TermsLi>
						</ul>
					</section>

					<div className="mb-14 h-px bg-line" role="separator" />

					<section id="p10" className="mb-14 scroll-mt-28">
						<SectionHeading k="10" title="Changes to This Policy" />
						<p className="mb-7 text-[14px] leading-[1.8] text-sub">
							We will notify you by email before making material changes to this
							privacy policy. The &quot;Last updated&quot; date at the top of this
							page is updated for all changes. Continued use of Proof after
							notification constitutes acceptance.
						</p>

						<div className="rounded-xl border border-line bg-surface p-5 sm:p-6">
							<p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-dim">
								Also read
							</p>
							<Link
								href="/terms"
								className="inline-flex items-center gap-2 text-[13px] text-sub transition-colors hover:text-text"
							>
								<svg
									width="13"
									height="13"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="1.8"
									aria-hidden
								>
									<rect x="3" y="3" width="18" height="18" rx="3" />
									<path d="M9 12l2 2 4-4" />
								</svg>
								Terms of Service — acceptable use, liability, and platform-specific terms
							</Link>
						</div>

						<div className="mt-4 rounded-xl border border-line bg-surface p-5 sm:p-6">
							<p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-dim">
								Questions or data requests?
							</p>
							<a
								href="mailto:Founder@withproof.io"
								className="text-[13px] text-gold transition-colors hover:text-gold/90"
							>
								Founder@withproof.io
							</a>
							<p className="mt-1 text-[12px] text-dim">
								We respond to all privacy enquiries, data deletion requests, and API review team questions.
							</p>
						</div>
					</section>
				</main>

				<PrivacyToc />
			</div>
		</div>
	)
}

function SectionHeading({ k, title }: { k: string; title: string }) {
	return (
		<div className="mb-5 flex items-center gap-3">
			<span className="font-mono text-[10px] text-dim">{k}</span>
			<h2 className="text-[11px] font-semibold uppercase tracking-[0.07em] text-sub">{title}</h2>
			<span className="h-px flex-1 bg-line" />
		</div>
	)
}

function TermsLi({ children }: { children: ReactNode }) {
	return (
		<li className="flex gap-2.5 border-b border-white/[0.03] py-1.5 text-[14px] leading-relaxed text-sub last:border-b-0">
			<span className="mt-0.5 flex-shrink-0 font-mono text-[12px] text-dim">
				—
			</span>
			<span>{children}</span>
		</li>
	)
}

function DataTable({ rows }: { rows: { data: string; why: string }[] }) {
	return (
		<div className="my-4 overflow-hidden rounded-xl border border-line bg-surface">
			<div className="grid grid-cols-1 gap-0 border-b border-line px-4 py-3 sm:grid-cols-[38%_1fr]">
				<p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-dim">
					Data
				</p>
				<p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-dim sm:mt-0 sm:text-right">
					Why we collect it
				</p>
			</div>
			{rows.map((row) => (
				<div
					key={`${row.data}-${row.why}`}
					className="group grid grid-cols-1 gap-0 border-b border-white/[0.03] px-4 py-3 transition-colors hover:bg-white/[0.015] sm:grid-cols-[38%_1fr] sm:items-start"
				>
					<p className="text-[13px] font-medium text-text sm:whitespace-nowrap">
						{row.data}
					</p>
					<p className="mt-1 text-[13px] leading-relaxed text-sub sm:mt-0 sm:text-right">
						{row.why}
					</p>
				</div>
			))}
		</div>
	)
}

function PlatformLabel({
	icon,
	name,
	scope,
	iconClassName,
	accentClassName,
}: {
	icon: ReactNode
	name: string
	scope: string
	iconClassName: string
	accentClassName: string
}) {
	return (
		<div className="mt-6 flex items-center gap-2.5 border-b border-line pb-2.5">
			<div
				className={`flex h-[26px] w-[26px] flex-shrink-0 items-center justify-center rounded-[7px] ${iconClassName}`}
			>
				{icon}
			</div>
			<p className={`text-[13px] font-semibold ${accentClassName}`}>{name}</p>
			<p className="ml-auto font-mono text-[11px] text-dim">{scope}</p>
		</div>
	)
}

function Callout({
	children,
	variant,
}: {
	children: ReactNode
	variant: 'pubsub'
}) {
	const styles = {
		pubsub: 'border-pubsub/30 bg-pubsub/5 text-sub',
	} as const

	return (
		<div className={`mt-4 rounded-r-[10px] border-l-2 px-4 py-3 text-[13px] leading-[1.7] ${styles[variant]}`}>
			{children}
		</div>
	)
}

function RetCard({ label, value }: { label: string; value: ReactNode }) {
	return (
		<div className="rounded-[10px] border border-line bg-surface px-4 py-3.5">
			<p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.08em] text-dim">
				{label}
			</p>
			<p className="text-[13px] leading-relaxed text-sub">{value}</p>
		</div>
	)
}