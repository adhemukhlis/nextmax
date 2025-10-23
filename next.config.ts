import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	compiler: {
		removeConsole: {
			exclude: ['error', 'warn', 'info', 'table']
		}
	},
	cacheComponents: true,
	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'en-US', 'id-ID']
	},
	httpAgentOptions: {
		keepAlive: false
	},
	pageExtensions: ['ts', 'tsx'],

	poweredByHeader: false,
	typescript: {
		ignoreBuildErrors: true
	},
	// <+> DEPRECATED
	// eslint: {
	// 	ignoreDuringBuilds: true
	// },
	reactStrictMode: false, // I prefer to set to false to prevent double rendering.
	productionBrowserSourceMaps: false,
	outputFileTracingIncludes: {
		'/': ['./src/**/*'] // keep src directory include production
	},
	trailingSlash: false,
	turbopack: {
		resolveExtensions: ['.tsx', '.ts', '.mjs', '.json', '.scss']
	},
	typedRoutes: true,
	experimental: {
		serverSourceMaps: false
		// turbopackTreeShaking: true
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'api.dicebear.com'
			}
		],
		dangerouslyAllowSVG: true
	}
}

export default nextConfig
