import type { Metadata } from 'next'
import Link from 'next/link'
import type { ReactNode } from 'react'
import { LegalPageHeader } from '@/components/legal/legal-page-header'
import { TermsToc } from './terms-toc'

export const metadata: Metadata = {
	title: 'Terms of Service — Proof',
	description:
		'Terms of Service for Proof by Statsnapp Technologies — integrations, acceptable use, and liability.',
}

export default function TermsPage() {
	return (
		<div className="min-h-screen bg-bg text-text antialiased">
			<LegalPageHeader />

			<div className="mx-auto max-w-[960px] border-b border-line px-5 pb-12 pt-14 sm:px-10 sm:pb-12 sm:pt-[72px]">
				<p className="mb-6 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.1em] text-dim before:block before:h-px before:w-4 before:bg-dim">
					Legal
				</p>
				<h1 className="font-fraunces text-[34px] font-bold leading-[1.1] tracking-[-0.03em] sm:text-[48px]">
					Terms of{' '}
					<span className="font-light italic text-sub">Service</span>
				</h1>
				<p className="mt-4 font-mono text-[13px] text-dim">
					Last updated: March 2026 · Statsnapp Technologies
				</p>
				<p className="mt-7 max-w-[580px] text-[15px] leading-[1.75] text-sub">
					By creating a Proof account and connecting any of the integrations
					below, you agree to these terms. They cover your rights, our
					responsibilities, and how each connected platform&apos;s data is
					handled. Written to be clear — please read before using the service.
				</p>
				<div className="mt-7 flex flex-wrap items-center gap-2">
					<IntegrationBadge variant="gmb">
						<svg
							width="9"
							height="9"
							viewBox="0 0 24 24"
							fill="currentColor"
							aria-hidden
						>
							<path d="M12 2C8.13 2 5 5.13 5 9c0 3.75 5 9 5 9s5-5.25 5-9c0-2.76-2.24-5-5-5zm0 6.5c-.83 0-1.5-.67-1.5-1.5S11.17 5.5 12 5.5s1.5.67 1.5 1.5S12.83 8.5 12 8.5z" />
						</svg>
						Google Business Profile
					</IntegrationBadge>
					<IntegrationBadge variant="insta">
						<svg
							width="9"
							height="9"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							aria-hidden
						>
							<rect x="2" y="2" width="20" height="20" rx="5" />
							<circle cx="12" cy="12" r="5" />
							<circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
						</svg>
						Instagram
					</IntegrationBadge>
					<IntegrationBadge variant="shop">
						<svg
							width="9"
							height="9"
							viewBox="0 0 24 24"
							fill="currentColor"
							aria-hidden
						>
							<path d="M15.5 2.1l-.4 2.8c-.7-.4-1.6-.7-2.6-.7-2.2 0-4 1.8-4 4 0 1.7 1 3.1 2.5 3.8l-.5 3.2c-2.9-1.2-5-4-5-7.3 0-4.4 3.6-8 8-8 .9 0 1.7.1 2.5.4l-.5 1.8z" />
						</svg>
						Shopify
					</IntegrationBadge>
					<IntegrationBadge variant="square">
						<svg
							width="9"
							height="9"
							viewBox="0 0 24 24"
							fill="currentColor"
							aria-hidden
						>
							<rect x="3" y="3" width="18" height="18" rx="4" />
						</svg>
						Square
					</IntegrationBadge>
				</div>
			</div>

			<div className="mx-auto grid max-w-[960px] grid-cols-1 gap-0 px-5 pb-24 sm:px-10 lg:grid-cols-[minmax(0,1fr)_200px] lg:gap-14 lg:px-10">
				<main className="min-w-0 pt-10 lg:pt-12">
					<section id="s01" className="mb-14 scroll-mt-28">
						<SectionHeading k="01" title="What Proof Is" />
						<div className="text-[13px] leading-[1.8] text-sub [&_p]:mb-3 [&_p:last-child]:mb-0">
							<p>
								Proof is a read-only analytics dashboard for local
								brick-and-mortar businesses. It connects to your Google Business
								Profile, Instagram account, Shopify store, or Square POS — and
								surfaces trust signals, review activity, social growth, revenue
								data, and campaign redemption metrics in a single unified
								dashboard.
							</p>
							<p>
								Proof is an independent product built and operated by{' '}
								<strong className="font-semibold text-text">
									Statsnapp Technologies
								</strong>
								, headquartered in Coimbatore, Tamil Nadu, India. We are not
								affiliated with, endorsed by, or officially connected to
								Google LLC, Meta Platforms Inc., Shopify Inc., or Block, Inc.
								(Square).
							</p>
						</div>
						<CalloutNote>
							<strong className="text-gold">Proof device (in development):</strong>{' '}
							We are developing a physical Proof device that will display aggregate
							trust metrics (e.g. Google star rating, review count, Instagram follower
							count) in your business premises via secure MQTT over TLS.{' '}
							<strong className="font-semibold text-text">
								When available, device-specific terms will be added to this page.
							</strong>{' '}
							The sections below describing device data flow are provided for
							transparency and apply only if you choose to enable this hardware.
						</CalloutNote>
					</section>

					<div className="mb-14 h-px bg-line" role="separator" />

					<section id="s02" className="mb-14 scroll-mt-28">
						<SectionHeading k="02" title="Integration Terms" />
						<p className="mb-5 text-[13px] leading-[1.8] text-sub">
							Each connected platform has its own data access scope. Here is
							exactly what Proof reads, processes, and writes for each
							integration, and what we never do.
						</p>
						<IntegrationBlock variant="gmb">
							<IntRow
								k="What we read"
								v="Aggregate star rating, total review count, latest review text, reviewer display name. New review events are received via Google Cloud Pub/Sub."
							/>
							<IntRow
								k="How we use it"
								v="Displayed on your Proof dashboard in real time. When a new review is posted, Google publishes an event to our Cloud Pub/Sub topic — we then fetch only that review. We do not poll the API continuously."
							/>
							<IntRow
								k="Retention"
								v="Review text and reviewer name are not persisted after your dashboard session. Star rating and review count are retained while your account is active."
							/>
							<IntRow
								k="We never"
								v="Write to your GBP, post or respond to reviews, edit your listing, or access any data beyond the fields listed above."
							/>
							<IntRow
								k="Revoke"
								v="Disconnect at any time from your Proof dashboard or via Google Account → Security → Third-party access."
							/>
							<IntRow
								k="Google API Limited Use"
								v="Proof's use and transfer of information received from Google APIs to any other app will adhere to Google API Services User Data Policy, including the Limited Use requirements. We do not use Google user data to serve advertisements, train AI/machine learning models, or transfer data to third-party networks for tracking purposes."
							/>
						</IntegrationBlock>
						<IntegrationBlock variant="insta">
							<IntRow
								k="What we read"
								v="Follower count, reach metrics (aggregate), post impressions (aggregate), profile visit count"
							/>
							<IntRow
								k="How we use it"
								v="Displayed on your Proof dashboard as social growth signals — follower trends, reach over time, and engagement overview alongside your Google data."
							/>
							<IntRow
								k="Retention"
								v="Aggregate metrics are retained to power trend charts. No individual post content, captions, media, or DMs are accessed or stored."
							/>
							<IntRow
								k="We never"
								v="Post on your behalf, read private messages, access follower identities, or store any media content from your account."
							/>
							<IntRow
								k="Revoke"
								v="Disconnect from your Proof dashboard or via Instagram app → Menu → Settings and privacy → Website permissions → Apps and websites → Active → Remove Proof."
							/>
						</IntegrationBlock>
						<CalloutNote>
							<strong className="text-gold">Instagram account type:</strong>{' '}
							Requires an Instagram Professional Account (Business or Creator).
							Consumer/Personal accounts are not supported by Meta&apos;s active API
							framework. We connect via the Instagram Graph API and access only
							aggregate metrics available through that API.
						</CalloutNote>
						<IntegrationBlock variant="shop">
							<IntRow
								k="Scopes"
								v="read_products, read_orders, write_discounts"
							/>
							<IntRow
								k="Webhook"
								v="/api/pos-promotions/webhooks/shopify — permanent real-time subscription to Shopify's orders/paid event loop"
							/>
							<IntRow
								k="What we collect"
								v="Store metadata, product catalog lines, transaction totals, and merchant-triggered discount criteria"
							/>
							<IntRow
								k="How we use it"
								v="Product parameters are referenced in your dashboard campaign creation wizard to target specific collections. Order entries and real-time transaction webhooks maintain aggregate daily store revenue graphs and immediately register successful discount code redemptions. This verification layer guarantees that promotion metrics pushed to your physical in-store Proof display are derived exclusively from verified, settled payments."
							/>
							<IntRow
								k="What we write"
								v="Merchant-triggered discount codes via GraphQL write_discounts — created and deactivated only when you launch or end a campaign from your dashboard"
							/>
							<IntRow
								k="Retention"
								v="Aggregate revenue totals and order counts are retained to power trend charts. No customer names, addresses, payment details, or individual order data are stored."
							/>
							<IntRow
								k="We never"
								v="Create or modify orders or products, access customer personal data, process payments, or use write operations outside merchant-initiated campaigns"
							/>
							<IntRow
								k="Revoke"
								v="Disconnect from your Proof dashboard or via Shopify Admin → Apps → Proof → Delete."
							/>
							<IntRow
								k="Shopify compliance"
								v="We fully integrate with Shopify's mandatory privacy webhooks (customers/data_request, customers/redact, and shop/redact). Upon receiving a data deletion request or app uninstallation event directly from Shopify's webhooks dashboard, our systems automatically trigger a permanent erasure sequence of linked store metadata within 48 hours."
							/>
						</IntegrationBlock>
						<IntegrationBlock variant="square">
							<IntRow
								k="Scopes"
								v="MERCHANT_PROFILE_READ, ORDERS_READ, ITEMS_READ, ITEMS_WRITE, INVOICES_READ"
							/>
							<IntRow
								k="Webhook"
								v="/api/pos-promotions/webhooks/square — listens for invoice.payment_made and payment events against issued business invoices"
							/>
							<IntRow
								k="What we collect"
								v="Store profile data, transactional order metadata, Catalog discount items, and Invoice status records"
							/>
							<IntRow
								k="How we use it"
								v="To read basic transaction metadata for store trend analytics, to construct requested DISCOUNT catalog records, and to explicitly verify when a digital invoice has been fully paid. This prevents unpaid or pending invoices from incorrectly inflating the verified discount redemption metrics displayed on your physical in-store Proof device."
							/>
							<IntRow
								k="What we write"
								v="DISCOUNT catalog objects (ITEMS_WRITE) when you explicitly request a campaign discount from your dashboard"
							/>
							<IntRow
								k="Retention"
								v="Aggregate transaction totals and redemption counts are retained to power trend charts. No customer names, payment card details, or individual invoice recipient data are stored."
							/>
							<IntRow
								k="We never"
								v="Process payments, modify orders outside merchant-initiated campaigns, or count unpaid or pending invoices as verified redemptions"
							/>
							<IntRow
								k="Revoke"
								v="Disconnect from your Proof dashboard or via Square Seller Dashboard → Apps → Proof → Disconnect."
							/>
						</IntegrationBlock>
						<CalloutNote>
							<strong className="text-gold">Proof device (in development):</strong>{' '}
							When available, aggregate metrics from connected platforms may be shown
							on the Proof device at your business premises. Only aggregate numbers
							are displayed—no review text, post content, or personal data. See §01
							for development status. You are responsible for device placement and
							ensuring in-store display complies with your local rules.
						</CalloutNote>
					</section>

					<div className="mb-14 h-px bg-line" role="separator" />

					<section id="s03" className="mb-14 scroll-mt-28">
						<SectionHeading k="03" title="Acceptable Use" />
						<ul className="list-none">
							<TermsLi>
								<strong className="font-semibold text-text">
									Age requirement.
								</strong>{' '}
								By creating a Proof account, you represent that you are at least
								13 years old and, if under 18, have parental or guardian consent
								to use this service. Proof is designed for business use. We do
								not knowingly collect data from children under 13.
							</TermsLi>
							<TermsLi>
								<strong className="font-semibold text-text">
									No data resale.
								</strong>{' '}
								We do not sell, rent, or license your platform data to any third
								party.
							</TermsLi>
							<TermsLi>
								<strong className="font-semibold text-text">
									One business per account.
								</strong>{' '}
								Each Proof account may be connected to a single set of
								integrations (one GBP, one Instagram, one Shopify, one Square).
								Multi-location support is on the roadmap.
							</TermsLi>
							<TermsLi>
								<strong className="font-semibold text-text">
									Authorised owner only.
								</strong>{' '}
								You must be the verified owner or authorised manager of any
								platform you connect. Connecting a profile, page, or store you
								do not have rights to manage is a violation of these terms.
							</TermsLi>
							<TermsLi>
								<strong className="font-semibold text-text">
									No automated abuse.
								</strong>{' '}
								You may not use Proof or its integrations to scrape, clone,
								redistribute, or resell data from Google, Meta, Shopify, or
								Square in bulk or in any form not intended by this service.
							</TermsLi>
							<TermsLi>
								<strong className="font-semibold text-text">
									Third-party platform compliance.
								</strong>{' '}
								Your use of each integration must also comply with
								Google&apos;s, Meta&apos;s, Shopify&apos;s, and Square&apos;s own
								terms of service. Proof does not grant rights beyond what each
								permits.
							</TermsLi>
							<TermsLi>
								<strong className="font-semibold text-text">
									Device responsibility.
								</strong>{' '}
								Physical security and placement of any Proof device at your
								location. You are responsible for third-party visibility of
								aggregate metrics in the store.
							</TermsLi>
						</ul>
					</section>

					<div className="mb-14 h-px bg-line" role="separator" />

					<section id="s04" className="mb-14 scroll-mt-28">
						<SectionHeading k="04" title="Data Accuracy" />
						<p className="mb-5 text-[13px] leading-[1.8] text-sub">
							Proof displays data exactly as received from each connected
							platform&apos;s API. We apply no modifications, corrections, or
							editorial judgement to the data.
						</p>
						<CalloutNote>
							<strong className="text-gold">Important:</strong> We are not
							responsible for discrepancies, delays, or inaccuracies in data
							originating from Google&apos;s, Meta&apos;s, Shopify&apos;s, or
							Square&apos;s systems. If your review count, follower number, or
							revenue figure appears incorrect, the source of truth is the
							respective platform
							directly.
						</CalloutNote>
					</section>

					<div className="mb-14 h-px bg-line" role="separator" />

					<section id="s05" className="mb-14 scroll-mt-28">
						<SectionHeading k="05" title="Service Availability" />
						<ul className="list-none">
							<TermsLi>
								While we strive for high availability, Proof is provided without
								guaranteed uptime during its current development phase.
							</TermsLi>
							<TermsLi>
								Downtime may occur due to changes in Google, Meta, Shopify, or
								Square APIs, scheduled maintenance, or infrastructure issues.
							</TermsLi>
							<TermsLi>
								We will communicate planned downtime via email where possible.
							</TermsLi>
							<TermsLi>
								API changes by any connected platform may temporarily affect
								dashboard data until Proof is updated to reflect those changes.
							</TermsLi>
							<TermsLi>
								If any connected platform discontinues its API or changes terms
								in a way that prevents Proof from functioning, we are not liable.
								We will notify affected users by email and provide options to
								export or delete their data via{' '}
								<Link
									href="/delete-data"
									className="text-gold underline underline-offset-2 hover:text-gold/90"
								>
									/delete-data
								</Link>
								.
							</TermsLi>
						</ul>
					</section>

					<div className="mb-14 h-px bg-line" role="separator" />

					<section id="s06" className="mb-14 scroll-mt-28">
						<SectionHeading k="06" title="Termination" />
						<div className="text-[13px] leading-[1.8] text-sub [&_p]:mb-3 [&_p:last-child]:mb-0">
							<p>
								<strong className="font-semibold text-text">Cancel anytime.</strong>{' '}
								No lock-in. Disconnect any integration from your Proof dashboard
								at any time. All platform-specific access is revoked immediately
								upon disconnection.
							</p>
							<p>
								<strong className="font-semibold text-text">Data deletion.</strong>{' '}
								All data linked to your account is permanently deleted within 1–2
								business days of account closure or upon written request. See our{' '}
								<Link
									href="/delete-data"
									className="text-gold underline underline-offset-2 hover:text-gold/90"
								>
									Data Deletion Instructions
								</Link>{' '}
								or email{' '}
								<a
									href="mailto:Founder@withproof.io"
									className="text-teal underline underline-offset-2 hover:text-green"
								>
									Founder@withproof.io
								</a>
								. You will receive a confirmation email once deletion is complete.
							</p>
							<p>
								<strong className="font-semibold text-text">
									Proof device data.
								</strong>{' '}
								Aggregate metrics are held in device memory only (volatile; clears
								on power cycle). No server-side logs of device transmissions are
								retained beyond real-time delivery, unless temporarily enabled for
								debugging—in which case logs are purged within 7 days. No OAuth
								tokens are stored on the device. Upon the disconnection of any
								platform integration or total account cancellation, our servers
								immediately terminate the MQTT broadcast stream for that metric,
								causing the physical display to safely clear or obscure that data
								point on its next automated sync interval.
							</p>
							<p>
								<strong className="font-semibold text-text">
									Our right to terminate.
								</strong>{' '}
								We reserve the right to suspend accounts that violate these
								terms or the terms of any connected platform, with notice where
								practical.
							</p>
						</div>
					</section>

					<div className="mb-14 h-px bg-line" role="separator" />

					<section id="s07" className="mb-14 scroll-mt-28">
						<SectionHeading k="07" title="Limitation of Liability" />
						<p className="mb-4 text-[13px] leading-[1.8] text-sub">
							Proof is an informational dashboard. To the maximum extent
							permitted by applicable law:
						</p>
						<ul className="list-none">
							<TermsLi>
								Statsnapp Technologies is not liable for any business
								decisions, losses, or outcomes resulting from use of — or reliance
								on — data displayed in Proof.
							</TermsLi>
							<TermsLi>
								Our total liability to you for any claim arising from your use
								of Proof is limited to the amount you paid us in the 3 months
								preceding the claim, or ₹500, whichever is greater.
							</TermsLi>
							<TermsLi>
								We are not liable for indirect, incidental, special, or
								consequential damages of any kind.
							</TermsLi>
							<TermsLi>
								We are not liable for any disruption to your connected platforms
								(Google, Instagram, Shopify, Square) caused by changes to their
								own APIs or policies.
							</TermsLi>
							<TermsLi>
								We are not liable for aggregate data visible on Proof devices to
								customers, employees, or others on your premises; choosing to
								display metrics publicly is your decision.
							</TermsLi>
						</ul>
					</section>

					<div className="mb-14 h-px bg-line" role="separator" />

					<section id="s08" className="mb-14 scroll-mt-28">
						<SectionHeading k="08" title="Intellectual Property" />
						<div className="text-[13px] leading-[1.8] text-sub [&_p]:mb-3 [&_p:last-child]:mb-0">
							<p>
								All Proof branding, software, and dashboard design are owned by
								Statsnapp Technologies. Dashboard data originates from Google,
								Meta, Shopify, and Square and is shown under your authorization.
							</p>
							<p>
								You may share your own dashboard data; you may not reproduce
								Proof&apos;s software or branding without written permission.
							</p>
						</div>
					</section>

					<div className="mb-14 h-px bg-line" role="separator" />

					<section id="s09" className="mb-14 scroll-mt-28">
						<SectionHeading k="09" title="Third-Party Platforms" />
						<p className="mb-4 text-[13px] leading-[1.8] text-sub">
							By connecting any integration, you acknowledge that your use of
							that platform&apos;s data is also subject to their own terms and
							privacy policies:
						</p>
						<ul className="list-none">
							<TermsLi>
								<span className="text-gmb">Google Business Profile</span> —
								subject to{' '}
								<a
									href="https://policies.google.com/terms"
									target="_blank"
									rel="noopener noreferrer"
									className="text-gmb underline underline-offset-[3px] hover:opacity-90"
								>
									Google&apos;s Terms of Service
								</a>{' '}
								and the{' '}
								<a
									href="https://developers.google.com/my-business/content/terms"
									target="_blank"
									rel="noopener noreferrer"
									className="text-gmb underline underline-offset-[3px] hover:opacity-90"
								>
									Google Business Profile API Terms
								</a>
								.
							</TermsLi>
							<TermsLi>
								<span className="text-[#c13584]">Instagram</span> — subject to{' '}
								<a
									href="https://help.instagram.com/581066165581870"
									target="_blank"
									rel="noopener noreferrer"
									className="text-[#c13584] underline underline-offset-[3px] hover:opacity-90"
								>
									Meta&apos;s Terms of Service
								</a>{' '}
								and the{' '}
								<a
									href="https://developers.facebook.com/terms"
									target="_blank"
									rel="noopener noreferrer"
									className="text-[#c13584] underline underline-offset-[3px] hover:opacity-90"
								>
									Meta Platform Terms
								</a>
								.
							</TermsLi>
							<TermsLi>
								<span className="text-[#96bf48]">Shopify</span> — subject to{' '}
								<a
									href="https://www.shopify.com/legal/terms"
									target="_blank"
									rel="noopener noreferrer"
									className="text-[#96bf48] underline underline-offset-[3px] hover:opacity-90"
								>
									Shopify&apos;s Terms of Service
								</a>{' '}
								and the{' '}
								<a
									href="https://www.shopify.com/legal/api-terms"
									target="_blank"
									rel="noopener noreferrer"
									className="text-[#96bf48] underline underline-offset-[3px] hover:opacity-90"
								>
									Shopify API Terms
								</a>
								.
							</TermsLi>
							<TermsLi>
								<span className="text-[#006AFF]">Square</span> — subject to{' '}
								<a
									href="https://squareup.com/us/en/legal/general/ua"
									target="_blank"
									rel="noopener noreferrer"
									className="text-[#006AFF] underline underline-offset-[3px] hover:opacity-90"
								>
									Square General Terms of Service
								</a>{' '}
								and the{' '}
								<a
									href="https://developer.squareup.com/docs/home"
									target="_blank"
									rel="noopener noreferrer"
									className="text-[#006AFF] underline underline-offset-[3px] hover:opacity-90"
								>
									Square Developer Terms
								</a>
								.
							</TermsLi>
						</ul>
					</section>

					<div className="mb-14 h-px bg-line" role="separator" />

					<section id="s10" className="mb-14 scroll-mt-28">
						<SectionHeading k="10" title="Governing Law" />
						<div className="text-[13px] leading-[1.8] text-sub [&_p]:mb-3 [&_p:last-child]:mb-0">
							<p>
								These terms are governed by and construed in accordance with the
								laws of Tamil Nadu, India. Any disputes shall be subject to the
								exclusive jurisdiction of the courts in Coimbatore, Tamil Nadu.
							</p>
							<p>
								These terms also operate in compliance with India&apos;s Digital
								Personal Data Protection (DPDP) Act, 2023 with respect to
								personal data handling.
							</p>
						</div>
					</section>

					<div className="mb-14 h-px bg-line" role="separator" />

					<section id="s11" className="mb-14 scroll-mt-28">
						<SectionHeading k="11" title="Changes to These Terms" />
						<p className="mb-7 text-[13px] leading-[1.8] text-sub">
							We will notify you by email before making material changes to these
							terms. Continued use of Proof after notification constitutes
							acceptance of the updated terms. For minor changes (typos,
							clarifications), we will update the &quot;Last updated&quot; date
							above without individual notification.
						</p>
						<div className="rounded-xl border border-line bg-surface p-5 sm:p-6">
							<p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-dim">
								Also read
							</p>
							<div className="flex flex-col gap-3">
								<Link
									href="/privacy"
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
									Privacy Policy — how your data is collected, used, and protected
								</Link>
								<Link
									href="/delete-data"
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
										<path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6" />
									</svg>
									Data Deletion Instructions — how to delete your account and connected data
								</Link>
							</div>
						</div>
						<div className="mt-5 rounded-xl border border-line bg-surface p-5 sm:p-6">
							<p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-dim">
								Questions?
							</p>
							<a
								href="mailto:Founder@withproof.io"
								className="text-[13px] text-gold transition-colors hover:text-gold/90"
							>
								Founder@withproof.io
							</a>
							<p className="mt-1 text-[12px] text-dim">
								Reach us directly — we respond to all API review teams,
								merchants, and legal enquiries.
							</p>
						</div>
					</section>
				</main>

				<TermsToc />
			</div>

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
						<Link
							href="/delete-data"
							className="text-[12px] text-dim transition-colors hover:text-sub"
						>
							Data Deletion
						</Link>
						<a
							href="mailto:Founder@withproof.io"
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
		<div className="mb-4">
			<p className="mb-2 font-mono text-[10px] uppercase tracking-[0.08em] text-dim">
				{k}
			</p>
			<h2 className="font-fraunces text-[22px] font-bold tracking-[-0.02em] text-text">
				{title}
			</h2>
		</div>
	)
}

