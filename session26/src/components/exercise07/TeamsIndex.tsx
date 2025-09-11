import { Link } from "react-router-dom";

export const TeamsIndex = () => {
	return (
		<div>
			<h2>Danh sách các Team</h2>
			<ul>
				<li>
					<Link to="1">Team 1</Link>
				</li>
				<li>
					<Link to="2">Team 2</Link>
				</li>
				<li>
					<Link to="3">Team 3</Link>
				</li>
			</ul>
		</div>
	);
};
