import ButtonBack from '@/components/buttons/back'
type DataSourceType = {
	'#': number
	item: string
	quantity: number
	price: string
}

type ColumnType = {
	dataIndex: keyof DataSourceType // Ensures only valid keys
	title: string
	scope?: string
}

const columns: ColumnType[] = [
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
			<div className="d-flex gap-1">
				<div
					className="scroll-x"
					style={{
						width: '100%'
					}}>
					<table>
						<thead>
							<tr>
								{columns.map((column, index) => (
									<th
										key={`header-${index}`}
										scope="col">
										{column.title}
									</th>
								))}
							</tr>
						</thead>
						<tbody>
							{dataSource.map((data: DataSourceType, index) => (
								<tr key={`row-${index}`}>
									{columns.map((column, _index) =>
										'scope' in column ? (
											<th
												key={`cell-${index}-${_index}`}
												scope="row">
												{data[column.dataIndex]}
											</th>
										) : (
											<td key={`cell-${index}-${_index}`}>{data[column.dataIndex]}</td>
										)
									)}
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	)
}

export default Page
