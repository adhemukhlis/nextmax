'use client'
import { useCallback, useEffect, useRef, useState } from 'react'

import type { ReactElement } from 'react'
type VirtualListProps<T> = {
	height?: number
	itemHeight?: number
	data: T[]
	buffer?: number
}

function VirtualList<T>({ height = 400, itemHeight = 40, data = [], buffer = 5 }: VirtualListProps<T>): ReactElement {
	const containerRef = useRef<HTMLDivElement | null>(null)
	const [scrollTop, setScrollTop] = useState(0)

	const totalHeight = data.length * itemHeight
	const itemsInView = Math.ceil(height / itemHeight)
	const currentIndex = Math.floor(scrollTop / itemHeight)
	const startIndex = Math.max(0, currentIndex - buffer)
	const endIndex = Math.min(data.length, currentIndex + itemsInView + buffer)
	const offsetY = startIndex * itemHeight

	const onScroll = useCallback(() => {
		if (containerRef.current) {
			setScrollTop(containerRef.current.scrollTop)
		}
	}, [])

	useEffect(() => {
		const el = containerRef.current
		if (!el) return
		el.addEventListener('scroll', onScroll)
		return () => el.removeEventListener('scroll', onScroll)
	}, [onScroll])

	return (
		<div
			ref={containerRef}
			style={{
				height: `${height}px`,
				overflowY: 'auto',
				position: 'relative'
			}}>
			<div style={{ height: `${totalHeight}px`, position: 'relative' }}>
				<div style={{ transform: `translateY(${offsetY}px)` }}>
					{data.slice(startIndex, endIndex).map((item, idx) => (
						<div
							key={startIndex + idx}
							style={{ height: itemHeight }}>
							<div style={{ padding: '8px', borderBottom: '1px solid #eee' }}>{item as string}</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default VirtualList
