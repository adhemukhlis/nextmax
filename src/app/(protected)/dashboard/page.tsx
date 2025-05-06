import { redirect } from 'next/navigation'

import LogoutButton from './_client/logout-button'
import { getSession } from '@/app/_actions/session'

const DashboardPage = async () => {
	const session = await getSession()
	if (!session.is_authenticated) {
		redirect('/login')
	}
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
