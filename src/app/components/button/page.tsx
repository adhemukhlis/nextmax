import Link from 'next/link'

const Page = () => {
	return (
		<div className="page column gap-2 page-padding">
			<div className="d-flex align-center gap-1">
				<Link
					href="/components"
					className="button-link flip">
					➜
				</Link>
				<h1>button</h1>
			</div>
			<div className="d-flex gap-1">
				<button className="button">Button</button>
				<button className="button outline">Outline</button>
				<button className="button primary">Primary</button>
			</div>
		</div>
	)
}

export default Page
