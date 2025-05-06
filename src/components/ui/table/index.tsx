import { FC, PropsWithChildren } from 'react'

import { TableProps } from './type'

const Table: FC<PropsWithChildren<TableProps>> = ({ columns, dataSource }) => {
	return (
		<div className="d-flex gap-1 scroll-x">
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
					{dataSource.map((data, index) => (
						<tr key={`row-${index}`}>
							{columns.map((column, _index) =>
								'scope' in column ? (
									<th
										key={`cell-${index}-${_index}`}
										scope="row">
										{data[column.dataIndex]}
									</th>
								) : (
									<td
										key={`cell-${index}-${_index}`}
										{...{ scope: column.scope }}>
										{data[column.dataIndex]}
									</td>
								)
							)}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default Table
