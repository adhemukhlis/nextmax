import { FC, PropsWithChildren } from 'react'
import _style from './style.module.scss'

type InputProps = {
	name: string
	label: string
	type?: string
	id?: string
	minLength?: number
}
const Input: FC<PropsWithChildren<InputProps>> = ({ name, label, type = 'text', id, minLength }) => {
	return (
		<div className={_style['input-container']}>
			<input
				id={id}
				type={type}
				placeholder=" "
				name={name}
				minLength={minLength}
				required
			/>
			<label htmlFor={name}>{label}</label>
		</div>
	)
}
export default Input
