import ButtonBack from '@/components/buttons/back'
import Input from '@/components/ui/input'
// import InputNumber from '@/components/ui/input-number'


const Page = () => {
	return (
		<div className="page column gap-2 page-padding">
			<ButtonBack
				navigateTo="/components"
				label="input"
			/>
			<div className="d-flex gap-1 column">
				<Input
					name="full_name"
					label="Full Name"
				/>
				<Input
					type="email"
					name="email"
					label="Email"
				/>
				<Input
					type="password"
					name="current-password"
					id="current-password"
					label="Password"
					minLength={8}
				/>
				<Input
					type="number"
					name="quantity"
					label="Quantity"
				/>
				<input
					type="file"
					id="avatar"
					name="avatar"
					accept="image/png, image/jpeg"
				/>
				{/* <InputNumber
					label="Phone"
					name="phone"
				/> */}
			</div>
		</div>
	)
}
export default Page
