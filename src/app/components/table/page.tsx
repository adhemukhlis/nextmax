import ButtonBack from '@/components/buttons/back'
import Table from '@/components/ui/table'
import { ColType } from '@/components/ui/table/type'
type DataSourceType = {
	'#': number
	item: string
	quantity: number
	price: string
}

const columns: ColType[] = [
	{
		dataIndex: '#',
		scope: 'col',
		title: '#'
	},
	{
		dataIndex: 'item',
		title: 'Item'
	},
	{
		dataIndex: 'quantity',
		title: 'QTY'
	},
	{
		dataIndex: 'price',
		title: 'Price'
	}
]

const dataSource: DataSourceType[] = Array.from(Array(16).keys()).map((value) => ({
	'#': value + 1,
	item: `Apple-${value}`,
	quantity: Math.floor(Math.random() * 100),
	price: `$${Math.floor(Math.random() * 1000)}`
}))

const Page = () => {
	return (
		<div className="page column gap-2 page-padding">
			<ButtonBack
				navigateTo="/components"
				label="table"
			/>
			<Table
				columns={columns}
				dataSource={dataSource}
			/>
		</div>
	)
}

export default Page
