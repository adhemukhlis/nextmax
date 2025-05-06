'use client'

import { FormEvent, PropsWithChildren, useRef, useState } from 'react'

import { FormContext, FormContextType } from './context'
import { FormInstance } from './hooks'
import { FormTypeContext } from './type-context'

type FormProps<T extends Record<string, any>> = {
	form?: FormInstance<T>
	onSubmit?: (values: T) => void
	initialValues?: Partial<T>
}

const Form = <T extends Record<string, any>>({ children, onSubmit = () => {}, initialValues = {}, form }: PropsWithChildren<FormProps<T>>) => {
	const [values, setValues] = useState<T>({ ...initialValues } as T)
	const [errors, setErrors] = useState<Record<keyof T, string | null>>({} as any)
	const validators = useRef<Partial<Record<keyof T, (value: T[keyof T]) => string | null>>>({})

	const setFieldValue = (name: keyof T, value: T[keyof T]) => {
		setValues((prev) => ({ ...prev, [name]: value }))
	}

	const getFieldValue = (name: keyof T) => values[name]

	const registerValidation = (name: keyof T, validate: (value: T[keyof T]) => string | null) => {
		validators.current[name] = validate
	}

	const validateAll = () => {
		const newErrors = {} as Record<keyof T, string | null>
		for (const key in validators.current) {
			const error = validators.current[key]?.(values[key])
			newErrors[key as keyof T] = error ?? null
		}
		setErrors(newErrors)
		return Object.values(newErrors).every((e) => e === null)
	}

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault()
		if (validateAll()) {
			onSubmit(values)
		}
	}

	const getFieldsValue = () => values

	const setFieldsValue = (newValues: Partial<T>) => {
		setValues((prev) => ({ ...prev, ...newValues }))
	}

	const resetFields = () => {
		setValues({ ...initialValues } as T)
		setErrors({} as any)
	}

	const contextValue: FormContextType<T> = {
		values,
		errors,
		setFieldValue,
		getFieldValue,
		registerValidation,
		validateAll,
		getFieldsValue,
		setFieldsValue,
		resetFields
	}

	if (form) {
		form._internalSetContext(contextValue)
	}
	return (
		<FormTypeContext.Provider value={values}>
			<FormContext.Provider value={contextValue}>
				<form onSubmit={handleSubmit}>{children}</form>
			</FormContext.Provider>
		</FormTypeContext.Provider>
	)
}

export default Form
