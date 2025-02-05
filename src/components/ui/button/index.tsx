import { FC, PropsWithChildren } from 'react'
type ButtonProps = {
	variant?: 'solid' | 'outline' | 'filled' | 'text'
}
const Button: FC<PropsWithChildren<ButtonProps>> = ({ children, variant }) => {
	return (
		<button
			className={`button${variant === 'solid' ? ' solid' : variant === 'outline' ? ' outline' : variant === 'filled' ? ' filled' : ''}`}>
			{children}
		</button>
	)
}
export default Button
