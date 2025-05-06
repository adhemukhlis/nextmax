'use client'

import { ChangeEvent, cloneElement, PropsWithChildren, useEffect } from 'react'

import { useFormContext } from './context'
import { useFormType } from './type-context'

const validateField = (rules?: Array<(val: any) => string | null>) => {
	return (val: any) => {
		if (!rules) return null
		for (const rule of rules) {
			const result = rule(val)
			if (result) return result
		}
		return null
	}
}

const FormItem = <K extends string>({
	name,
	label,
	rules = [],
	children
}: PropsWithChildren<{
	name: K
	label?: string
	rules?: Array<(value: any) => string | null>
}>) => {
	const _values = useFormType<Record<K, any>>() // infer T
	const { errors, setFieldValue, getFieldValue, registerValidation } = useFormContext<typeof _values>()

	useEffect(() => {
		registerValidation(name, validateField(rules))
	}, [name, rules, registerValidation])

	const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		setFieldValue(name, e.target.value)
	}

	const value = getFieldValue(name) ?? ''
	const error = errors[name]

	const isElement = children && typeof children === 'object' && 'type' in children

	const childWithProps = isElement
		? (children as any).type === 'select'
			? cloneElement(children as any, {
					name,
					value,
					onChange: handleChange
				})
			: cloneElement(children as any, {
					name,
					value,
					onChange: handleChange
				})
		: children

	return (
		<div style={{ marginBottom: '1rem' }}>
			{label && <label>{label}</label>}
			{childWithProps}
			{error && <div style={{ color: 'red', fontSize: '0.875rem' }}>{error}</div>}
		</div>
	)
}

export default FormItem
