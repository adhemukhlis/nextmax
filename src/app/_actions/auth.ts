'use server'
import { steganoDecodeFromZeroWidthCharacter } from 'atlibx/crypto'
import { redirect } from 'next/navigation'

import { destroySession, setSession } from './session'
type User = {
	email: string
	password: string
}
export const login = async (payload: string) => {
	const values = steganoDecodeFromZeroWidthCharacter(payload, '')

	const body: User = JSON.parse(values)

	const { email, password: _password } = body
	const username = email.split('@')[0]
	// try {
	const user: {
		user_id: string
		email: string
		username: string
		full_name: string
		profile_picture: string
		is_authenticated: boolean
	} | null = {
		user_id: '0',
		email,
		username,
		full_name: 'Common User',
		profile_picture: `https://api.dicebear.com/9.x/big-smile/svg?seed=${username}`,
		is_authenticated: true
	}
	if (user !== null) {
		const { user_id, email, full_name, profile_picture, is_authenticated } = user
		await setSession({
			user_id,
			email,
			username,
			full_name,
			profile_picture,
			is_authenticated
		})
		if (is_authenticated) {
			redirect('/dashboard')
		} else {
			return {
				status: 401,
				message: 'username or password miss match'
			}
		}
	} else {
		return {
			status: 401,
			message: 'username or password miss match'
		}
	}
	// } catch (error: { status: number; message: string } | any) {
	// 	console.error(error)
	// 	return { status: 500, message: error?.message ?? 'server error' }
	// }
	// finally {
	// 	if (isAuthenticated) {
	// 		redirect('/dashboard')
	// 	}
	// }
}

export const logout = async () => {
	const destroyResult = await destroySession()
	if (['ok', 'cookie_not_found'].includes(destroyResult)) {
		redirect('/login')
	}
}
