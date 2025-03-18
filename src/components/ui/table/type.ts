export type RowType = {
	[key: string]: any
}

export type ColType = {
	title: string
	dataIndex: string
	scope?: 'row' | 'col'
}

export type TableProps = {
	dataSource: RowType[]
	columns: ColType[]
}
