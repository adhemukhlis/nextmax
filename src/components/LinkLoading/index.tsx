'use client'

import { useLinkStatus } from 'next/link'

import Spinner from '../ui/spinner'

const LinkLoading = () => {
	const { pending } = useLinkStatus()
	return pending ? <Spinner /> : null
}

export default LinkLoading
