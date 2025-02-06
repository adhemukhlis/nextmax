import ButtonBack from '@/components/buttons/back'
import Link from 'next/link'

const Page = () => {
	return (
		<div className="page column gap-2 page-padding">
			<ButtonBack
				navigateTo="/"
				label="components"
			/>
			<div className="d-flex gap-1 wrap">
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
				<Link
					href="/components/modal"
					className="button-link">
					Modal
				</Link>
				<Link
					href="/components/input"
					className="button-link">
					Input
				</Link>
				<Link
					href="/components/group"
					className="button-link">
					Group
				</Link>
				<Link
					href="/components/auto-complete"
					className="button-link">
					Auto Complete
				</Link>
				<Link
					href="/components/detail"
					className="button-link">
					Detail
				</Link>
				<Link
					href="/components/typography"
					className="button-link">
					Typography
				</Link>
				<Link
					href="/components/meter"
					className="button-link">
					Meter
				</Link>
				<Link
					href="/components/progress"
					className="button-link">
					Progress
				</Link>
				<Link
					href="/components/select"
					className="button-link">
					Select
				</Link>
			</div>
		</div>
	)
}

export default Page
