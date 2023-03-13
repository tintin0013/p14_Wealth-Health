import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateEmployee from "./pages/CreateEmployee";
import CurrentEmployeeList from "./pages/CurrentEmployeeList";

import Error from "./pages/Error";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
      <Route exact path="/" element={<CreateEmployee />} />
      <Route path="/employees" element={<CurrentEmployeeList />} />
				<Route path="/*" element={<Error />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;