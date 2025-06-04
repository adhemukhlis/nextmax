import {
	NextRequest,
	NextResponse
	// userAgent
} from 'next/server'

import { decrypt } from './utils/crypto-zero/crypto-core'

// import { decrypt, encrypt } from './utils/crypto-zero/crypto-core'
// import { decodeFromZeroWidthCharactersText, encodeToZeroWidthCharactersText } from './utils/crypto-zero/stegano-core'

const auth = async (request: NextRequest) => {
	const pathname = request.nextUrl.pathname
	const baseUrl = request.nextUrl.origin
	const res = await fetch(`${baseUrl}/api/global`)

	const data = await res.json()
	const protectedRoutes = data.data
	const isProtected = protectedRoutes.includes(pathname)
	console.info({ isProtected, pathname })
	if (isProtected) {
		const session = request.cookies.get('session')?.value

		const decryptedCookieValue = await decrypt(String(session ?? ''), String(process.env.COOKIE_SECRET_KEY ?? ''))
		const parsedCookieValue = decryptedCookieValue.isSuccess ? JSON.parse(decryptedCookieValue?.result ?? '') : {}
		console.info({ session: parsedCookieValue })
		const is_authenticated = parsedCookieValue?.is_authenticated
		if (!is_authenticated) {
			console.info('😈')
			request.cookies.delete('session')
			return NextResponse.redirect(new URL('/login', request.url))
		}
		//
	}
	return undefined
}

const middleware = async (request: NextRequest) => {
	const nonce = Buffer.from(crypto.randomUUID()).toString('base64')
	const requestHeaders = new Headers(request.headers)

	const cspHeader = `
	  default-src 'self';
	  script-src 'self' https://va.vercel-scripts.com 'unsafe-inline' 'unsafe-eval';
		script-src-elem 'self' https://va.vercel-scripts.com 'unsafe-inline';
	  style-src 'self' 'nonce-${nonce} 'unsafe-inline'';
		style-src-elem 'self' 'unsafe-inline';
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

	// const requestHeadersArray = [...requestHeaders.entries()]
	// const { isBot, device } = userAgent(request)
	// if (!isBot) {
	// console.info(device)
	// console.info('HEADERS', requestHeadersArray)
	// const enc = await encrypt(device?.model ?? '', 'test')
	// console.info('👻', enc)
	// const dec = await decrypt(enc.result ?? '', 'test')
	// console.info('👻👻', dec)
	// const encSteg = encodeToZeroWidthCharactersText(device.model ?? '', 'test')
	// console.info('😈', `|${encSteg}|`)
	// const decSteg = decodeFromZeroWidthCharactersText(encSteg, 'test')
	// console.info('😈😈', `|${decSteg}|`)
	// }

	nextResponse.headers.set('Content-Security-Policy', contentSecurityPolicyHeaderValue)
	const authResponse = await auth(request)
	if (authResponse !== undefined) {
		return authResponse // 🟢 ini yang bikin redirect berhasil
	}
	return nextResponse
}

export default middleware

export const config = {
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
