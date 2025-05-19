import { FC, PropsWithChildren } from 'react'

import ButtonLink from '@/components/ui/button-link'
type ButtonBackProps = {
	navigateTo: string
	label: string
}
const ButtonBack: FC<PropsWithChildren<ButtonBackProps>> = ({ navigateTo, label }) => {
	return (
		<div className="d-flex align-center gap-1">
			<ButtonLink to={navigateTo}>➜</ButtonLink>
			<h1>{label}</h1>
		</div>
	)
}
export default ButtonBack
