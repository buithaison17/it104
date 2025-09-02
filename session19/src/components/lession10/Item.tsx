import React from "react";

interface ItemProps {
	index: number;
	isSelected: boolean;
	onSelect: (index: number) => void;
}

const Item: React.FC<ItemProps> = ({ index, isSelected, onSelect }) => {
	return (
		<div style={{ color: isSelected ? "red" : "black" }}>
			Item {index + 1}
			<button onClick={() => onSelect(index)}>Chọn</button>
		</div>
	);
};

export default React.memo(Item);
