const trimTrailingSlash = (url: string): string => url.replace(/\/$/, '')

export const getSiteUrl = (): string =>
	trimTrailingSlash(
		process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.withproof.io'
	)

export const getDashboardUrl = (): string =>
	trimTrailingSlash(
		process.env.NEXT_PUBLIC_DASHBOARD_URL ??
			'https://dashboard.withproof.io'
	)

export const getDashboardLoginUrl = (callbackPath = '/'): string => {
	const dashboard = getDashboardUrl()
	const callback = `${dashboard}${callbackPath.startsWith('/') ? callbackPath : `/${callbackPath}`}`
	return `${dashboard}/auth/login?callbackUrl=${encodeURIComponent(callback)}`
}