function CalloutNote({ children }: { children: ReactNode }) {
	return (
		<div className="mt-5 rounded-r-[10px] border-l-2 border-gold/35 bg-gold/[0.05] py-4 pl-[18px] pr-[18px] text-[13px] leading-[1.7] text-sub">
			{children}
		</div>
	)
}

function TermsLi({ children }: { children: ReactNode }) {
	return (
		<li className="flex gap-2.5 border-b border-white/[0.03] py-1.5 text-[13px] leading-relaxed text-sub last:border-b-0">
			<span className="mt-0.5 flex-shrink-0 font-mono text-[12px] text-dim">
				—
			</span>
			<span>{children}</span>
		</li>
	)
}

function IntegrationBadge({
	variant,
	children,
}: {
	variant: 'gmb' | 'insta' | 'shop' | 'square'
	children: ReactNode
}) {
	const styles = {
		gmb: 'border-[#4285f4]/20 bg-[#4285f4]/[0.07] text-[#4285f4]',
		insta: 'border-[#c13584]/20 bg-[#c13584]/[0.07] text-[#c13584]',
		shop: 'border-[#96bf48]/20 bg-[#96bf48]/[0.07] text-[#96bf48]',
		square: 'border-[#006AFF]/20 bg-[#006AFF]/[0.07] text-[#006AFF]',
	} as const
	return (
		<span
			className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[11px] font-semibold tracking-[0.03em] ${styles[variant]}`}
		>
			{children}
		</span>
	)
}

function IntegrationBlock({
	variant,
	children,
}: {
	variant: 'gmb' | 'insta' | 'shop' | 'square'
	children: ReactNode
}) {
	const header = {
		gmb: {
			bg: 'bg-[#4285f4]/[0.05]',
			iconBg: 'bg-[#4285f4]/10',
			title: 'text-[#4285f4]',
			name: 'Google Business Profile',
			tag: 'OAuth 2.0 · Read-only · business.manage, openid, userinfo.profile, userinfo.email',
			icon: (
				<svg
					width="13"
					height="13"
					viewBox="0 0 24 24"
					fill="#4285f4"
					aria-hidden
				>
					<path d="M12 2C8.13 2 5 5.13 5 9c0 3.75 5 9 5 9s5-5.25 5-9c0-2.76-2.24-5-5-5zm0 6.5c-.83 0-1.5-.67-1.5-1.5S11.17 5.5 12 5.5s1.5.67 1.5 1.5S12.83 8.5 12 8.5z" />
				</svg>
			),
		},
		insta: {
			bg: 'bg-[#c13584]/[0.05]',
			iconBg: 'bg-[#c13584]/10',
			title: 'text-[#c13584]',
			name: 'Instagram',
			tag: 'Instagram Graph API · Read-only · Business or Creator account',
			icon: (
				<svg
					width="13"
					height="13"
					viewBox="0 0 24 24"
					fill="none"
					stroke="#c13584"
					strokeWidth="2"
					strokeLinecap="round"
					aria-hidden
				>
					<rect x="2" y="2" width="20" height="20" rx="5" />
					<circle cx="12" cy="12" r="5" />
					<circle cx="17.5" cy="6.5" r="1" fill="#c13584" stroke="none" />
				</svg>
			),
		},
		shop: {
			bg: 'bg-[#96bf48]/[0.05]',
			iconBg: 'bg-[#96bf48]/10',
			title: 'text-[#96bf48]',
			name: 'Shopify',
			tag: 'Admin API & Event Webhooks · read_products, read_orders, write_discounts',
			icon: (
				<svg
					width="13"
					height="13"
					viewBox="0 0 24 24"
					fill="#96bf48"
					aria-hidden
				>
					<path d="M20.9 7.2c0-.1-.1-.1-.1-.1s-.1 0-.1-.1c-.9-.1-1.7-.1-2.5-.1-.2-.9-.5-1.7-.9-2.5-.7-1.2-1.7-1.9-2.9-1.9h-.1c-.1-.2-.4-.3-.6-.5-.8-.5-1.7-.7-2.7-.6C8.7 1.5 7 3 6.1 5c-.6 1.4-.8 2.7-.8 4.1-.9.3-1.6.5-1.6.5l-.6 14h13.5l1.6-14-1.1-.2c.1-.1.1-.2.1-.3 0-.5-.2-1.1-.3-1.9zm-4.1 0H14c-.1-1.3-.3-2.4-.7-3.3.9.4 1.6 1.7 1.5 3.3zM12 3.2c.4.9.7 2 .8 3.2H9.3c.2-1.2.5-2.4 1-3.2.3-.5.6-.8 1-.8s.5.3.7.8zM9.2 3.8c-.4.9-.7 2-.8 3.3H6.8c.5-1.7 1.3-3 2.4-3.3z" />
				</svg>
			),
		},
		square: {
			bg: 'bg-[#006AFF]/[0.05]',
			iconBg: 'bg-[#006AFF]/10',
			title: 'text-[#006AFF]',
			name: 'Square',
			tag: 'Catalog, Orders & Invoices API · MERCHANT_PROFILE_READ, ORDERS_READ, ITEMS_READ, ITEMS_WRITE, INVOICES_READ',
			icon: (
				<svg
					width="13"
					height="13"
					viewBox="0 0 24 24"
					fill="#006AFF"
					aria-hidden
				>
					<rect x="3" y="3" width="18" height="18" rx="4" />
				</svg>
			),
		},
	} as const

	const h = header[variant]

	return (
		<div className="mb-5 overflow-hidden rounded-xl border border-line last:mb-0">
			<div
				className={`flex items-center gap-2.5 border-b border-line px-[18px] py-3.5 ${h.bg}`}
			>
				<div
					className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md ${h.iconBg}`}
				>
					{h.icon}
				</div>
				<div>
					<p className={`text-[13px] font-semibold ${h.title}`}>{h.name}</p>
					<p className="mt-0.5 text-[10px] text-dim">{h.tag}</p>
				</div>
			</div>
			<div className="bg-surface px-[18px] py-4">{children}</div>
		</div>
	)
}

function IntRow({ k, v }: { k: string; v: string }) {
	return (
		<div className="flex gap-3 border-b border-white/[0.03] py-2 text-[13px] last:border-b-0 last:pb-0">
			<span className="w-[110px] flex-shrink-0 pt-0.5 font-mono text-[11px] text-dim">
				{k}
			</span>
			<span className="leading-relaxed text-sub">{v}</span>
		</div>
	)
}
