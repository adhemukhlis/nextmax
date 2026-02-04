import { FC, PropsWithChildren, useId } from 'react'

import _style from './style.module.scss'
import { Options } from './type'

type AutoCompleteProps = {
	label: string
	name: string
	options: Options
}
const AutoComplete: FC<PropsWithChildren<AutoCompleteProps>> = ({ label, name, options }) => {
	const ts = useId()
	return (
		<div className={_style['input-container']}>
			<input
				list={ts}
				id={name}
				name={name}
				placeholder=" "
			/>
			<label htmlFor={name}>{label}</label>

			<datalist id={ts}>
				{options.map((option, index) => (
					<option
						key={`ac-${index}`}
						value={option}
					/>
				))}
			</datalist>
		</div>
	)
}
export default AutoComplete
