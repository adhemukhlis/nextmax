import { FC, PropsWithChildren } from 'react'

import _style from './style.module.scss'
type SpinnerProps = {}

const Spinner: FC<PropsWithChildren<SpinnerProps>> = () => {
	return (
		<svg
			className={_style['spinner']}
			viewBox="0 0 50 50">
			<circle
				cx="25"
				cy="25"
				r="20"
				fill="none"
				stroke="currentColor"
				strokeWidth="5"
				strokeLinecap="round"
				strokeDasharray="90"
				strokeDashoffset="30"
			/>
		</svg>
	)
}

export default Spinner
