import LogoutButton from './_client/logout-button'
import { getSession } from '@/app/_actions/session'
import ImageBasic from '@/components/ui/image'

const DashboardPage = async () => {
	const session = await getSession()

	return (
		<>
			<div className="page page-padding column gap-1">
				<div className="d-flex gap-1">
					<h1 className="flex-1">Dashboard</h1>
					<LogoutButton />
				</div>
				<div className="d-flex column gap-1 flex-1 align-center justify-center">
					<div
						style={{
							alignSelf: 'center',
							height: '4rem',
							aspectRatio: '1/1',
							backgroundColor: 'rgba(0,0,0,0.08)',
							borderRadius: '50%',
							overflow: 'hidden'
						}}>
						<ImageBasic
							src={session.profile_picture}
							borderRadius="50%"
						/>
					</div>
					<span>{session.username}</span>
				</div>
			</div>
		</>
	)
}

export default DashboardPage
