import { Outlet, Route, Routes } from "react-router-dom"
import { Profile } from "../profile/Profile"
import { TicketForm } from "../tickets/TicketForm"
import { TicketList } from "../tickets/TicketList"



export const CustomerViews = () => {
		return (
		<Routes>
			<Route path="/" element={
				<>
					<h1>Honey Rae Repairs</h1>
					<div>Your one-stop shop to get all your electronics fixed. Hope you came with a sweet tooth! </div>

					<Outlet />

				</>
			}>

				<Route path="tickets" element={ <TicketList />} />
				<Route path="ticket/create" element={ <TicketForm /> } />
				<Route path="profile" element={ <Profile /> } />
			</Route>
		</Routes>
	)	
}
