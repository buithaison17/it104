import { Component } from "react";

export default class Search extends Component {
	render() {
		return (
			<>
				<input
					type="text"
					className="form-control w-25"
					placeholder="Tìm kiếm theo email"
				/>
			</>
		);
	}
}
