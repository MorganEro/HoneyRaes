import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Tickets.css"

export const TicketList = ({ searchTermState }) => {
    const [tickets, setTickets] = useState([])
    const [filteredTickets, setFiltered] = useState([])
    const [emergency, setEmergency] = useState(false)
    const navigate = useNavigate()
    const [openOnly, updateOpenOnly] = useState(false)

    const localHoneyUser = localStorage.getItem("honey_user")
    const honeyUserObject = JSON.parse(localHoneyUser)


    useEffect(
        ()=>{
            const searchTickets = tickets.filter(ticket => {
                return ticket.description.toLowerCase().startsWith(searchTermState.toLowerCase())
            })
            setFiltered(searchTickets)
        }, [ searchTermState ]
    )


    useEffect(
        ()=> {
            if (emergency) {
                const emergencyTickets = tickets.filter(ticket => ticket.emergency === true)
                setFiltered(emergencyTickets)
            }
        },
        [emergency]
    )




    useEffect(
        () => {
            fetch(`http://localhost:8088/serviceTickets`)
            .then(response => response.json())
            .then((ticketArray) => {
                setTickets(ticketArray)
            })
        },
        []
    )

    useEffect(
        () => {
            if (honeyUserObject.staff) {
                // for employees
                setFiltered(tickets)
            } 
            else {
            // for customers
                const filteredTickets = tickets.filter(ticket => ticket.userId === honeyUserObject.id)
                setFiltered(filteredTickets)

            }
        },
        [tickets]
    )
    useEffect (
        () => {
            if (openOnly) {
            const openTicketArray = tickets.filter(ticket => {
                return ticket.userId === honeyUserObject.id && ticket.dateCompleted === ""
            })
            setFiltered(openTicketArray)
        }
        else {
            const myTickets = tickets.filter(ticket => ticket.userId === honeyUserObject.id)
                setFiltered(myTickets)
        }
    },
        [ openOnly ]
    )

    return<>
        {
            honeyUserObject.staff
            ? <>

                <button
                onClick={
                    ()=> {
                    setEmergency(true)
                    }
                
                }
                >Emergency Only</button>
                <button
                onClick={
                    ()=> {
                    setEmergency(false)
                    }
                
                }
                >Show All</button>
                </>
            : <>
                <button onClick={() => navigate("/ticket/create")}>Create Ticket</button>   
                <button onClick={() => updateOpenOnly()}>Open Tickets</button>   
                <button onClick={() => updateOpenOnly(false)}>All My Tickets</button>   
            </>
        }
        <h2>List of Tickets</h2>

        <article className="tickets">
            {
                filteredTickets.map(
                    (ticket) => {
                        return <section key= {ticket.id}  className="ticket">
                            <header>{ticket.description}</header>
                            <footer>Emergency: {ticket.emergency ? "????" : "No"}</footer>
                        </section>
                    }
                    )
                    
                }
        </article>
    
    </> 
}

