import js from '@eslint/js'
import next from '@next/eslint-plugin-next'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'

const config = {
	plugins: {
		react,
		reactHooks
	},
	rules: {
		// Add your custom rules here
	}
}

export default [js.configs.recommended, next.configs.recommended, config]
