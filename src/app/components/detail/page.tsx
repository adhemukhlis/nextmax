import ButtonBack from '@/components/buttons/back'
import Detail from '@/components/ui/detail'

const Page = () => {
	return (
		<div className="page column gap-2 page-padding">
			<ButtonBack
				navigateTo="/components"
				label="detail"
			/>
			<div className="d-flex gap-1">
				<Detail label="Detail 1">
					<div
						className="d-flex align-center justify-center"
						style={{ height: '10rem', width: '14rem', color: '#FFF', backgroundColor: 'slategray' }}>
						Konten Boongan
					</div>
				</Detail>
			</div>
		</div>
	)
}
export default Page
