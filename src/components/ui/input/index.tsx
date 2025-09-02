import { ChangeEvent, FC, PropsWithChildren } from 'react'

import _style from './style.module.scss'

type InputProps = {
	name?: string
	label: string
	type?: string
	id?: string
	minLength?: number
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

const Input: FC<PropsWithChildren<InputProps>> = ({ name, label, type = 'text', minLength, onChange, id, ...other }) => {
	const inputId = id || name

	return (
		<div className={_style['input-container']}>
			<input
				{...other}
				id={inputId}
				type={type}
				placeholder=" "
				minLength={minLength}
				required
				onChange={onChange}
				suppressHydrationWarning
			/>
			<label htmlFor={inputId}>{label}</label>
		</div>
	)
}

export default Input
