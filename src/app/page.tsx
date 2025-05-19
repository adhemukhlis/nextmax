import LinkLoading from '@/components/LinkLoading'
import ButtonLink from '@/components/ui/button-link'

const Home = () => {
	return (
		<div className="page align-center justify-center column gap-2">
			<h1 className="text-lg">NEXTMA✘</h1>
			<div className="d-flex gap-1">
				<ButtonLink to="/components">
					components <LinkLoading />
				</ButtonLink>
			</div>
		</div>
	)
}

export default Home
