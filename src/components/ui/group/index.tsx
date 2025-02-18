import { FC, PropsWithChildren } from 'react'
import _style from './style.module.scss'
type GroupProps = {
	label: string
}
const Group: FC<PropsWithChildren<GroupProps>> = ({ children, label }) => {
	return (
		<fieldset className={_style['group-section']}>
			<legend>{label}</legend>
			{children}
		</fieldset>
	)
}
export default Group
