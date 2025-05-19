import ButtonBack from '@/components/buttons/back'
import ButtonLink from '@/components/ui/button-link'

const PageComponent = () => {
	return (
		<div className="page column gap-2 page-padding">
			<ButtonBack
				navigateTo="/components"
				label="modal"
			/>
			<div className="d-flex gap-1">
				<ButtonLink to="/components/modal/detail">Open Modal</ButtonLink>
			</div>
		</div>
	)
}

export default PageComponent
