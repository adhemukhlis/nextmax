import ButtonBack from '@/components/buttons/back'

const Page = () => {
	return (
		<div className="page column gap-2 page-padding">
			<ButtonBack
				navigateTo="/components"
				label="color"
			/>
			<div className="d-flex gap-1">
				<div>
					<input
						type="color"
						id="colors"
						name="colors"
					/>
					<label htmlFor="colors">Colors</label>
				</div>
			</div>
		</div>
	)
}
export default Page
