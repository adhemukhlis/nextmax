import { ReactNode } from 'react'

const Layout = async ({ children, modal }: Readonly<{ children: ReactNode; modal: ReactNode }>) => {
	return (
		<div style={{ display: 'flex', flex: 1 }}>
			{children}
			{modal}
		</div>
	)
}
export default Layout
