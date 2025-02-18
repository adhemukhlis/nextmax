import type { NextConfig } from 'next'

const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline';
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data:;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
`

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
		'/': ['./src/**/*']
	},
	trailingSlash: false,
	experimental: {
		turbo: {
			resolveExtensions: ['.mdx', '.tsx', '.ts', '.jsx', '.js', '.mjs', '.json', '.scss']
		},
		serverSourceMaps: false
	},

	async headers() {
		return [
			{
				source: '/(.*)',
				headers: [
					{
						key: 'Content-Security-Policy',
						value: cspHeader.replace(/\n/g, '')
					}
				]
			}
		]
	}
}

export default nextConfig
