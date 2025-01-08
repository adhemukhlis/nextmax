import type { NextConfig } from 'next'
import nextJsObfuscator from 'nextjs-obfuscator'

const withNextJsObfuscator = nextJsObfuscator(
	{
		disableConsoleOutput: false,
		debugProtection: true,
		debugProtectionInterval: 4000,
		ignoreImports: true,
		selfDefending: true
	},
	{ enabled: true, log: true }
)

const nextConfig: NextConfig = withNextJsObfuscator({
	compiler: {
		removeConsole: {
			exclude: ['error', 'warn', 'info']
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
	outputFileTracingIncludes: {
		'/': ['./src/**/*']
	},
	trailingSlash: false
})

export default nextConfig
