import ButtonBack from '@/components/buttons/back'

const Page = () => {
	return (
		<div className="page column gap-2 page-padding">
			<ButtonBack
				navigateTo="/components"
				label="checkbox"
			/>
			<div className="d-flex gap-1">
				<div>
					<input
						type="checkbox"
						id="scales"
						name="scales"
						value="scales"
						defaultChecked
					/>
					<label htmlFor="scales">Scales</label>
				</div>
				<div>
					<input
						type="checkbox"
						id="horns"
						name="horns"
						value="horns"
					/>
					<label htmlFor="horns">Horns</label>
				</div>
			</div>
		</div>
	)
}
export default Page
