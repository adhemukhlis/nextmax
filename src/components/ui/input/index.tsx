import { FC, PropsWithChildren } from 'react'
type InputProps = {
	name: string
	label: string
}
const Input: FC<PropsWithChildren<InputProps>> = ({ name, label }) => {
	return (
		<div className="input-container">
			<input
				type="text"
				placeholder=""
				id={name}
				name={name}
				required
			/>
			<label htmlFor={name}>{label}</label>
		</div>
	)
}
export default Input
