import Link from 'next/link'
import { FC, PropsWithChildren } from 'react'
type ButtonBackProps = {
	navigateTo: string
	label: string
}
const ButtonBack: FC<PropsWithChildren<ButtonBackProps>> = ({ navigateTo, label }) => {
	return (
		<div className="d-flex align-center gap-1">
			<Link
				href={navigateTo}
				className="button-link flip">
				➜
			</Link>
			<h1>{label}</h1>
		</div>
	)
}
export default ButtonBack
