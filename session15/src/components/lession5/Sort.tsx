import { Component } from 'react'

export default class Sort extends Component {
	render() {
		return (
			<>
				<select className="form-control w-25" id="">
						<option selected value="age">
							Sắp xếp theo tuổi
						</option>
					</select>
			</>
		)
	}
}
