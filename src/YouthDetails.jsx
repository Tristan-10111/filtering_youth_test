import React from "react";
import { useParams } from "react-router-dom";

export default function YouthDetails() {
	const { id } = useParams();

	// const {data, error, isPending}

	return <div>YouthDetails {id}</div>;
}
