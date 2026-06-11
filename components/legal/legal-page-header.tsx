import Link from 'next/link'
import { ProofLogo } from '@/components/brand/proof-logo'

export function LegalPageHeader() {
	return (
		<header className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur-[14px]">
			<div className="mx-auto flex h-14 max-w-[960px] items-center justify-between px-5 sm:px-10">
				<Link href="/" className="inline-flex items-center" aria-label="Proof home">
					<ProofLogo background="dark" priority />
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
	)
}
