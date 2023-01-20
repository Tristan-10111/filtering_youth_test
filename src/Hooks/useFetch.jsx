import React, { useEffect, useState } from "react";

const useFetch = (url) => {
	const [youth, setYouth] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		// console.log("useEffect ran");
		setTimeout(() => {
			fetch("http://localhost:8000/Youth")
				.then((res) => {
					if (!res.ok) {
						throw Error("Youth is not accessible");
					}
					return res.json();
				})
				.then((data) => {
					setYouth(data);
					setLoading(false);
					setError(null);
				})
				.catch((err) => {
					setLoading(false);
					setError(err.message);
				});
		}, 1000);
	}, []); // useEffect will only run the function if it is in the dependency array
};
