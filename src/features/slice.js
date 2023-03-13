import { createSlice } from "@reduxjs/toolkit";

// Slice

const initialState = {
	employees: [
		{
			firstName: "Denzel",
			lastName: "Washington",
			startDate: "22/10/97",
			department: "Human Resources",
			dateBirth: "28/12/1954",
			street: "Adams Street",
			city: "Mount Vernon",
			state: "NY",
			zipCode: "98274",
		},
		{
			firstName: "Will",
			lastName: "Smith",
			startDate: "15/04/99",
			department: "Marketing",
			dateBirth: "25/09/1968",
			street: "West York Street",
			city: "Philadelphia",
			state: "PA",
			zipCode: "19114",
		},
		{
			firstName: "Samuel L",
			lastName: "Jackson",
			startDate: "02/09/01",
			department: "Sales",
			dateBirth: "21/12/1948",
			street: "Gales St NE",
			city: "Washington",
			state: "WA",
			zipCode: "20047",
		},
	],
};

const Slice = createSlice({
	name: "employee",
	initialState,
	reducers: {
		addEmployee: (state, payload) => {
			state.employees.push(payload.payload);
		},
	},
});

export const { addEmployee } = Slice.actions;
export default Slice.reducer;
