import React from "react";

function Page2(props) {
	const { name } = props.location;
	return (
		<div>
			I am Page2
			<p>{name}</p>
		</div>
	);
}

export default Page2;
