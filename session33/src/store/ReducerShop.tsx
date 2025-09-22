export interface Product {
	id: number;
	img: string;
	name: string;
	description: string;
	price: number;
}

interface StateType {
	products: Product[];
}

const initialState: StateType = {
	products: [
		{
			id: 1,
			img: "https://cdn.attractionsvietnam.com/uploads/2023/12/mixed-pizza-with-various-ingridients-1-1024x682.jpg",
			name: "Pizza",
			description:
				"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus architecto quasi, necessitatibus quos rerum sint",
			price: 30,
		},
		{
			id: 2,
			name: "Hamburger",
			img: "https://reviewvilla.vn/wp-content/uploads/2022/06/top-20-quan-burger-3.jpg",
			description:
				"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus architecto quasi, necessitatibus quos rerum sint",
			price: 15,
		},
		{
			id: 3,
			name: "Bread",
			img: "https://kikifoodies.com/wp-content/uploads/2023/11/D45CAE85-28AC-43DE-87BA-00BE4E5B8694.jpeg",
			description:
				"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus architecto quasi, necessitatibus quos rerum sint",
			price: 20,
		},
		{
			id: 4,
			name: "Cake",
			img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsAogZTbezIjVv1Bujg92UjLJM_y6dCZkrAw&s",
			description:
				"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus architecto quasi, necessitatibus quos rerum sint",
			price: 10,
		},
	],
};

export const reducerShop = (state: StateType = initialState): StateType => {
	return state;
};
