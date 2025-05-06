'use client'

import { useEffect, useTransition } from 'react'

import { login } from '@/app/_actions/auth'
import Button from '@/components/ui/button'
import Form from '@/components/ui/form'
import FormItem from '@/components/ui/form/item'
import { required } from '@/components/ui/form/rules'
import Input from '@/components/ui/input'
import { encodeToZeroWidthCharactersText } from '@/utils/crypto-zero/stegano-core'
import asyncLocalStorage from '@/utils/local-storage'

const FormClient = () => {
	const [isPending, startTransition] = useTransition()

	useEffect(() => {
		asyncLocalStorage.getItem('_rm').then((value: string) => {
			if (!!value) {
				console.info(value)
			}
		})
	}, [])

	type FormValuesType = { username: string; password: string }

	const handleSubmit = (values: FormValuesType) => {
		const { username, password } = values
		// if (!!remember_me) {
		// 	asyncLocalStorage.setItem('_rm', username)
		// } else {
		// 	asyncLocalStorage.setItem('_rm', '')
		// }
		const payloadStringify = JSON.stringify({ username, password })
		const payload = encodeToZeroWidthCharactersText(payloadStringify, '')
		startTransition(() => {
			login(payload).then((res: { status: number; message: string } | undefined) => {
				if (res !== undefined && 'status' in res) {
					//
				}
			})
		})
	}
	return (
		<>
			<div className="d-flex gap-1 column">
				<Form<FormValuesType>
					onSubmit={handleSubmit}
					initialValues={{ username: '', password: '' }}>
					<FormItem
						name="username"
						rules={[required('Nama wajib diisi')]}>
						<Input
							name="username"
							label="Username"
						/>
					</FormItem>
					<FormItem
						name="password"
						rules={[required('Nama wajib diisi')]}>
						<Input
							name="password"
							label="password"
							type="password"
						/>
					</FormItem>

					<Button htmlType="submit">{isPending ? 'tunggu' : 'Masuk'}</Button>
				</Form>
			</div>
		</>
	)
}
export default FormClient
