import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	/* config options here */
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
	// sassOptions: {
	// 	includePaths: [path.join(__dirname, 'src', 'styles')]
	// },
}

export default nextConfig
