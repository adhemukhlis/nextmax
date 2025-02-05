import ButtonBack from '@/components/buttons/back'
import AutoComplete from '@/components/ui/auto-complete'

const Page = () => {
	return (
		<div className="page column gap-2 page-padding">
			<ButtonBack
				navigateTo="/components"
				label="auto complete"
			/>
			<div className="d-flex gap-1">
				<AutoComplete label="Select menu" />
			</div>
		</div>
	)
}
export default Page
