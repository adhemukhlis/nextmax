import ButtonBack from '@/components/buttons/back'
import Input from '@/components/ui/input'

const Page = () => {
	return (
		<div className="page column gap-2 page-padding">
			<ButtonBack
				navigateTo="/components"
				label="input"
			/>
			<div className="d-flex gap-1">
				<Input
					name="full_name"
					label="Full Name"
				/>
			</div>
		</div>
	)
}
export default Page
