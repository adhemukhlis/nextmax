import ButtonBack from '@/components/buttons/back'
import Group from '@/components/ui/group'

const Page = () => {
	return (
		<div className="page column gap-2 page-padding">
			<ButtonBack
				navigateTo="/components"
				label="group"
			/>
			<div className="d-flex gap-1">
				<Group label="Group 1">
					<div
						className="d-flex align-center justify-center"
						style={{ height: '10rem', width: '14rem', color: '#FFF', backgroundColor: 'slategray' }}>
						Konten Boongan
					</div>
				</Group>
			</div>
		</div>
	)
}
export default Page
