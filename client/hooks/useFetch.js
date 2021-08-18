import React, { useState, useEffect } from "react";

export const useFetch = (api, dataObj, callAgain) => {
	const [fetchedData, setFetchedData] = useState();
	const [message, setMessage] = useState("");
	const [error, setError] = useState(false);

	useEffect(() => {
		callApiForMe(dataObj);
	}, [callAgain]);

	return [fetchedData, message, error];

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	async function callApiForMe(obj) {
		try {
			const data = await api(dataObj);
			if (data.error) {
				setError(true);
				setMessage(data.error);
				return;
			}

			setError(false);
			setMessage(data.message);
			setFetchedData(data);
		} catch (err) {
			console.log("err:", err);
		}
	}
};

export const usePost = () => {
	const [fetchedData, setFetchedData] = useState();
	const [message, setMessage] = useState("");
	const [succes, setSucces] = useState(false);
	const [error, setError] = useState(false);

	return [fetchedData, onSubmit, message, succes, error];

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	async function onSubmit(api, dataObj, cb) {
		try {
			const data = await api(dataObj);

			if (data.error) {
				setError(true);
				setMessage(data.error);
				return;
			}
			setError(false);
			setSucces(true);
			setMessage(data.message);
			setFetchedData(data);
			return data;
		} catch {
			console.log("err:", err);
		}
	}
};
