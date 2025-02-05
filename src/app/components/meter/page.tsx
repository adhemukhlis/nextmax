import ButtonBack from '@/components/buttons/back'
import Meter from '@/components/ui/meter'

const Page = () => {
	return (
		<div className="page column gap-2 page-padding">
			<ButtonBack
				navigateTo="/components"
				label="meter"
			/>
			<div className="d-flex gap-1">
				<Meter
					min={0}
					max={100}
					value={80}
				/>
			</div>
		</div>
	)
}
export default Page
