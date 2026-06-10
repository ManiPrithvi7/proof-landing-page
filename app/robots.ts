import type { MetadataRoute } from 'next'
import { getSiteUrl } from '@/lib/urls'

/**
 * Robots.txt for crawlers (served at /robots.txt).
 */
export default function robots(): MetadataRoute.Robots {
	const baseUrl = getSiteUrl()

	return {
		rules: {
			userAgent: '*',
			allow: '/',
			disallow: ['/_next/'],
		},
		sitemap: `${baseUrl}/sitemap.xml`,
	}
}
