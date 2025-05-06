import Link from 'next/link'

import ButtonBack from '@/components/buttons/back'

const PageComponent = () => {
	return (
		<div className="page column gap-2 page-padding">
			<ButtonBack
				navigateTo="/components"
				label="modal"
			/>
			<div className="d-flex gap-1">
				<Link
					href="/components/modal/detail"
					className="button-link">
					Open Modal
				</Link>
			</div>
		</div>
	)
}

export default PageComponent
