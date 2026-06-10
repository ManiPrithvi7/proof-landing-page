'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { getDashboardLoginUrl } from '@/lib/urls'

interface GetAccessButtonProps {
	variant?: 'secondary' | 'swiss-outline' | 'hero' | 'default'
	size?: 'sm' | 'lg' | 'default' | 'icon'
	className?: string
}

export const GetAccessButton = ({
	variant = 'secondary',
	size = 'sm',
	className,
}: GetAccessButtonProps) => {
	const loginUrl = getDashboardLoginUrl('/')

	return (
		<Button asChild variant={variant} size={size} className={className}>
			<Link href={loginUrl} aria-label="Get access" tabIndex={0}>
				Get Access
			</Link>
		</Button>
	)
}
