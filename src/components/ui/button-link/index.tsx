import Link from 'next/link'
import { FC, PropsWithChildren } from 'react'

import _style from './style.module.scss'

import type { Route } from 'next'

type ButtonLinkProps = {
	to?: Route
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
			className={[_style['button-link'], ...(flip ? ['flip'] : [])].join(' ')}>
			{children}
		</Link>
	)
}
export default ButtonLink
