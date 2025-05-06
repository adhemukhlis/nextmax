'use client'

import { FC, PropsWithChildren, useEffect, useRef, useState } from 'react'

import _style from './style.module.scss'
import ensureArray from '@/utils/ensure-array'

interface ContactProperty {
	name?: string[]
	email?: string
	tel?: string[]
	address?: string
	icon?: Blob
}

interface Navigator {
	contacts?: {
		select(properties: (keyof ContactProperty)[], options?: { multiple: boolean }): Promise<ContactProperty[]>
		getProperties: () => any[]
	}
}

type InputNumberProps = {
	name: string
	label: string
	type?: string
	id?: string
	minLength?: number
	value?: any
	onChange?: (val: string) => string
}

const nonDigitRegex = new RegExp('\\D', 'g')
const group = new RegExp('(\\d*)(\\d{3})(\\d{4})(\\d{4})$', '')

const InputNumber: FC<PropsWithChildren<InputNumberProps>> = ({ name, label, type = 'text', id, minLength, value, onChange = () => {} }) => {
	const isMounted = useRef(false)
	const [isSelectContactSupported, setIsSelectContactSupported] = useState(false)
	const [phoneNumber, setPhoneNumber] = useState({ tel: value, name: null })
	const [otherPhoneNumber, setOtherPhoneNumber] = useState([])
	const [supportedFeature, setSupportedFeature] = useState<any[]>([])

	const phoneNumberParser = (value = '') => {
		let result = String(value).replace(nonDigitRegex, '')
		if (String(result).startsWith('0')) {
			result = `62${result.slice(1, result.length)}`
		}
		return result
	}
	const getSupport = async () => {
		const supportedInstance = 'contacts' in navigator && 'ContactsManager' in window
		const supportedProperties = supportedInstance ? ensureArray(await (navigator as Navigator).contacts?.getProperties()) : []
		const supportedFeature = supportedProperties.includes('tel') && supportedProperties.includes('name')
		if (supportedFeature) {
			setIsSelectContactSupported(true)
		}
		setSupportedFeature(supportedProperties)
		// onGetSupport(supportedFeature)
	}
	// @ts-ignore
	const handleChange = (e) => {
		setPhoneNumber((prev) => ({ ...prev, tel: phoneNumberParser(e.target.value) }))
	}
	const phoneNumberFormatter = (phone = '') => phone.replace(nonDigitRegex, '').replace(group, (s, a, b, c, d) => `+${a} ${b}-${c}-${d}`)
	useEffect(() => {
		if (isMounted.current) {
			onChange(phoneNumberParser(phoneNumber.tel))
			// onChangePayload({ value: phoneNumberParser(phoneNumber.tel), display: phoneNumberFormatter(phoneNumber.tel) })
		}
	}, [phoneNumber.name, phoneNumber.tel])
	useEffect(() => {
		getSupport()
		isMounted.current = true
	}, [])

	const handleOpenContact = async () => {
		if (isSelectContactSupported) {
			try {
				// @ts-ignore
				const [contacts] = await (navigator as Navigator).contacts?.select(['name', 'tel'], { multiple: false })
				setPhoneNumber({ name: contacts?.name[0], tel: phoneNumberParser(contacts?.tel[0]) })
				if ((contacts?.tel || []).length > 1) {
					// @ts-ignore
					const _number = (contacts?.tel || []).map((val) => phoneNumberParser(val)).filter((x, i, a) => a.indexOf(x) == i)
					if (_number.length > 1) {
						setOtherPhoneNumber(_number)
					}
				} else {
					setOtherPhoneNumber([])
				}
			} catch (err) {
				return
			}
		}
	}

	return (
		<div className={_style['input-container']}>
			<input
				id={id}
				type={type}
				placeholder=" "
				name={name}
				minLength={minLength}
				required
			/>
			<label htmlFor={name}>{label}</label>
			<button onClick={handleOpenContact}>Pilih kontak</button>
			<button onClick={getSupport}>cek</button>
			<pre>{JSON.stringify(supportedFeature, null, '\t')}</pre>
		</div>
	)
}

export default InputNumber
