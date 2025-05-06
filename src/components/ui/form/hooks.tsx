'use client'

import { useRef } from 'react'

import type { FormContextType } from './context'

export type FormInstance<T extends Record<string, any>> = {
	_internalSetContext: (ctx: FormContextType<T>) => void
	getFieldsValue: () => T
	setFieldsValue: (v: Partial<T>) => void
	setFieldValue: (name: keyof T, val: T[keyof T]) => void
	getFieldValue: (name: keyof T) => T[keyof T]
	resetFields: () => void
	validateAll: () => boolean
	values: () => T
	errors: () => Record<keyof T, string | null>
}

export function useForm<T extends Record<string, any>>() {
	const formRef = useRef<FormContextType<T> | null>(null)

	const getForm = () => {
		if (!formRef.current) {
			throw new Error('Form instance belum terhubung')
		}
		return formRef.current
	}

	const formInstance = {
		_internalSetContext: (ctx: FormContextType<T>) => {
			formRef.current = ctx
		},

		getFieldsValue: () => getForm().getFieldsValue(),
		setFieldsValue: (v: Partial<T>) => getForm().setFieldsValue(v),
		setFieldValue: (name: keyof T, val: T[keyof T]) => getForm().setFieldValue(name, val),
		getFieldValue: (name: keyof T) => getForm().getFieldValue(name),
		resetFields: () => getForm().resetFields(),
		validateAll: () => getForm().validateAll(),
		values: () => getForm().getFieldsValue(),
		errors: () => getForm().errors
	}

	return [formInstance] as const
}
