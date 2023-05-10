import "./App.css";
import AddFoodForm from "./components/AddFoodForm";
import FoodBox from "./components/Foodbox.jsx";
import foods from "./foods.json";
import { v4 as uuidv4 } from "uuid";
import { Row, Divider, Button } from "antd";
import { useState } from "react";
import Search from "./components/Search";

foods.forEach((food, i, foods) => {
	foods[i] = { ...food, id: uuidv4() };
});

function App() {
	const [foodsState, setFoodsState] = useState(foods);
	const [foodsDisState, setFoodDisState] = useState(foods);
	const [hiddenState, setHiddenState] = useState(true);

	const createFood = (newFood) => {
		setFoodsState([newFood, ...foodsState]);
		setFoodDisState([newFood, ...foodsState]);
	};

	const applySearch = (searchName) => {
		const newFoods = foodsState.filter((food) => {
			return food.name.toLowerCase().includes(searchName.toLowerCase());
		});
		setFoodDisState(newFoods);
	};
	const deleteFood = (id) => {
		const newFood = foodsState.filter((food) => food.id !== id);
		setFoodsState(newFood);
		setFoodDisState(newFood);
	};

	return (
		<div className="App">
			<AddFoodForm createFood={createFood} isHidden={hiddenState} />

			<Button
				onClick={() => {
					setHiddenState(!hiddenState);
				}}
			>
				{hiddenState ? "Add New Food" : "Hide Form"}
			</Button>

			{/* Display Search component here */}
			<Search applySearch={applySearch} />

			<Divider>Food List</Divider>

			{foodsDisState.length === 0 ? (
				<div className="not-found-page">
					<p>Oops!There is no more contents to show.</p>
					<img
						src="https://static.thenounproject.com/png/1103191-200.png"
						alt="not found"
					/>
				</div>
			) : null}
			<Row style={{ width: "100%", justifyContent: "center" }}>
				{foodsDisState.map((food) => {
					return (
						<FoodBox
							key={food.id}
							id={food.id}
							name={food.name}
							image={food.image}
							calories={food.calories}
							servings={food.servings}
							deleteFood={deleteFood}
						/>
					);
				})}
			</Row>
		</div>
	);
}

export default App;
