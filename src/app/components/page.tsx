import ButtonBack from '@/components/buttons/back'
import ButtonLink from '@/components/ui/button-link'

const Page = () => {
	return (
		<div className="page column gap-2 page-padding">
			<ButtonBack
				navigateTo="/"
				label="components"
			/>
			<div className="d-flex gap-1 wrap">
				<ButtonLink to="/components/button">Button</ButtonLink>
				<ButtonLink to="/components/table">Table</ButtonLink>
				<ButtonLink to="/components/modal">Modal</ButtonLink>
				<ButtonLink to="/components/input">Input</ButtonLink>
				<ButtonLink to="/components/group">Group</ButtonLink>
				<ButtonLink to="/components/auto-complete">Auto Complete</ButtonLink>
				<ButtonLink to="/components/detail">Detail</ButtonLink>
				<ButtonLink to="/components/typography">Typography</ButtonLink>
				<ButtonLink to="/components/meter">Meter</ButtonLink>
				<ButtonLink to="/components/progress">Progress</ButtonLink>
				<ButtonLink to="/components/select">Select</ButtonLink>
				<ButtonLink to="/components/color">Color</ButtonLink>
				<ButtonLink to="/components/checkbox">Checkbox</ButtonLink>
				<ButtonLink to="/components/datepicker">Datepicker</ButtonLink>
				<ButtonLink to="/components/radio">Radio</ButtonLink>
				<ButtonLink to="/components/range">Range</ButtonLink>
				<ButtonLink to="/components/virtual-list">Virtual List</ButtonLink>
			</div>
		</div>
	)
}

export default Page
