import { FC, PropsWithChildren } from 'react'
type TypographyProps = {
	size?: number
}
const Typography: FC<PropsWithChildren<TypographyProps>> = ({ children, size }) => {
	return (
		<div
			className="d-flex column gap-1"
			style={{ fontSize: size }}>
			<kbd>{children}</kbd>
			<mark>{children}</mark>
			<s>{children}</s>
			<p>{children}</p>
			<p>
				<small>{children}</small>
			</p>
			<strong>{children}</strong>
			<p>
				{children}
				<sub>{children}</sub>
			</p>
			<p>
				{children}
				<sup>{children}</sup>
			</p>
			<p>
				{children}
				<u>{children}</u>
			</p>
		</div>
	)
}
export default Typography
