import { getRoutes } from '@/app/_actions/routes'

export const GET = async () => {
	const a = await getRoutes()
	return Response.json({ message: 'success', data: a })
}
