import React, { useMemo } from "react";
import { NavLink } from "react-router-dom";
import MaterialReactTable from "material-react-table";
import { useSelector } from "react-redux";

const CurrentEmployeeList = () => {
	const employees = useSelector((state) => state.employee.employees);

	const columns = useMemo(
		() => [
			{
				header: "First Name",
				accessorKey: "firstName",
				size: 100,
			},
			{
				header: "Last Name",
				accessorKey: "lastName",
				size: 100,
			},
			{
				header: "Start Date",
				accessorKey: "startDate",
				size: 100,
			},
			{
				header: "Department",
				accessorKey: "department",
				size: 100,
			},
			{
				header: "Date of Birth",
				accessorKey: "dateBirth",
				size: 100,
			},
			{
				header: "Street",
				accessorKey: "street",
				size: 100,
			},
			{
				header: "City",
				accessorKey: "city",
				size: 100,
			},
			{
				header: "State",
				accessorKey: "state",
				size: 100,
			},
			{
				header: "Zip Code",
				accessorKey: "zipCode",
				size: 100,
			},
		],
		[]
	);

	return (
		<div className="main-div">
			<h1>Current Employees</h1>
			{employees ? (
				<MaterialReactTable
					columns={columns}
					data={employees}
					enableColumnActions={false}
					enableColumnFilters={false}
					enableFullScreenToggle={false}
					enableDensityToggle={false}
				/>
			) : (
				<span>No data to display</span>
			)}

			<NavLink to="/" className="home-return">
				Home
			</NavLink>
		</div>
	);
};

export default CurrentEmployeeList;
