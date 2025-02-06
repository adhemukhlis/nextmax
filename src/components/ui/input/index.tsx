import { FC, PropsWithChildren } from 'react'
import _style from './style.module.scss'

type InputProps = {
	name: string
	label: string
}
const Input: FC<PropsWithChildren<InputProps>> = ({ name, label }) => {
	return (
		<div className={_style['input-container']}>
			<input
				type="text"
				placeholder=""
				name={name}
				required
			/>
			<label htmlFor={name}>{label}</label>
		</div>
	)
}
export default Input
