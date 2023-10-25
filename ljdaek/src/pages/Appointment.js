import { Navigate, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import styles from "../styling/appointmentPage.jsx"
import Header from "../components/Header";

const Appointment = ({loggedIn}) => {
    
    const [appointments, setAppointments] = useState([])
    const [cookies, setCookie] = useCookies(['token']);
    const [customers, setCustomers] = useState([])
    const navigate = useNavigate()

    const GetData = () => {
        fetch("http://192.168.1.232:5000/api/appointment", {
            headers: {
                authorization: cookies?.token
            }
        })
        .then(res => {
            if (res.status == 401) {
                window.location.href = ""
            } else {
                res.json()
                .then((json) => {
                    setAppointments(json)
                    for (var i in json) {
                        fetch("http://192.168.1.232:5000/api/customer/" + json[i].customerId, {
                            headers: {
                                authorization: cookies?.token
                            }
                        })
                        .then(res => {
                            if (res.status == 401) {
                                navigate("../../login")
                                window.location.href = ""
                            } else {
                                res.json()
                                .then((json) => {
                                    setCustomers(customers => [...customers, json])
                                })
                            }
                        })
                    }
                    
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
                <h1>WORK IN PROGRESS</h1>
                {/* <div style={styles.appointmentContainer}>
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
                </div> */}
            </>
        )
    }
}

export default Appointment;