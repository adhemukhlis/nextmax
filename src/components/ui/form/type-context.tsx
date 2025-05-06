'use client'

import { createContext, useContext } from 'react'

export const FormTypeContext = createContext<any>(null)

export const useFormType = <T extends Record<string, any>>() => {
	const ctx = useContext(FormTypeContext)
	if (!ctx) throw new Error('useFormType must be used inside Form')
	return ctx as T
}
