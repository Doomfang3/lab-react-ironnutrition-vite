import { Divider, Input } from "antd";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

// Iteration 4
function AddFoodForm({ createFood, isHidden }) {
	const [nameState, setNameState] = useState("");
	const [imageState, setImageState] = useState("");
	const [caloriesState, setCaloriesState] = useState(0);
	const [servingsState, setServingsState] = useState(0);

	const handleSubmit = (event) => {
		event.preventDefault();
		const newFood = {
			name: nameState,
			calories: caloriesState,
			image: imageState,
			servings: servingsState,
			id: uuidv4(),
		};
		createFood(newFood);

		setNameState("");
		setImageState("");
		setCaloriesState(0);
		setServingsState(0);
	};

	return (
		<form onSubmit={handleSubmit} hidden={isHidden}>
			<Divider>Add Food Entry</Divider>

			<label>Name</label>
			<Input
				value={nameState}
				type="text"
				onChange={(event) => {
					setNameState(event.target.value);
				}}
			/>

			<label>Image</label>
			<Input
				value={imageState}
				type="url"
				onChange={(event) => {
					setImageState(event.target.value);
				}}
			/>

			<label>Calories</label>
			<Input
				value={caloriesState}
				type="number"
				onChange={(event) => {
					setCaloriesState(event.target.value);
				}}
			/>

			<label>Servings</label>
			<Input
				value={servingsState}
				type="number"
				onChange={(event) => {
					setServingsState(event.target.value);
				}}
			/>

			<button type="submit">Create</button>
		</form>
	);
}

export default AddFoodForm;
