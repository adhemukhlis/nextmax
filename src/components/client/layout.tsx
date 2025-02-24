'use client'
import { FC, useEffect } from 'react'

type RootLayoutClientProps = {
	buildId?: string
}

const RootLayoutClient: FC<RootLayoutClientProps> = ({ buildId }) => {
	useEffect(() => {
		console.table({
			BUILD_ID: buildId
		})
		const canvas = document.createElement('canvas')
		let ctx = canvas.getContext('2d')

		canvas.width = 1
		canvas.height = 1

		// Draw text
		ctx.font = '20px Arial'
		ctx.fillStyle = 'rgb(50, 100, 150)'
		ctx.fillText(window.location.host, 10, 30)

		// Draw gradient
		const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0)
		gradient.addColorStop(0, 'red')
		gradient.addColorStop(1, 'blue')
		ctx.fillStyle = gradient
		ctx.fillRect(0, 0, canvas.width, 10)

		// Convert to Base64 hash
		const dataURL = canvas.toDataURL().split(',')[1]
		// return Base64.stringify(sha256(dataURL))

		const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
		const debugInfo = !!gl ? gl.getExtension('WEBGL_debug_renderer_info') : undefined
		console.info({
			userAgent: navigator.userAgent,
			userAgentData: navigator.userAgentData,
			mobile: navigator.userAgentData.mobile,
			os: navigator.userAgentData.platform,
			platform: navigator.platform,
			vendor: navigator.vendor,
			tz: Intl.DateTimeFormat().resolvedOptions().timeZone,
			canvas: dataURL,
			width: window.screen.width,
			height: window.screen.height,
			availWidth: window.screen.availWidth,
			availHeight: window.screen.availHeight,
			availLeft: window.screen.availLeft,
			availTop: window.screen.availTop,
			colorDepth: window.screen.colorDepth,
			pixelDepth: window.screen.pixelDepth,
			productSub: navigator.productSub,
			deviceMemory: navigator.deviceMemory,
			devicePosture: navigator.devicePosture.type,
			hardwareConcurrency: navigator.hardwareConcurrency,
			language: navigator.language
		})
	}, [])
	return <></>
}
export default RootLayoutClient
