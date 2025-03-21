import ButtonBack from '@/components/buttons/back'
import AutoComplete from '@/components/ui/auto-complete'
import { Options } from '@/components/ui/auto-complete/type'

const Page = () => {
	const options: Options = ['Chocolate', 'Coconut', 'Mint', 'Strawberry', 'Vanilla']
	return (
		<div className="page column gap-2 page-padding">
			<ButtonBack
				navigateTo="/components"
				label="auto complete"
			/>
			<div className="d-flex gap-1">
				<AutoComplete
					label="Input"
					name="lunch-menu"
					options={options}
				/>
			</div>
		</div>
	)
}
export default Page
