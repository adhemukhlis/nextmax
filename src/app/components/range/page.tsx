import ButtonBack from '@/components/buttons/back'

const Page = () => {
	return (
		<div className="page column gap-2 page-padding">
			<ButtonBack
				navigateTo="/components"
				label="checkbox"
			/>
			<div className="d-flex gap-1">
				<p>Audio settings:</p>

				<div>
					<input
						type="range"
						id="volume"
						name="volume"
						min="0"
						max="11"
					/>
					<label htmlFor="volume">Volume</label>
				</div>

				<div>
					<input
						type="range"
						id="cowbell"
						name="cowbell"
						min="0"
						max="100"
						defaultValue="90"
						step="10"
					/>
					<label htmlFor="cowbell">Cowbell</label>
				</div>
			</div>
		</div>
	)
}
export default Page
