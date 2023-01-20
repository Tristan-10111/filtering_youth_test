import React, { useState } from "react";
import { Link } from "react-router-dom";

function Page1() {
	const [data, setData] = useState({ name: "tristan" });

	setData({
		...data,
		name: data,
	});
	return (
		<div>
			<p></p>
			<p>I am dashboard</p>
			click link to carry it over <br />
			<Link to={{ pathname: "/Page2", data: { data } }}>{data.name}</Link>
		</div>
	);
}

export default Page1;
