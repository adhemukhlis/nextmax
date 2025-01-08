import Link from 'next/link'

const Page = () => {
	return (
		<div className="page column gap-2 page-padding">
			<div className="d-flex align-center gap-1">
				<Link
					href="/"
					className="button-link">
					←
				</Link>
				<h1>components</h1>
			</div>
			<div className="d-flex gap-1">
				<Link
					href="/components/button"
					className="button-link">
					Button
				</Link>
				<Link
					href="/components/table"
					className="button-link">
					Table
				</Link>
			</div>
		</div>
	)
}

export default Page
