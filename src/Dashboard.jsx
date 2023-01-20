import React, { useEffect, useState } from "react";
import Youth from "./Youth";

export default function Dashboard() {
	const [youth, setYouth] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	function handleYouth(id) {
		const selectYouth = youth.filter((chosenYouth) => chosenYouth.id === id);
		setYouth(selectYouth);
	}

	// useEffect(() => {
	// 	// console.log("useEffect ran");
	// 	setTimeout(() => {
	// 		fetch("http://localhost:8000/Youth")
	// 			.then((res) => {
	// 				if (!res.ok) {
	// 					throw Error("Youth is not accessible");
	// 				}
	// 				return res.json();
	// 			})
	// 			.then((data) => {
	// 				setYouth(data);
	// 				setLoading(false);
	// 				setError(null);
	// 			})
	// 			.catch((err) => {
	// 				setLoading(false);
	// 				setError(err.message);
	// 			});
	// 	}, 1000);
	// }, []); // useEffect will only run the function if it is in the dependency array
	///this useEffect function runs on every render
	// with a dependencie is when u only want the function to run on first render

	return (
		<div className='container'>
			<h1 className='mb-5 mt-3'>Dashboard</h1>
			<div className='row '>
				<div className='col-6'>agent profile section</div>
				{error && <p>{error}</p>}
				{loading && <div>Is Loading...</div>}
				{youth && (
					<div className='col-6'>
						<Youth youth={youth} handleYouth={handleYouth} />
					</div>
				)}
			</div>
		</div>
	);
}
