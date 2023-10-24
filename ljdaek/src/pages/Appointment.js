import { Navigate, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import styles from "../styling/appointmentPage.jsx"
import Header from "../components/Header";

const Appointment = ({loggedIn}) => {
    
    const [appointments, setAppointments] = useState([])
    const [customers, setCustomers] = useState([])
    const navigate = useNavigate()

    const GetData = () => {
        fetch("http://192.168.1.232:5000/api/appointment")
        .then(res => res.json())
        .then((json) => {
            setAppointments(json)
            for (var i in json) {
                fetch("http://192.168.1.232:5000/api/customer/" + json[i].customerId)
                .then(res => res.json())
                .then((json) => {
                    setCustomers(customers => [...customers, json])
                })
            }
            
        })
    }

    useEffect(() => {
        if (!loggedIn) {
            navigate("../login")
        } else {
            GetData()
        }
    }, [])
    
    if (!loggedIn) {
        return <Navigate replace to="../login" />;
    } else {
        return (
            <>
                <Header />
                <div style={styles.appointmentContainer}>
                    <h1>Kommende Aftaler</h1>
                    <div>
                        {appointments?.filter(x => new Date(x.time) > new Date()).map((appointment, i) => {
                            return(
                                <div key={i}>
                                    <h1>{customers?.find(x => x.id == appointment.customerId)?.name}</h1>
                                    <h1>{customers?.find(x => x.id == appointment.customerId)?.phone}</h1>
                                    <h1>{appointment.time}</h1>
                                    <h1>{appointment.note}</h1>
                                </div>
                            )
                        })}
                    </div>
                    <h1>Gamle Aftaler</h1>
                    <div>
                        {appointments?.filter(x => new Date(x.time) < new Date()).map((appointment, i) => {
                            return(
                                <div key={i}>
                                    <h1>{customers?.find(x => x.id == appointment.customerId)?.name}</h1>
                                    <h1>{customers?.find(x => x.id == appointment.customerId)?.phone}</h1>
                                    <h1>{appointment.time}</h1>
                                    <h1>{appointment.note}</h1>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </>
        )
    }
}

export default Appointment;