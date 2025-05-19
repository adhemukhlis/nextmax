import Link from 'next/link'
import { FC, PropsWithChildren } from 'react'
type ButtonLinkProps = {
	to?: string
	flip?: boolean
	onClick?: () => void
}
const ButtonLink: FC<PropsWithChildren<ButtonLinkProps>> = ({ children, to = '#', flip = false, ...other }) => {
	return (
		<Link
			{...other}
			href={to}
			prefetch={true}
			draggable={false}
			className={['button-link', ...(flip ? ['flip'] : [])].join(' ')}>
			{children}
		</Link>
	)
}
export default ButtonLink
