import ButtonBack from '@/components/buttons/back'
import Button from '@/components/ui/button'

const Page = () => {
	return (
		<div className="page column gap-2 page-padding">
			<ButtonBack
				navigateTo="/components"
				label="button"
			/>
			<div className="d-flex gap-1">
				<Button variant="text">Text</Button>
				<Button variant="solid">Solid</Button>
				<Button variant="outline">Outline</Button>
				<Button variant="filled">Outline</Button>
			</div>
		</div>
	)
}

export default Page
