import Link from 'next/link'

const Home = () => {
	return (
		<div className="page align-center justify-center column gap-2">
			<h1 className="text-lg">NEXTMA✘</h1>
			<div className="d-flex gap-1">
				<Link
					href="/components"
					prefetch={true}
					className="button-link">
					components
				</Link>
			</div>
		</div>
	)
}

export default Home
