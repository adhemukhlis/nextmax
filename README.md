# NEXTMAX

## Dependencies Docs

1. `@next/bundle-analyzer`

   install

   ```bash
   yarn add @next/bundle-analyzer
   ```

   `next.config.ts`

   ```typescript
   import bundleAnalyzer from '@next/bundle-analyzer'
   import type { NextConfig } from 'next'

   const withBundleAnalyzer = bundleAnalyzer({ enabled: process.env.ANALYZE === 'true' })

   const nextConfig: NextConfig = {
   	/** NextConfig */
   }
   export default withBundleAnalyzer(nextConfig)
   ```

   `package.json`

   ```diff
   {
      "script": {
   +    "analyze": "ANALYZE=true next build",
      }
   }
   ```

   command

   ```bash
   yarn analyze
   ```

   ***

2. `@vercel/speed-insights`

   install

   ```bash
   yarn add @vercel/speed-insights
   ```

   `<root>/src/app/layout.tsx`

   ```tsx
   import { SpeedInsights } from '@vercel/speed-insights/next'
   import { FC, PropsWithChildren } from 'react'

   const RootLayout: FC<PropsWithChildren> = async ({ children }) => {
   	return (
   		<html>
   			<body>
   				{children}
   				<SpeedInsights />
   			</body>
   		</html>
   	)
   }
   export default RootLayout
   ```

   ***

3. `sass-migrator`

   install

   ```bash
   yarn add -D sass-migrator
   ```

   `package.json`

   ```diff
   {
      "script": {
   +    "scss-fix": "yarn sass-migrator module --migrate-deps src/styles/global.scss",
      }
   }
   ```

   command

   ```bash
   yarn scss-fix
   ```

   ***
