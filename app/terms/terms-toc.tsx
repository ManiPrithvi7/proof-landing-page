'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const TOC_ITEMS = [
	{ id: 's01', label: 'What Proof Is' },
	{ id: 's02', label: 'Integration Terms' },
	{ id: 's03', label: 'Acceptable Use' },
	{ id: 's04', label: 'Data Accuracy' },
	{ id: 's05', label: 'Service Availability' },
	{ id: 's06', label: 'Termination' },
	{ id: 's07', label: 'Limitation of Liability' },
	{ id: 's08', label: 'Third-Party Platforms' },
	{ id: 's09', label: 'Governing Law' },
	{ id: 's10', label: 'Changes' },
] as const

export const TermsToc = () => {
	const [activeId, setActiveId] = useState<string>('s01')

	useEffect(() => {
		const sections = TOC_ITEMS.map((item) =>
			document.getElementById(item.id)
		).filter((el): el is HTMLElement => el !== null)

		if (sections.length === 0) {
			return
		}

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (!entry.isIntersecting) {
						return
					}
					setActiveId(entry.target.id)
				})
			},
			{ rootMargin: '-20% 0px -70% 0px', threshold: 0 }
		)

		sections.forEach((section) => observer.observe(section))
		return () => observer.disconnect()
	}, [])

	return (
		<nav
			className="sticky top-24 hidden w-[200px] shrink-0 self-start pb-10 pl-2 lg:block pt-10"
			aria-label="On this page"
		>
			<p className="mb-3.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-dim">
				Contents
			</p>
			<ul className="flex flex-col gap-0.5">
				{TOC_ITEMS.map((item) => {
					const isActive = activeId === item.id
					return (
						<li key={item.id}>
							<a
								href={`#${item.id}`}
								className={cn(
									'block border-l-2 py-1.5 pl-2.5 text-[12px] transition-colors',
									isActive
										? 'border-gold text-text'
										: 'border-transparent text-dim hover:border-white/10 hover:text-sub'
								)}
							>
								{item.label}
							</a>
						</li>
					)
				})}
			</ul>
			<div className="my-3 h-px bg-line" role="separator" />
			<Link
				href="/privacy"
				className="block border-l-2 border-transparent py-1.5 pl-2.5 text-[12px] text-gold transition-colors hover:text-gold/90"
			>
				→ Privacy Policy
			</Link>
		</nav>
	)
}
