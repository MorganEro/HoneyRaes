import { Outlet, Route, Routes } from "react-router-dom"
import { TicketForm } from "../tickets/TicketForm"
import { TicketContainer } from "../tickets/TicketContainer"
import { EmployeeList } from "../employees/employeeList"



export const EmployeeViews = () => {
		return (
		<Routes>
			<Route path="/" element={
				<>
					<h1>Honey Rae Repairs</h1>
					<div>Your one-stop shop to get all your electronics fixed</div>

					<Outlet />

				</>
			}>

				<Route path="tickets" element={ <TicketContainer />} />
				<Route path="employees" element={ <EmployeeList />} />
				
			</Route>
		</Routes>
	)	
}
