import bundleAnalyzer from '@next/bundle-analyzer'

import type { NextConfig } from 'next'

const withBundleAnalyzer = bundleAnalyzer({
	enabled: process.env.ANALYZE === 'true'
})

const nextConfig: NextConfig = {
	compiler: {
		removeConsole: {
			exclude: ['error', 'warn', 'info', 'table']
		}
	},

	poweredByHeader: false,
	typescript: {
		ignoreBuildErrors: true
	},
	eslint: {
		ignoreDuringBuilds: true
	},
	reactStrictMode: false, // I prefer to set to false to prevent double rendering.
	productionBrowserSourceMaps: false,
	outputFileTracingIncludes: {
		'/': ['./src/**/*'] // keep src directory include production
	},
	trailingSlash: false,
	turbopack: {
		resolveExtensions: ['.mdx', '.tsx', '.ts', '.jsx', '.js', '.mjs', '.json', '.scss']
	},
	experimental: {
<<<<<<< Updated upstream
		serverSourceMaps: false,
		// turbopackTreeShaking: true
=======
		serverSourceMaps: false
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'api.dicebear.com'
			}
		],
		dangerouslyAllowSVG: true
>>>>>>> Stashed changes
	}
}

export default withBundleAnalyzer(nextConfig)
