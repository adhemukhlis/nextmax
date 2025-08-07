import { FC } from 'react'

import ButtonLink from '@/components/ui/button-link'

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
					WebkitBackdropFilter: 'blur(0.2rem)',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center'
				}}>
				<div className="modal">
					<h2>Modal Title</h2>
					<p>This is a simple modal with a blurred background.</p>

					<ButtonLink to="/components/modal">Close</ButtonLink>
				</div>
			</div>
		</div>
	)
}
export default DetailPage
