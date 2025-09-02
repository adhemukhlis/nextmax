'use client'
import Image from 'next/image'
import { FC, useEffect, useRef, useState } from 'react'

import style from './style.module.scss'

const SKELETON_COMPONENT_ID = 'skeleton'
type ImageProps = {
	src: string
	borderRadius?: string
}

const ImageBasic: FC<ImageProps> = ({ src, borderRadius = '0' }) => {
	const [mounted, setMounted] = useState(false)
	const parentRef = useRef(null)
	useEffect(() => {
		setMounted(true)
	}, [])
	const handleRemoveSkeleton = () => {
		if (SKELETON_COMPONENT_ID in parentRef.current.children) {
			parentRef.current.removeChild(parentRef.current.children[SKELETON_COMPONENT_ID])
		}
	}
	return (
		<div
			style={{
				width: '100%',
				height: '100%',
				position: 'relative',
				backgroundColor: 'transparent',
				...(!!borderRadius ? { borderRadius, overflow: 'hidden' } : {})
			}}
			ref={parentRef}>
			{mounted ? (
				<Image
					onLoad={handleRemoveSkeleton}
					src={src}
					alt="logo"
					sizes={`${parentRef.current?.offsetWidth}px`}
					fill
					style={{ objectFit: 'contain', width: '100%' }}
				/>
			) : (
				<></>
			)}
			<div
				id={SKELETON_COMPONENT_ID}
				className={style.skeleton}
				style={{
					position: 'absolute',
					width: '100%',
					height: '100%'
					// backgroundColor: '#DCDCDC'
				}}
			/>
		</div>
	)
}
export default ImageBasic
