'use client'

import { useTransition } from 'react'

import { logout } from '@/app/_actions/auth'
import Button from '@/components/ui/button'

const LogoutButton = () => {
	const [logoutLoading, logoutTransition] = useTransition()

	const handleLogOut = async () => {
		logoutTransition(() => {
			logout()
		})
	}

	return <Button onClick={handleLogOut}>{logoutLoading ? 'tunggu' : 'Logout'}</Button>
}

export default LogoutButton
