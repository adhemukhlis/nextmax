// the maximum number of characters that can be stored in a cookie => 4096 - cookie_name.length

'use server'
import { decrypt, encrypt } from 'atlibx/crypto'
import { cookies } from 'next/headers'

export const setCookie = async (cookie_name: string, duration: number, cookie_value: any) => {
	const cookieStore = await cookies()
	const maxAge = duration / 1000
	const stringifiedCookieValue = JSON.stringify(cookie_value)
	const encryptedCookieValue = await encrypt(stringifiedCookieValue, String(process.env.COOKIE_SECRET_KEY ?? ''))
	const URIValuesLength = encryptedCookieValue.isSuccess ? String(encryptedCookieValue?.result ?? '').length : 0
	if (URIValuesLength <= 4096 - cookie_name.length && URIValuesLength > 0) {
		cookieStore.set({
			name: cookie_name,
			httpOnly: true,
			path: '/',
			sameSite: 'lax',
			maxAge: maxAge,
			value: String(encryptedCookieValue?.result ?? '')
		})
		return 'ok'
	} else {
		return 'value_too_long'
	}
}
export const getCookie = async (cookie_name: string): Promise<any> => {
	const cookieStore = await cookies()
	const isCookieExist = cookieStore.has(cookie_name)
	if (isCookieExist) {
		const encryptedCookieValue = cookieStore.get(cookie_name)?.value
		const decryptedCookieValue = await decrypt(String(encryptedCookieValue ?? ''), String(process.env.COOKIE_SECRET_KEY ?? ''))
		const parsedCookieValue = decryptedCookieValue.isSuccess ? JSON.parse(decryptedCookieValue?.result ?? '') : {}
		return parsedCookieValue
	} else {
		return 'cookie_not_found'
	}
}

export const deleteCookie = async (cookie_name: string) => {
	const cookieStore = await cookies()

	const isCookieExist = cookieStore.has(cookie_name)
	if (isCookieExist) {
		cookieStore.delete(cookie_name)
		return 'ok'
	} else {
		return 'cookie_not_found'
	}
}
