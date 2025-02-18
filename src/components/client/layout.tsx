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
	}, [])
	return <></>
}
export default RootLayoutClient
