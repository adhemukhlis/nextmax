import { NextRequest, NextResponse, userAgent } from 'next/server'

const middleware = async (request: NextRequest) => {
	const nonce = Buffer.from(crypto.randomUUID()).toString('base64')
	const requestHeaders = new Headers(request.headers)

	const cspHeader = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic';
    style-src 'self' 'nonce-${nonce}';
    img-src 'self' blob: data:;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
  `

	// Replace newline characters and spaces
	const contentSecurityPolicyHeaderValue = cspHeader.replace(/\s{2,}/g, ' ').trim()

	requestHeaders.set('x-nonce', nonce)
	requestHeaders.set('Content-Security-Policy', contentSecurityPolicyHeaderValue)

	requestHeaders.set('x-url', request.nextUrl.toString())
	const nextResponse = NextResponse.next({
		request: {
			headers: requestHeaders
		}
	})

	const requestHeadersArray = [...requestHeaders.entries()]
	const { isBot, device } = userAgent(request)
	if (!isBot) {
		console.info(device)
		console.info('HEADERS', requestHeadersArray)
	}

	nextResponse.headers.set('Content-Security-Policy', contentSecurityPolicyHeaderValue)

	return nextResponse
}

export default middleware

export const config = {
	matcher: [
		// API only
		// '/api/:function*',
		// pages
		{
			source: '/((?!api|favicon.ico|_next/image|_next/static|_assets|sw.js|manifest.webmanifest).*)',
			missing: [
				// Exclude Server Actions
				{ type: 'header', key: 'next-action' },
				{ type: 'header', key: 'next-router-prefetch' },
				{ type: 'header', key: 'purpose', value: 'prefetch' }
			]
		}
	]
}
