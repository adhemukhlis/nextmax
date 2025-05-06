import js from '@eslint/js'
import next from '@next/eslint-plugin-next'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import pluginImport from 'eslint-plugin-import'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsparser from '@typescript-eslint/parser'
import globals from 'globals'

const config = [
	{
		ignores: ['**/node_modules/**', '**/.next/**', '**/.git/**', '**/.vscode/**']
	},
	{
		files: ['**/*.{js,ts,tsx}'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			parser: tsparser,
			globals: {
				...globals.browser,
				...globals.node
				// ...js.configs.recommended.languageOptions?.globals,
				// console: 'readonly',
				// Browser/Web APIs
				// window: 'readonly',
				// document: 'readonly',
				// navigator: 'readonly',
				// Blob: 'readonly',
				// Headers: 'readonly',
				// TextEncoder: 'readonly',
				// TextDecoder: 'readonly',
				// CryptoKey: 'readonly',
				// localStorage: 'readonly',
				// HTMLInputElement: 'readonly',

				// Edge/Web Crypto
				// crypto: 'readonly',

				// Node.js
				// process: 'readonly',
				// Buffer: 'readonly',
				// __dirname: 'readonly',
				// __filename: 'readonly',
				// module: 'readonly',
				// require: 'readonly',
				// exports: 'readonly'
			}
		},
		plugins: {
			react,
			'react-hooks': reactHooks,
			import: pluginImport,
			'@typescript-eslint': tseslint,
			'@next/next': next
		},
		rules: {
			...js.configs.recommended.rules,
			...react.configs.recommended.rules,
			...next.configs.recommended.rules, // <- ini udah bentuk object, bisa di-spread

			'react/react-in-jsx-scope': 'off',
			'no-template-curly-in-string': 'off',
			'no-misleading-character-class': 'off',
			'no-unsafe-optional-chaining': 'off',
			'no-undef': 'error',
			'no-mixed-spaces-and-tabs': 'off',
			'no-unused-vars': 'off',
			'no-dupe-keys': 'error',
			'react/prop-types': 'off',
			'react/jsx-key': 'error',
			'no-console': ['warn', { allow: ['warn', 'error', 'info', 'table'] }],
			'react/display-name': 'off',
			'no-extra-boolean-cast': 'off',
			'react-hooks/exhaustive-deps': 'off',
			'prefer-const': 'warn',
			'no-control-regex': 'off',
			'@typescript-eslint/no-unused-vars': [
				'warn',
				{
					vars: 'all',
					varsIgnorePattern: '^_',
					args: 'after-used',
					argsIgnorePattern: '^_'
				}
			],
			'sort-imports': [
				'error',
				{
					ignoreCase: true,
					ignoreDeclarationSort: true,
					ignoreMemberSort: false,
					allowSeparatedGroups: false
				}
			],
			'import/order': [
				'error',
				{
					groups: [['builtin', 'external'], ['internal', 'parent', 'sibling', 'index'], 'type', 'object', 'unknown'],
					alphabetize: { order: 'asc', caseInsensitive: true },
					'newlines-between': 'always',
					pathGroups: [
						{
							pattern: '@/**',
							group: 'internal'
						}
					]
				}
			]
		},
		settings: {
			react: {
				version: 'detect'
			}
		}
	}
]

export default config
