import { getRoutes } from '@/app/_actions/routes'

export const GET = async () => {
	const persistedRoutePaths = await getRoutes()
	return Response.json({ message: 'success', data: persistedRoutePaths })
}
