import { Card, Col, Button } from "antd";

// Iteration 2
function FoodBox({ name, image, calories, servings, deleteFood, id }) {
	return (
		<Col>
			<Card title={name} style={{ width: 230, height: 320, margin: 10 }}>
				<img src={image} height={60} alt={`${name} Pic`} />
				<p>Calories: {calories}</p>
				<p>Servings: {servings}</p>
				<p>
					<b>Total Calories: {calories * servings}</b> kcal
				</p>
				<Button
					type="primary"
					onClick={() => {
						deleteFood(id);
					}}
				>
					Delete
				</Button>
			</Card>
		</Col>
	);
}

export default FoodBox;
