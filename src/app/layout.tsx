import type { Metadata, Viewport } from 'next'
import { Space_Mono } from 'next/font/google'
import '@/styles/global.scss'

const nextFont = Space_Mono({
	style: ['normal', 'italic'],
	weight: ['400', '700'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-space-mono',
	adjustFontFallback: false
})

export const metadata: Metadata = {
	title: 'NEXTMAX',
	description: 'Next.js Boilerplate'
}

export const viewport: Viewport = {
	themeColor: '#333333'
}

const RootLayout = ({
	children
}: Readonly<{
	children: React.ReactNode
}>) => {
	return (
		<html lang="en">
			<body className={`${nextFont.variable}`}>{children}</body>
		</html>
	)
}

export default RootLayout
