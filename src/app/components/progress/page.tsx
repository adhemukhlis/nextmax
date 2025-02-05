import ButtonBack from '@/components/buttons/back'
import Progress from '@/components/ui/progress'

const Page = () => {
	return (
		<div className="page column gap-2 page-padding">
			<ButtonBack
				navigateTo="/components"
				label="progress"
			/>
			<div className="d-flex gap-1">
				<Progress
					max={100}
					value={80}
				/>
			</div>
		</div>
	)
}
export default Page
