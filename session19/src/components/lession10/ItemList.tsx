import { useCallback, useState } from "react";
import Item from "./Item";

export const ItemList = () => {
	const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
	const handleSelected = useCallback((index: number) => {
		setSelectedIndex(index);
	}, []);
	return (
		<>
			{Array.from({ length: 100 }).map((_, index) => (
				<Item
					index={index}
					isSelected={selectedIndex === index}
					onSelect={() => handleSelected(index)}
				></Item>
			))}
		</>
	);
};
