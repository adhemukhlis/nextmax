import { ChangeEvent, FC, PropsWithChildren } from 'react'

import _style from './style.module.scss'

type InputProps = {
	name: string
	label: string
	type?: string
	id?: string
	minLength?: number
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}
const Input: FC<PropsWithChildren<InputProps>> = ({ name, label, type = 'text', id, minLength, onChange, ...other }) => {
	return (
		<div className={_style['input-container']}>
			<input
				{...other}
				id={id}
				type={type}
				placeholder=" "
				// name={name}
				minLength={minLength}
				required
				onChange={onChange}
			/>
			<label htmlFor={name}>{label}</label>
		</div>
	)
}
export default Input
