import Link from 'next/link'

import ButtonBack from '@/components/buttons/back'

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
					prefetch={true}
					className="button-link">
					Button
				</Link>
				<Link
					href="/components/table"
					prefetch={true}
					className="button-link">
					Table
				</Link>
				<Link
					href="/components/modal"
					prefetch={true}
					className="button-link">
					Modal
				</Link>
				<Link
					href="/components/input"
					prefetch={true}
					className="button-link">
					Input
				</Link>
				<Link
					href="/components/group"
					prefetch={true}
					className="button-link">
					Group
				</Link>
				<Link
					href="/components/auto-complete"
					prefetch={true}
					className="button-link">
					Auto Complete
				</Link>
				<Link
					href="/components/detail"
					prefetch={true}
					className="button-link">
					Detail
				</Link>
				<Link
					href="/components/typography"
					prefetch={true}
					className="button-link">
					Typography
				</Link>
				<Link
					href="/components/meter"
					prefetch={true}
					className="button-link">
					Meter
				</Link>
				<Link
					href="/components/progress"
					prefetch={true}
					className="button-link">
					Progress
				</Link>
				<Link
					href="/components/select"
					prefetch={true}
					className="button-link">
					Select
				</Link>
				<Link
					href="/components/color"
					prefetch={true}
					className="button-link">
					Color
				</Link>
				<Link
					href="/components/checkbox"
					prefetch={true}
					className="button-link">
					Checkbox
				</Link>
				<Link
					href="/components/datepicker"
					prefetch={true}
					className="button-link">
					Datepicker
				</Link>
				<Link
					href="/components/radio"
					prefetch={true}
					className="button-link">
					Radio
				</Link>
				<Link
					href="/components/range"
					prefetch={true}
					className="button-link">
					Range
				</Link>
			</div>
		</div>
	)
}

export default Page
