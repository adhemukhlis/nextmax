import { redirect } from 'next/navigation'

import FormClient from './_client/form'
import { getSession } from '@/app/_actions/session'

const LoginPage = async () => {
	const session = await getSession()
	if (session.is_authenticated) {
		redirect('/dashboard')
	}

	const data =
		process.env.NODE_ENV === 'development'
			? {
					email: String(process.env.USER_EMAIL ?? ''),
					password: String(process.env.USER_PASSWORD ?? '')
				}
			: null

	return (
		<>
			<div className="column page align-center justify-center gap-1">
				<h1>LOGIN</h1>
				<FormClient data={data} />
			</div>
		</>
	)
}

export default LoginPage
