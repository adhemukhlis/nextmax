'use client'

import { FC, useTransition } from 'react'

import { login } from '@/app/_actions/auth'
import Button from '@/components/ui/button'
import Form from '@/components/ui/form'
import FormItem from '@/components/ui/form/item'
import { required } from '@/components/ui/form/rules'
import Input from '@/components/ui/input'
import { steganoEncodeToZeroWidthCharacter } from 'atlibx/crypto'

type Props = {
	data: {
		email: string
		password: string
	} | null
}

const FormClient: FC<Props> = ({ data }) => {
	const [isPending, startTransition] = useTransition()

	type FormValuesType = { email: string; password: string }

	const handleSubmit = (values: FormValuesType) => {
		const { email, password } = values
		const payloadStringify = JSON.stringify({ email, password })
		const payload = steganoEncodeToZeroWidthCharacter(payloadStringify, '')
		startTransition(() => {
			login(payload)
		})
	}

	return (
		<>
			<Form
				onSubmit={handleSubmit}
				initialValues={{ email: String(data?.email ?? ''), password: String(data?.password ?? '') }}>
				<FormItem
					name="email"
					rules={[required('email wajib diisi')]}>
					<Input
						type="email"
						label="Email"
					/>
				</FormItem>
				<FormItem
					name="password"
					rules={[required('Nama wajib diisi')]}>
					<Input
						label="Password"
						type="password"
					/>
				</FormItem>

				<Button
					htmlType="submit"
					variant="solid">
					{isPending ? 'tunggu' : 'Masuk'}
				</Button>
			</Form>
		</>
	)
}
export default FormClient
