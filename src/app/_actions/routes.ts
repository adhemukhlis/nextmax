'use server'
import fs from 'node:fs'
import path from 'node:path'
import { cache } from 'react'

type MenuItem = {
	key: string
	label: string
	children?: MenuItem[]
}

export const getRoutes = cache(async () => {
	const targetDir = path.join(process.cwd(), 'src/app/(protected)')
	console.info('👻', targetDir.toString())
	const foundFiles = findFileRecursive(targetDir, 'page.tsx')
	return foundFiles.map((item) => {
		const sliced = item.split('/')
		const result = sliced.slice(0, sliced.length - 1).join('/')
		return result
	})
})

export const _getMenus = cache(async () => {
	const targetDir = path.join(process.cwd(), 'src/app/(protected)')
	const foundFiles = findFileRecursive(targetDir, 'page.tsx')
	return transformRoutesToMenus(foundFiles)
})

export const getMenus = async () => []

const transformRoutesToMenus = (routes: string[]): MenuItem[] => {
	const omitKeys = ['/profile']
	const menus: MenuItem[] = []
	const map: Record<string, MenuItem> = {}

	routes.forEach((route) => {
		const parts = route.split('/').filter(Boolean)
		const [first, second] = parts

		if (parts.length >= 2 && !omitKeys.some((omitKey) => route.startsWith(omitKey))) {
			const key = `/${first}`
			const label = first

			if (!map[key]) {
				map[key] = { key, label }
				menus.push(map[key])
			}

			if (parts.length > 2) {
				const secondKey = `/${first}/${second}`
				const secondLabel = second
				if (!map[key].children) {
					map[key].children = []
				}
				if (!map[secondKey]) {
					map[secondKey] = { key: secondKey, label: secondLabel }
					map[key].children!.push(map[secondKey])
				}
			}
		}
	})

	return menus
}

const findFileRecursive = (dir: string, filename: string): string[] => {
	const results: string[] = []

	function searchDirectory(currentDir: string): void {
		const items = fs.readdirSync(currentDir)
		items.forEach((item) => {
			const fullPath = path.join(currentDir, item)
			const stat = fs.statSync(fullPath)
			if (stat.isDirectory()) {
				searchDirectory(fullPath)
			} else if (stat.isFile() && path.basename(fullPath) === filename) {
				results.push(fullPath.slice(dir.length))
			}
		})
	}

	searchDirectory(dir)
	return results
}
