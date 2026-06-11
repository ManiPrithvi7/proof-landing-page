import type { Metadata } from 'next'
import Link from 'next/link'
import type { ReactNode } from 'react'
import { LegalPageHeader } from '@/components/legal/legal-page-header'
import { getDashboardUrl } from '@/lib/urls'
import { CopyEmailButton } from './copy-email-button'

const DELETION_EMAIL = 'Founder@withproof.io'
const MAILTO_SUBJECT = 'Data Deletion Request — [your registered email]'

export const metadata: Metadata = {
	title: 'Request Data Deletion — Proof',
	description:
		'How to delete your Proof account data and revoke connected platform access.',
}

export default function DeleteDataPage() {
	const mailtoHref = `mailto:${DELETION_EMAIL}?subject=${encodeURIComponent(MAILTO_SUBJECT)}`
	const dashboardUrl = getDashboardUrl()

	return (
		<div className="min-h-screen bg-bg text-text antialiased">
			<LegalPageHeader />

			<div className="mx-auto max-w-[960px] border-b border-line px-5 pb-12 pt-14 sm:px-10 sm:pb-12 sm:pt-[72px]">
				<p className="mb-6 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.1em] text-dim before:block before:h-px before:w-4 before:bg-dim">
					Legal
				</p>
				<h1 className="font-fraunces text-[34px] font-bold leading-[1.1] tracking-[-0.03em] sm:text-[48px]">
					Request Data
					<br />
					<span className="font-light italic text-sub">Deletion</span>
				</h1>
				<p className="mt-4 font-mono text-[13px] text-dim">
					Last updated: March 2026 · Statsnapp Technologies
				</p>
				<p className="mt-7 max-w-[580px] text-[15px] leading-[1.75] text-sub">
					You can delete all data Proof holds about your account and connected
					platforms at any time. Follow the steps below — most disconnections
					take effect immediately; full account erasure is confirmed by email
					within 1–2 business days.
				</p>
			</div>

			<main className="mx-auto max-w-[960px] px-5 pb-24 pt-10 sm:px-10 sm:pt-12">
				<section className="mb-14">
					<SectionHeading k="01" title="Delete Your Data" />
					<ol className="list-none space-y-6">
						<Step n={1} title="Disconnect integrations in Proof">
							Open your Proof dashboard at{' '}
							<a
								href={dashboardUrl}
								className="text-gold underline underline-offset-2 hover:text-gold/90"
								target="_blank"
								rel="noopener noreferrer"
							>
								{dashboardUrl.replace(/^https?:\/\//, '')}
							</a>{' '}
							→ <strong className="font-semibold text-text">Settings</strong> →{' '}
							<strong className="font-semibold text-text">Integrations</strong> →{' '}
							<strong className="font-semibold text-text">Remove</strong> for each
							connected platform. OAuth tokens are deleted immediately upon
							disconnection.
						</Step>
						<Step n={2} title="Revoke access on each platform">
							<p className="mb-4">
								Even after disconnecting in Proof, you can revoke our access
								directly with each provider:
							</p>
							<ul className="list-none space-y-3">
								<RevokeItem
									platform="Instagram"
									accent="text-[#c13584]"
									path="Instagram app → Menu (☰) → Settings and privacy → Website permissions → Apps and websites → Active → Remove Proof"
								/>
								<RevokeItem
									platform="Google"
									accent="text-gmb"
									path="Google Account → Security → Third-party apps with account access → Remove Proof"
								/>
								<RevokeItem
									platform="Shopify"
									accent="text-[#96bf48]"
									path="Shopify Admin → Settings → Apps and sales channels → Remove Proof"
								/>
							</ul>
						</Step>
						<Step n={3} title="Request full account erasure">
							<p className="mb-4">
								To permanently delete all remaining data linked to your Proof
								account (including aggregate trend data), email us from your
								registered address:
							</p>
							<div className="rounded-xl border border-line bg-surface p-5 sm:p-6">
								<div className="flex flex-wrap items-center gap-3">
									<a
										href={mailtoHref}
										className="text-[15px] font-medium text-gold underline underline-offset-2 hover:text-gold/90"
									>
										{DELETION_EMAIL}
									</a>
									<CopyEmailButton />
								</div>
								<p className="mt-3 text-[12px] text-dim">
									Suggested subject line:{' '}
									<code className="rounded bg-bg px-1.5 py-0.5 font-mono text-[11px] text-sub">
										{MAILTO_SUBJECT}
									</code>
								</p>
							</div>
						</Step>
						<Step n={4} title="Stop Proof device updates (if applicable)">
							If you use or plan to use a Proof device: disconnect integrations in
							your dashboard (Step 1) to stop server-side updates—the device will
							stop receiving updates and return to its default idle screen.
							Power-cycling the device clears volatile on-device aggregate data
							immediately.
						</Step>
					</ol>
				</section>

				<div className="mb-14 h-px bg-line" role="separator" />

				<section className="mb-14">
					<SectionHeading k="02" title="What Happens Next" />
					<ul className="list-none">
						<Bullet>
							We confirm your request by email, usually within one business day.
						</Bullet>
						<Bullet>
							All data linked to your account is permanently deleted within{' '}
							<strong className="font-semibold text-text">
								1–2 business days
							</strong>{' '}
							of confirmation.
						</Bullet>
						<Bullet>
							You will receive a{' '}
							<strong className="font-semibold text-text">
								confirmation email
							</strong>{' '}
							once deletion is complete.
						</Bullet>
						<Bullet>
							If you do not hear back within 48 hours, follow up at{' '}
							<a
								href={mailtoHref}
								className="text-gold underline underline-offset-2 hover:text-gold/90"
							>
								{DELETION_EMAIL}
							</a>
							.
						</Bullet>
					</ul>
					<div className="mt-6 rounded-r-[10px] border-l-2 border-gold/40 bg-gold/5 px-4 py-3 text-[13px] leading-[1.7] text-sub">
						<strong className="font-semibold text-text">Note:</strong>{' '}
						Disconnecting an integration from Proof immediately deletes its OAuth
						tokens. Aggregate trend data stored for charts is removed within 1–2
						business days of a confirmed written deletion request.
					</div>
				</section>

				<div className="mb-14 h-px bg-line" role="separator" />

				<section>
					<SectionHeading k="03" title="Related Policies" />
					<div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
						<RelatedLink
							href="/privacy#p08"
							title="Privacy Policy"
							description="Your rights — access, correction, and deletion"
						/>
						<RelatedLink
							href="/terms#s06"
							title="Terms of Service"
							description="Termination and data deletion on account closure"
						/>
					</div>
					<div className="mt-4 rounded-xl border border-line bg-surface p-5 sm:p-6">
						<p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-dim">
							Questions?
						</p>
						<a
							href={mailtoHref}
							className="text-[13px] text-gold transition-colors hover:text-gold/90"
						>
							{DELETION_EMAIL}
						</a>
						<p className="mt-1 text-[12px] text-dim">
							We respond to all data deletion requests and Meta API review team
							enquiries.
						</p>
					</div>
				</section>
			</main>

			<footer className="border-t border-line">
				<div className="mx-auto flex max-w-[960px] flex-col flex-wrap items-start justify-between gap-3 px-5 py-8 sm:flex-row sm:items-center sm:px-10">
					<p className="text-[12px] text-dim">
						© 2026 Proof · Statsnapp Technologies · Coimbatore, India
					</p>
					<div className="flex flex-wrap gap-5">
						<Link
							href="/privacy"
							className="text-[12px] text-dim transition-colors hover:text-sub"
						>
							Privacy Policy
						</Link>
						<Link
							href="/terms"
							className="text-[12px] text-dim transition-colors hover:text-sub"
						>
							Terms of Service
						</Link>
						<span className="text-[12px] text-sub">Data Deletion</span>
						<a
							href={mailtoHref}
							className="text-[12px] text-dim transition-colors hover:text-sub"
						>
							Contact
						</a>
					</div>
				</div>
			</footer>
		</div>
	)
}

function SectionHeading({ k, title }: { k: string; title: string }) {
	return (
		<div className="mb-5 flex items-center gap-3">
			<span className="font-mono text-[10px] text-dim">{k}</span>
			<h2 className="text-[11px] font-semibold uppercase tracking-[0.07em] text-sub">
				{title}
			</h2>
			<span className="h-px flex-1 bg-line" />
		</div>
	)
}

function Step({
	n,
	title,
	children,
}: {
	n: number
	title: string
	children: ReactNode
}) {
	return (
		<li className="flex gap-4">
			<span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-line bg-surface font-mono text-[12px] text-dim">
				{n}
			</span>
			<div className="min-w-0 flex-1">
				<h3 className="mb-2 text-[14px] font-semibold text-text">{title}</h3>
				<div className="text-[14px] leading-[1.8] text-sub">{children}</div>
			</div>
		</li>
	)
}

function RevokeItem({
	platform,
	accent,
	path,
}: {
	platform: string
	accent: string
	path: string
}) {
	return (
		<li className="rounded-[10px] border border-line bg-surface px-4 py-3">
			<p className={`mb-1 text-[12px] font-semibold ${accent}`}>{platform}</p>
			<p className="text-[13px] leading-relaxed text-sub">{path}</p>
		</li>
	)
}

function Bullet({ children }: { children: ReactNode }) {
	return (
		<li className="flex gap-2.5 border-b border-white/[0.03] py-2 text-[14px] leading-relaxed text-sub last:border-b-0">
			<span className="mt-0.5 flex-shrink-0 font-mono text-[12px] text-dim">
				—
			</span>
			<span>{children}</span>
		</li>
	)
}

function RelatedLink({
	href,
	title,
	description,
}: {
	href: string
	title: string
	description: string
}) {
	return (
		<Link
			href={href}
			className="block rounded-xl border border-line bg-surface p-5 transition-colors hover:border-white/10"
		>
			<p className="text-[13px] font-semibold text-text">{title}</p>
			<p className="mt-1 text-[12px] leading-relaxed text-dim">{description}</p>
		</Link>
	)
}
