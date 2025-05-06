'use server'

import dayjs from 'dayjs'
import { redirect } from 'next/navigation'

import { deleteCookie, getCookie, setCookie } from './cookie'

type SessionType = {
	user_id: string
	email: string
	username: string
	full_name: string
	profile_picture: string
	is_authenticated: boolean
	expired_at?: string
}

export const setSession = async ({ user_id, email, full_name, username, is_authenticated, profile_picture }: SessionType) => {
	const SESSION_AGE = Number(process.env.SESSION_AGE) || 60 * 60 * 1000
	const duration = SESSION_AGE
	const expiredAt = new Date(new Date().getTime() + duration).toISOString()
	const session: SessionType = {
		user_id,
		email,
		username,
		full_name,
		profile_picture,
		is_authenticated,
		expired_at: expiredAt
	}
	await setCookie('session', duration, session)
}

export const getSession = async () => {
	return await getCookie('session')
}

export const destroySession = async () => {
	return await deleteCookie('session')
}

export const getSessionStatus = async () => {
	const session = await getCookie('session')

	if (session !== 'cookie_not_found') {
		const remainingTime = dayjs(session?.expired_at ?? '').diff(dayjs(), 'millisecond')
		return {
			isLoggedIn: true,
			remainingTime
		}
	} else {
		return {
			isLoggedIn: false,
			remainingTime: null
		}
	}
}

export const validateSession = async () => {
	const session = await getCookie('session')
	if (session === 'cookie_not_found') {
		redirect('/login')
	}
}
