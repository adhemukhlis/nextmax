import Link from 'next/link'
import { FC } from 'react'

const DetailPage: FC = () => {
	return (
		<div
			style={{
				width: '100%',
				height: '100%',
				position: 'absolute'
			}}>
			<div
				style={{
					zIndex: 9999,
					width: '100%',
					height: '100%',
					backgroundColor: 'rgba(40, 40, 40, 0.2)',
					backdropFilter: 'blur(0.2rem)',

					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center'
				}}>
				<div className="modal">
					<h2>Modal Title</h2>
					<p>This is a simple modal with a blurred background.</p>
					<Link
						href="/components/button"
						className="button-link">
						Close
					</Link>
				</div>
			</div>
		</div>
	)
}
export default DetailPage
