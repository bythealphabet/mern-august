import React, { useState, useEffect, useReducer } from "react";

const ON_CHANGE = "ON_CHANGE";

function reducer(state = "", action) {
	if (action.type === ON_CHANGE) {
		const newValue = action.payload;
		return { ...state, ...newValue };
	}

	return state;
}

const useFromData = () => {
	const [inputData, dispatch] = useReducer(reducer, "");

	const onInputChange = (name) => (e) => {
		let value = e.target.value;
		dispatch({ type: ON_CHANGE, payload: { [name]: value } });
	};

	return [inputData, onInputChange];
};

export default useFromData;
