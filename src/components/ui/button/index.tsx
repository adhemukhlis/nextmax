import { FC, PropsWithChildren } from 'react'
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
			className={`button${variant === 'solid' ? ' solid' : variant === 'outline' ? ' outline' : variant === 'filled' ? ' filled' : ''}`}>
			{children}
		</button>
	)
}
export default Button
