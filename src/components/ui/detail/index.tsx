import { FC, PropsWithChildren } from 'react'
type DetailProps = {
	label: string
}
const Detail: FC<PropsWithChildren<DetailProps>> = ({ children, label }) => {
	return (
		<details>
			<summary>{label}</summary>
			{children}
		</details>
	)
}
export default Detail
