import { NextRequest, NextResponse } from 'next/server'

import { decrypt } from './utils/crypto-zero/crypto-core'
import globalStore from './utils/globalStore'

const auth = async (request: NextRequest) => {
	const pathname = request.nextUrl.pathname

	let protectedRoutes = undefined
	globalStore.set('protectedRoutes', protectedRoutes)
	const isProtectedRoutesInitiated = globalStore.has('protectedRoutes')
	if (isProtectedRoutesInitiated) {
		protectedRoutes = globalStore.get('protectedRoutes')
	} else {
		const baseUrl = request.nextUrl.origin
		const res = await fetch(`${baseUrl}/api/global`, { next: { revalidate: 60 } })
		const data = await res.json()
		protectedRoutes = data.data
	}
	const isProtected = protectedRoutes.includes(pathname)
	if (isProtected) {
		const session = request.cookies.get('session')?.value

		const decryptedCookieValue = await decrypt(String(session ?? ''), String(process.env.COOKIE_SECRET_KEY ?? ''))
		const parsedCookieValue = decryptedCookieValue.isSuccess ? JSON.parse(decryptedCookieValue?.result ?? '') : {}

		const is_authenticated = parsedCookieValue?.is_authenticated
		if (!is_authenticated) {
			request.cookies.delete('session')
			return NextResponse.redirect(new URL('/login', request.url))
		}
	}
	return undefined
}

const middleware = async (request: NextRequest) => {
	const nonce = Buffer.from(crypto.randomUUID()).toString('base64')
	const requestHeaders = new Headers(request.headers)

	// const cspHeader = `
	// 	default-src 'self';
	// 	script-src 'self' 'nonce-${nonce}' https://va.vercel-scripts.com;
	// 	style-src 'self' 'nonce-${nonce}' 'unsafe-inline';
	// 	img-src 'self' blob: data:;
	// 	font-src 'self';
	// 	object-src 'none';
	// 	base-uri 'self';
	// 	form-action 'self';
	// 	frame-ancestors 'none';
	// 	upgrade-insecure-requests;
	// `

	// const contentSecurityPolicyHeaderValue = cspHeader.replace(/\s{2,}/g, ' ').trim()

	requestHeaders.set('x-nonce', nonce)
	// if (process.env.NODE_ENV === 'production') {
	// 	requestHeaders.set('Content-Security-Policy', contentSecurityPolicyHeaderValue)
	// }

	requestHeaders.set('x-url', request.nextUrl.toString())
	const nextResponse = NextResponse.next({
		request: {
			headers: requestHeaders
		}
	})

	// if (process.env.NODE_ENV === 'production') {
	// 	nextResponse.headers.set('Content-Security-Policy', contentSecurityPolicyHeaderValue)
	// }
	const authResponse = await auth(request)
	if (authResponse !== undefined) {
		return authResponse
	}
	return nextResponse
}

export default middleware

export const config = {
	runtime: 'nodejs',
	matcher: [
		// API only
		// '/api/:function*',
		// pages
		{
			source: '/((?!api|favicon.ico|_next/image|_next/static|_assets|sw.js|manifest.webmanifest|.well-known).*)',
			missing: [
				// Exclude Server Actions
				{ type: 'header', key: 'next-action' },
				{ type: 'header', key: 'next-router-prefetch' },
				{ type: 'header', key: 'purpose', value: 'prefetch' }
			]
		}
	]
}
