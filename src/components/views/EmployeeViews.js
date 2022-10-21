import { Outlet, Route, Routes } from "react-router-dom"
import { TicketForm } from "../tickets/TicketForm"
import { TicketContainer } from "../tickets/TicketContainer"
import { EmployeeList } from "../employees/employeeList"
import { CustomerList } from "../customers/CustomerList"
import { CustomerDetails } from "../customers/CustomerDetails"
import { EmployeeDetails } from "../employees/EmployeeDetails"



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
				<Route path="customers" element={ <CustomerList />} />
				<Route path="employees/:employeeId" element={ <EmployeeDetails />} />
				<Route path="customers/:customerId" element={ <CustomerDetails />} />
				
			</Route>
		</Routes>
	)	
}
