'use client'

import { createContext, useContext } from 'react'

type ValidateFn<T> = (value: T[keyof T]) => string | null

export type FormContextType<T> = {
	values: T
	errors: Record<keyof T, string | null>

	setFieldValue: (name: keyof T, value: T[keyof T]) => void
	getFieldValue: (name: keyof T) => T[keyof T]
	registerValidation: (name: keyof T, validate: ValidateFn<T>) => void
	validateAll: () => boolean
	getFieldsValue: () => T
	setFieldsValue: (newValues: Partial<T>) => void
	resetFields: () => void
}

export const FormContext = createContext<FormContextType<any> | null>(null)

export function useFormContext<T>() {
	const ctx = useContext(FormContext)
	if (!ctx) throw new Error('useFormContext must be used inside Form')
	return ctx as FormContextType<T>
}
