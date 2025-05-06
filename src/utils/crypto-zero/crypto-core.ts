interface Result {
	isSuccess: boolean
	message: string
	result: string | null
}

const deriveKeyFromPassphrase = async (passphrase: string, salt: Uint8Array, iterations: number = 1, hash: string = 'SHA-256'): Promise<CryptoKey> => {
	const encoder = new TextEncoder()
	const passphraseKey = await crypto.subtle.importKey('raw', encoder.encode(passphrase), { name: 'PBKDF2' }, false, ['deriveKey'])

	return crypto.subtle.deriveKey(
		{
			name: 'PBKDF2',
			salt: salt,
			iterations: iterations,
			hash: hash
		},
		passphraseKey,
		{
			name: 'AES-GCM',
			length: 256
		},
		true,
		['encrypt', 'decrypt']
	)
}

const base64ToUint8Array = (base64: string): Uint8Array => {
	return new Uint8Array(Buffer.from(base64, 'base64'))
}

const uint8ArrayToBase64 = (uint8Array: Uint8Array): string => {
	return Buffer.from(uint8Array).toString('base64')
}

export const encrypt = async (plaintext: string, passphrase: string): Promise<Result> => {
	try {
		const encoder = new TextEncoder()
		const data = encoder.encode(plaintext)

		const salt = crypto.getRandomValues(new Uint8Array(16))
		const iv = crypto.getRandomValues(new Uint8Array(12))

		const key = await deriveKeyFromPassphrase(passphrase, salt, 1)

		const cipherText = await crypto.subtle.encrypt(
			{
				name: 'AES-GCM',
				iv: iv
			},
			key,
			data
		)

		// const encryptedBytes = new Uint8Array(cipherText)

		// const tag = encryptedBytes.slice(-16)
		// console.info('tag:', uint8ArrayToBase64(tag))

		const cipherTextBase64 = Buffer.from(new Uint8Array(cipherText)).toString('base64')
		const saltBase64 = uint8ArrayToBase64(salt)
		const ivBase64 = uint8ArrayToBase64(iv)
		const result = `${ivBase64}-${saltBase64}-${cipherTextBase64}`
		return {
			isSuccess: true,
			message: 'Encryption successful',
			result
		}
	} catch (error: any) {
		return {
			isSuccess: false,
			message: error?.message || 'Encryption failed',
			result: null
		}
	}
}

export const decrypt = async (encrypted: string, passphrase: string): Promise<Result> => {
	try {
		const [ivBase64, saltBase64, cipherTextBase64] = encrypted.split('-')
		const iv = base64ToUint8Array(ivBase64)
		const salt = base64ToUint8Array(saltBase64)
		const cipherText = base64ToUint8Array(cipherTextBase64)

		const key = await deriveKeyFromPassphrase(passphrase, salt, 1)

		const decrypted = await crypto.subtle.decrypt(
			{
				name: 'AES-GCM',
				iv: iv
			},
			key,
			cipherText
		)

		const decoder = new TextDecoder()
		return {
			isSuccess: true,
			message: 'Decryption successful',
			result: decoder.decode(decrypted)
		}
	} catch (error: any) {
		return {
			isSuccess: false,
			message: error?.message || 'Decryption failed',
			result: null
		}
	}
}
