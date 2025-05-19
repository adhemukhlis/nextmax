import ButtonBack from '@/components/buttons/back'
import VirtualList from '@/components/ui/virtualized'

const Page = () => {
	const items = Array.from({ length: 100000 }, (_, i) => `Item #${i + 1}`)
	return (
		<div className="page column gap-2 page-padding">
			<ButtonBack
				navigateTo="/components"
				label="virtual list"
			/>
			<VirtualList
				height={500}
				itemHeight={35}
				data={items}
			/>
		</div>
	)
}

export default Page
