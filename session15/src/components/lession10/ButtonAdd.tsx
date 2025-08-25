import { Component } from "react";

interface PropsType {
	openModalAdd: () => void;
	resetInput: () => void;
}

export default class ButtonAdd extends Component<PropsType> {
	render() {
		return (
			<>
				<button
					onClick={() => {
						this.props.openModalAdd();
						this.props.resetInput();
					}}
					className="btn btn-primary"
				>
					Thêm sinh viên mới
				</button>
			</>
		);
	}
}
