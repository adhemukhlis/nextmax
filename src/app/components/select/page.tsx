import ButtonBack from '@/components/buttons/back'
import Select from '@/components/ui/select'

const Page = () => {
	return (
		<div className="page column gap-2 page-padding">
			<ButtonBack
				navigateTo="/components"
				label="select"
			/>
			<div className="d-flex gap-1">
				<Select
					placeholder="Select Car"
					name="car"
					options={[
						{ label: 'Avanza', value: 'avanza' },
						{ label: 'Karimun', value: 'karimun' },
						{ label: 'Pajero', value: 'pajero' },
						{
							label: 'motor',
							children: [
								{ label: 'Mio', value: 'mio' },
								{ label: 'Supra', value: 'supra' }
							]
						}
					]}
				/>
			</div>
		</div>
	)
}
export default Page
