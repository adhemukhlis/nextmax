import { FC, PropsWithChildren } from 'react'
type GroupProps = {
	label: string
}
const Group: FC<PropsWithChildren<GroupProps>> = ({ children, label }) => {
	return (
		<fieldset>
			<legend>{label}</legend>
			{children}
		</fieldset>
	)
}
export default Group
