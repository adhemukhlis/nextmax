import LogoutButton from './_client/logout-button'
import { getSession } from '@/app/_actions/session'

const DashboardPage = async () => {
	const session = await getSession()

	return (
		<>
			<div className="d-flex gap-1 column">
				Dashboard
				<LogoutButton />
				<pre>{JSON.stringify(session, null, '	')}</pre>
			</div>
		</>
	)
}

export default DashboardPage
