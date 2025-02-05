import { FC, PropsWithChildren } from 'react'
type AutoCompleteProps = {
	label: string
}
const AutoComplete: FC<PropsWithChildren<AutoCompleteProps>> = ({ label }) => {
	return (
		<div className="d-flex column">
			<label htmlFor="ice-cream-choice">{label}</label>
			<input
				list="ice-cream-flavors"
				id="ice-cream-choice"
				name="ice-cream-choice"
			/>

			<datalist id="ice-cream-flavors">
				<option value="Chocolate"></option>
				<option value="Coconut"></option>
				<option value="Mint"></option>
				<option value="Strawberry"></option>
				<option value="Vanilla"></option>
			</datalist>
		</div>
	)
}
export default AutoComplete
