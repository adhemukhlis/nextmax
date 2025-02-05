import ButtonBack from '@/components/buttons/back'
import Typography from '@/components/ui/typography'

const Page = () => {
	return (
		<div className="page column gap-2 page-padding">
			<ButtonBack
				navigateTo="/components"
				label="typography"
			/>
			<div className="d-flex gap-1">
				<Typography>You OK?</Typography>
			</div>
		</div>
	)
}
export default Page
