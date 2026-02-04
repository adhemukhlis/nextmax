import { Rubik } from 'next/font/google'
import { FC, PropsWithChildren } from 'react'

import RootLayoutClient from '@/components/client/layout'

import type { Metadata, Viewport } from 'next'

import '@/styles/global.scss'

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

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
	const GIT_SHORT_COMMIT_SHA = String(process.env.VERCEL_GIT_COMMIT_SHA ?? '').slice(0, 7)
	return (
		<html
			lang="en">
			<body className={`${nextFont.variable}`}>
				{children}
				<RootLayoutClient buildId={GIT_SHORT_COMMIT_SHA} />
			</body>
		</html>
	)
}

export default RootLayout
