import Image from 'next/image'
import { cn } from '@/lib/utils'
import {
	getHorizontalLogoSrc,
	type ProofLogoBackground,
} from '@/lib/brand'

const LOGO_WIDTH = 4167
const LOGO_HEIGHT = 1815

type ProofLogoProps = {
	/** Page/section background the logo sits on — picks the matching asset. */
	background: ProofLogoBackground
	className?: string
	priority?: boolean
}

export function ProofLogo({
	background,
	className,
	priority = false,
}: ProofLogoProps) {
	return (
		<Image
			src={getHorizontalLogoSrc(background)}
			alt="Proof"
			width={LOGO_WIDTH}
			height={LOGO_HEIGHT}
			priority={priority}
			className={cn('h-7 w-auto', className)}
		/>
	)
}
