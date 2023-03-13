import React from "react";
import { NavLink } from "react-router-dom";
const Error = () => {
	return (
		<main className="main-error">
			<div className="error-nbr">404</div>
			<div className="error-oups">
				Oups !!! The page you requested does not exist.
			</div>
			<NavLink to="/" className="navigation">
				<div className="error-return">Return to the HomePage</div>
			</NavLink>
		</main>
	);
};

export default Error;
