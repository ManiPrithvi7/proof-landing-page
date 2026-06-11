import type { MetadataRoute } from 'next'
import { getSiteUrl } from '@/lib/urls'

/**
 * Sitemap index (served at /sitemap.xml).
 */
export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = getSiteUrl()
	const now = new Date()

	return [
		{
			url: baseUrl,
			lastModified: now,
			changeFrequency: 'weekly',
			priority: 1,
		},
		{
			url: `${baseUrl}/privacy`,
			lastModified: now,
			changeFrequency: 'yearly',
			priority: 0.5,
		},
		{
			url: `${baseUrl}/terms`,
			lastModified: now,
			changeFrequency: 'yearly',
			priority: 0.5,
		},
		{
			url: `${baseUrl}/delete-data`,
			lastModified: now,
			changeFrequency: 'yearly',
			priority: 0.3,
		},
	]
}
