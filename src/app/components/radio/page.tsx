import ButtonBack from '@/components/buttons/back'

const Page = () => {
	return (
		<div className="page column gap-2 page-padding">
			<ButtonBack
				navigateTo="/components"
				label="radio"
			/>
			<div className="d-flex gap-1">
				<div>
					<input
						type="radio"
						id="huey"
						name="drone"
						value="huey"
						defaultChecked
					/>
					<label htmlFor="huey">Huey</label>
				</div>

				<div>
					<input
						type="radio"
						id="dewey"
						name="drone"
						value="dewey"
					/>
					<label htmlFor="dewey">Dewey</label>
				</div>

				<div>
					<input
						type="radio"
						id="louie"
						name="drone"
						value="louie"
					/>
					<label htmlFor="louie">Louie</label>
				</div>
			</div>
		</div>
	)
}
export default Page
