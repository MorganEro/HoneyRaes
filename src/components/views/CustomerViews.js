import { Outlet, Route, Routes } from "react-router-dom"
import { TicketForm } from "../tickets/TicketForm"
import { TicketList } from "../tickets/TicketList"



export const CostumerViews = () => {
		return (
		<Routes>
			<Route path="/" element={
				<>
					<h1>Honey Rae Repairs</h1>
					<div>Your one-stop shop to get all your electronics fixed</div>

					<Outlet />

				</>
			}>

				<Route path="tickets" element={ <TicketList />} />
				<Route path="ticket/create" element={ <TicketForm /> } />				
			</Route>
		</Routes>
	)	
}