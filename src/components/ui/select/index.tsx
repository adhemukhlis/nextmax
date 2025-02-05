import { FC, PropsWithChildren } from 'react'

type OptionItemType = {
	label: string
	value?: string | number | readonly string[] | undefined
	children?: OptionItemType[]
}

type SelectProps = {
	name: string
	placeholder: string
	options: OptionItemType[]
}
const Select: FC<PropsWithChildren<SelectProps>> = ({ name, placeholder, options }) => {
	return (
		<select
			name={name}
			defaultValue={'__PLACEHOLDER__'}>
			<option
				value="__PLACEHOLDER__"
				disabled>
				{placeholder}
			</option>
			{options.map((option, index) => {
				const isGroup = 'children' in option && Array.isArray(option['children'])
				return isGroup ? (
					<optgroup label={option.label}>
						{(option['children'] || []).map((_option, _index) => (
							<option
								key={`${index}-${_index}`}
								value={_option.value}>
								{_option.label}
							</option>
						))}
					</optgroup>
				) : (
					<option
						key={index}
						value={option.value}>
						{option.label}
					</option>
				)
			})}
		</select>
	)
}
export default Select
