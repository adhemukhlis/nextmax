import ButtonBack from '@/components/buttons/back'

const Page = () => {
	return (
		<div className="page column gap-2 page-padding">
			<ButtonBack
				navigateTo="/components"
				label="datepicker"
			/>
			<div className="d-flex gap-1 column">
				<label htmlFor="start">Start date:</label>

				<input
					type="date"
					id="start"
					name="trip-start"
					defaultValue="2018-07-22"
					min="2018-01-01"
					max="2018-12-31"
				/>

				<label htmlFor="meeting-time">Choose a time for your appointment:</label>

				<input
					type="datetime-local"
					id="meeting-time"
					name="meeting-time"
					defaultValue="2018-06-12T19:30"
					min="2018-06-07T00:00"
					max="2018-06-14T00:00"
				/>
				<label htmlFor="start">Start month:</label>

				<input
					type="month"
					id="start"
					name="start"
					min="2018-03"
					defaultValue="2018-05"
				/>
				<label htmlFor="appt">Choose a time for your meeting:</label>

				<input
					type="time"
					id="appt"
					name="appt"
					min="09:00"
					max="18:00"
					required
				/>
				<label htmlFor="camp-week">Choose a week in May or June:</label>

				<input
					type="week"
					name="week"
					id="camp-week"
					min="2018-W18"
					max="2018-W26"
					required
				/>
			</div>
		</div>
	)
}
export default Page
