import { FC, PropsWithChildren } from 'react'

import _style from './style.module.scss'

type ButtonProps = {
	htmlType?: 'submit' | 'reset' | 'button' | undefined
	variant?: 'solid' | 'outline' | 'filled' | 'text'
	onClick?: () => void
}
const Button: FC<PropsWithChildren<ButtonProps>> = ({ children, variant, htmlType, ...other }) => {
	return (
		<button
			{...(!!htmlType ? { type: htmlType } : {})}
			{...other}
			className={`${_style['button']} ${variant !== undefined ? _style[variant] : ''}`}>
			{children}
		</button>
	)
}
export default Button
