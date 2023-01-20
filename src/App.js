import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Page1 from "./Components/Page1";
// import Page2 from "./Components/Page2";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import YouthDetails from "./YouthDetails";

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Dashboard />} />
					<Route path='/YouthDetails/:id' element={<YouthDetails />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
