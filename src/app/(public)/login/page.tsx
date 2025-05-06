import { redirect } from 'next/navigation'

import FormClient from './_client/form'
import { getSession } from '@/app/_actions/session'

const LoginPage = async () => {
	const session = await getSession()
	if (session.is_authenticated) {
		redirect('/dashboard')
	}
	return (
		<>
			<div className="d-flex gap-1 column">
				LOGIN
				<FormClient />
			</div>
		</>
	)
}

export default LoginPage
