import { FC, PropsWithChildren } from 'react'
type MeterProps = {
	min: number
	max: number
	low?: number
	high?: number
	optimum?: number
	value: number
}
const Meter: FC<PropsWithChildren<MeterProps>> = ({ min, max, low, high, optimum, value }) => {
	return (
		<meter
			min={min}
			max={max}
			low={low}
			high={high}
			optimum={optimum}
			value={value}>
			at {value}/{max}
		</meter>
	)
}
export default Meter
