'use client'
import { FC, useEffect } from 'react'

type RootLayoutClientProps = {
	buildId?: string
}

const RootLayoutClient: FC<RootLayoutClientProps> = ({ buildId }) => {
	useEffect(() => {
		console.table({
			BuildID: buildId
		})
	}, [])
	return <></>
}
export default RootLayoutClient
