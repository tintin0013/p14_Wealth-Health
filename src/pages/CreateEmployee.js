import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import states from "../mock/states";
import departments from "../mock/departments";
import { addEmployee } from "../features/slice";
import { formatDate } from "../utils/formatDate";
import Modal from "ocr-p14-modal"


const CreateEmployee = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [dateBirth, setDateBirth] = useState("");
	const [startDate, setStartDate] = useState("");
	const [street, setStreet] = useState("");
	const [city, setCity] = useState("");
	const [state, setState] = useState("");
	const [zipCode, setZipCode] = useState("");
	const [department, setDepartment] = useState("");
    const [isModalVisible, setIsModalVisible] = useState(false);

	const dispatch = useDispatch();

	const handleSave = (e) => {
        console.log('put');
		e.preventDefault();
		const employee = {
			firstName,
			lastName,
			startDate: formatDate(startDate),
			department,
			dateBirth: formatDate(dateBirth),
			street,
			city,
			state,
			zipCode,
		};

		dispatch(addEmployee(employee));
		setIsModalVisible(true);
	};

    const handleClosing = (e) => {
		setIsModalVisible(false);
	};

	return (
        
		<div className="createEmployee">
            
			<section>
				<h1>HRnet</h1>
				<NavLink to="/employees">View Current Employees</NavLink>
			</section>

			<form>
				<h2>Create Employee</h2>
				<div className="form-name">
					<label>
						First Name :
						<input type="text" onChange={(e) => setFirstName(e.target.value)} />
					</label>
					<label>
						Last Name :
						<input type="text" onChange={(e) => setLastName(e.target.value)} />
					</label>
					<label>
						Date of Birth :
						<DatePicker
							dateFormat="dd/MM/yyyy"
							selected={dateBirth}
							onChange={(date) => setDateBirth(date)}
						/>
					</label>
					<label>
						Start Date :
						<DatePicker
							dateFormat="dd/MM/yyyy"
							selected={startDate}
							onChange={(date) => setStartDate(date)}
						/>
					</label>
				</div>

				<fieldset className="form-adress">
					<legend>Address</legend>
					<label>
						Street :
						<input type="text" onChange={(e) => setStreet(e.target.value)} />
					</label>
					<label>
						City :
						<input type="text" onChange={(e) => setCity(e.target.value)} />
					</label>
					<label>
						State:
						<Dropdown
							options={states.map((el) => ({
								label: el.name,
								value: el.abbreviation,
							}))}
							onChange={(e) => setState(e.value)}
							placeholder="Select a State"
						/>
					</label>

					<label>
						Zip Code :
						<input type="text" onChange={(e) => setZipCode(e.target.value)} />
					</label>
				</fieldset>
				<label>
					Department:
					<Dropdown
						options={departments}
						onChange={(e) => setDepartment(e.value)}
						placeholder="Select a Department"
					/>
				</label>
				<div className="form-submitBtn">
					<input type="submit" onClick={handleSave} />
				</div>
			</form>
            {isModalVisible && ( <Modal message="User Created Successfully" onClose={handleClosing}/>
			)}
		</div>
	);
};

export default CreateEmployee;
