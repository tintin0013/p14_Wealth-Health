import { configureStore } from "@reduxjs/toolkit";
import employeesReducer from "../features/slice.js";

const store = configureStore({
	reducer: { employee: employeesReducer },
});

export default store;
