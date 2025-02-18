import type { Metadata, Viewport } from 'next'
import { Rubik } from 'next/font/google'
import '@/styles/global.scss'
import { SpeedInsights } from '@vercel/speed-insights/next'
import RootLayoutClient from '@/components/client/layout'

const nextFont = Rubik({
	style: ['normal', 'italic'],
	weight: ['300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-family',
	adjustFontFallback: false
})

export const metadata: Metadata = {
	title: 'NEXTMAX',
	description: 'Next.js Boilerplate'
}

export const viewport: Viewport = {
	themeColor: '#FAFAFA'
}

const RootLayout = ({
	children
}: Readonly<{
	children: React.ReactNode
}>) => {
	const GIT_SHORT_COMMIT_SHA = String(process.env.VERCEL_GIT_COMMIT_SHA ?? '').slice(0, 7)
	return (
		<html lang="en">
			<body className={`${nextFont.variable}`}>
				{children}
				<SpeedInsights />
				<RootLayoutClient buildId={GIT_SHORT_COMMIT_SHA} />
			</body>
		</html>
	)
}

export default RootLayout
