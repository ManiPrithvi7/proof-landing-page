'use client'

import { useState } from 'react'

const EMAIL = 'Founder@withproof.io'

export function CopyEmailButton() {
	const [copied, setCopied] = useState(false)

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(EMAIL)
			setCopied(true)
			window.setTimeout(() => setCopied(false), 2000)
		} catch {
			// Clipboard unavailable in some browsers/contexts
		}
	}

	return (
		<button
			type="button"
			onClick={handleCopy}
			className="inline-flex items-center gap-1.5 rounded-md border border-line bg-surface px-3 py-1.5 text-[12px] text-sub transition-colors hover:border-white/10 hover:text-text"
		>
			{copied ? 'Copied' : 'Copy email'}
		</button>
	)
}
