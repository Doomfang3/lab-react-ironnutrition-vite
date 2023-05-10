import { Divider, Input } from "antd";
import { useState } from "react";

// Iteration 5
function Search({ applySearch }) {
	const [searchNameState, setSearchNameState] = useState("");

	return (
		<>
			<Divider>Search</Divider>

			<label>Search</label>
			<Input
				value={searchNameState}
				type="text"
				onChange={(event) => {
					setSearchNameState(event.target.value);
					applySearch(event.target.value);
				}}
			/>
		</>
	);
}

export default Search;
