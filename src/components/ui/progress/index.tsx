import { FC, PropsWithChildren } from 'react'
type ProgressProps = {
	max: number
	value: number
}
const Progress: FC<PropsWithChildren<ProgressProps>> = ({ max, value }) => {
	return (
		<progress
			max={max}
			value={value}>
			{value}%
		</progress>
	)
}
export default Progress
