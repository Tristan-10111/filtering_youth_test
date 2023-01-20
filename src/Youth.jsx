import { Link } from "react-router-dom";

const Youth = (props) => {
	// const youth = props.youth;
	console.log(props.youth);
	const handleYouth = props.handleYouth;
	// const getSelectedYouth = props.getSelectedYouth;

	return (
		<div>
			{props.youth.map((eachYouth) => {
				return (
					<div className='d-flex' key={eachYouth.id}>
						<Link to={`/YouthDetails/:${eachYouth.id}`}>
							<p className='mx-1'>{eachYouth.name}</p>
							<p className='mx-1'>{eachYouth.surname}</p>
						</Link>
						<p className='mx-3'>{eachYouth.Cnumber}</p>,
						<p className='mx-3'>{eachYouth.email}</p>
						<button onClick={() => handleYouth(eachYouth.id)}>
							handleYouth
						</button>
					</div>
				);
			})}
		</div>
	);
};

export default Youth;
